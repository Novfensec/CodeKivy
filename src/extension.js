const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

let widgetClasses = new Map(); // filename -> [classNames]
let kivyProperties = new Map(); // className -> [properties]

function debounce(fn, delay) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

function loadPythonClasses(workspaceFolders) {
    widgetClasses.clear();
    workspaceFolders.forEach(folder => {
        const files = getPythonFiles(folder.uri.fsPath);
        files.forEach(file => {
            const classNames = extractClassNames(file);
            widgetClasses.set(file, classNames);
        });
    });

    const kivyPath = getKivyPath();
    if (kivyPath) {
        const kivyFiles = getPythonFiles(kivyPath);
        kivyFiles.forEach(file => {
            const classNames = extractClassNames(file);
            widgetClasses.set(file, classNames);
        });
    }

    loadKivyProperties();
}

function getPythonFiles(dir) {
    let results = [];
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getPythonFiles(fullPath));
        } else if (file.endsWith('.py')) {
            results.push(fullPath);
        }
    });
    return results;
}

function extractClassNames(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const classRegex = /class\s+(\w+)\s*\((.*?)\)\s*:/g;
    let matches, classes = [];
    while ((matches = classRegex.exec(content)) !== null) {
        classes.push(matches[1]);
    }
    return classes;
}

function getKivyPath() {
    const result = spawnSync('python', ['-c', 'import kivy; print(kivy.__path__[0])']);
    if (result.status === 0) {
        return result.stdout.toString().trim();
    }
    return null;
}

function loadKivyProperties() {
    try {
        const result = spawnSync('python', [path.join(__dirname, 'parser.py')]);
        if (result.status === 0) {
            const data = JSON.parse(result.stdout.toString());
            kivyProperties = new Map(Object.entries(data));
        }
    } catch (err) {
        console.error('Failed to load Kivy properties:', err);
    }
}

function provideCompletionItems(document, position) {
    const line = document.lineAt(position).text;
    const suggestions = [];

    // Suggest widget classes
    if (/^\s*\w*$/.test(line)) {
        widgetClasses.forEach(classList => {
            classList.forEach(cls => {
                const item = new vscode.CompletionItem(cls, vscode.CompletionItemKind.Class);
                item.insertText = `${cls}:\n\t`; // Indented block for widgets
                suggestions.push(item);
            });
        });
    }

    // Suggest properties inside a widget block
    const widgetName = findWidgetContext(document, position);
    if (widgetName && kivyProperties.has(widgetName)) {
        kivyProperties.get(widgetName).forEach(prop => {
            const item = new vscode.CompletionItem(prop, vscode.CompletionItemKind.Property);
            item.insertText = `${prop}: `; // Property formatting
            suggestions.push(item);
        });
    }

    return suggestions;
}

function findWidgetContext(document, position) {
    for (let i = position.line; i >= 0; i--) {
        const line = document.lineAt(i).text;
        const match = line.match(/^\s*(\w+):/);
        if (match) {
            return match[1];
        }
    }
    return null;
}

function setupFileWatcher(context) {
    const watcher = vscode.workspace.createFileSystemWatcher('**/*.py');
    const debouncedRefresh = debounce(refreshFile, 500);

    watcher.onDidChange(uri => debouncedRefresh(uri.fsPath));
    watcher.onDidCreate(uri => debouncedRefresh(uri.fsPath));
    watcher.onDidDelete(uri => widgetClasses.delete(uri.fsPath));

    context.subscriptions.push(watcher);
}

function refreshFile(filePath) {
    if (filePath.endsWith('.py')) {
        const classNames = extractClassNames(filePath);
        widgetClasses.set(filePath, classNames);
    }
}

function activate(context) {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (workspaceFolders) {
        loadPythonClasses(workspaceFolders);
        setupFileWatcher(context);
    }

    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider(
            { language: 'kvlang', scheme: 'file' },
            { provideCompletionItems },
            '.', ':'
        )
    );
}

exports.activate = activate;
exports.deactivate = () => { };