# CodeKivy

CodeKivy is a Visual Studio Code extension that brings modern Kivy and KvLang support to your editor. It provides syntax highlighting, snippets, and intelligent autocompletion for `.kv` files, making Kivy UI development faster and more productive.

## Features

- **KvLang Syntax Highlighting:**
    Full syntax highlighting for KvLang files using a custom TextMate grammar.

- **Intelligent Autocompletion:**
    Autocomplete for Kivy widget classes and their properties, including user-defined Python classes and properties.

- **Snippets:**
    Handy code snippets for common KvLang patterns, such as class rules, property bindings, event handlers, canvas blocks, and conditional expressions.

- **Live Updates:**
    Watches your Python files for changes and updates the list of available widgets and properties automatically.

## Requirements

- [Python](https://www.python.org/) installed and available in your system PATH.
- [Kivy](https://kivy.org/) installed in your Python environment.

## Extension Settings

This extension does not add any custom settings at this time.

## Usage

1. Install the extension in VS Code.
2. Open or create a `.kv` file in your workspace.
3. Start typing widget names or properties to see autocompletion suggestions.
4. Use the provided snippets by typing their prefixes (e.g., `definition`, `property`, `canvas`, etc.).

## Known Issues

- Autocompletion for custom widgets depends on your workspace Python files being up-to-date.
- Large projects may experience a slight delay when scanning for Python classes.

## Release Notes

### 0.0.1

- Initial release with syntax highlighting, snippets, and basic autocompletion for Kivy widgets and properties.

---

**Enjoy building with Kivy in VS Code!**

---

## For more information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Kivy Documentation](https://kivy.org/doc/stable/)
