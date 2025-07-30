# CodeKivy

[![GitHub Issues](https://img.shields.io/github/issues/Novfensec/CodeKivy?style=flat-square)](https://github.com/Novfensec/CodeKivy/issues)
[![GitHub License](https://img.shields.io/github/license/Novfensec/CodeKivy?style=flat-square)](https://github.com/Novfensec/CodeKivy/blob/main/LICENSE)
[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/Novfensec.codekivy?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=Novfensec.codekivy)
[![GitHub Stars](https://img.shields.io/github/stars/Novfensec/CodeKivy?style=flat-square)](https://github.com/Novfensec/CodeKivy/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Novfensec/CodeKivy?style=flat-square)](https://github.com/Novfensec/CodeKivy/network/members)
[![GitHub Watchers](https://img.shields.io/github/watchers/Novfensec/CodeKivy?style=flat-square)](https://github.com/Novfensec/CodeKivy/watchers)

![icon](https://raw.githubusercontent.com/Novfensec/CodeKivy/master/assets/icon.png)

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

## Financial Support

[![Donate via PayPal](https://img.shields.io/badge/Donate%20via-PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.me/KARTAVYASHUKLA)

[![OpenCollective](https://img.shields.io/opencollective/all/Novfensec?style=for-the-badge&label=Support%20Novfensec&logo=opencollective&color=blue)](https://opencollective.com/Novfensec)

[![GitHub Sponsors](https://img.shields.io/github/sponsors/Novfensec?style=for-the-badge&label=Sponsor%20Novfensec&logo=github&color=000000)](https://github.com/sponsors/Novfensec)

## Release Notes

### 0.0.1

- Initial release with syntax highlighting, snippets, and basic autocompletion for Kivy widgets and properties.

**Enjoy building with Kivy in VS Code!**

## For more information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Kivy Documentation](https://kivy.org/doc/stable/)
