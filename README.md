# CodeKivy

[![GitHub Issues](https://img.shields.io/github/issues/Novfensec/CodeKivy?style=flat-square)](https://github.com/Novfensec/CodeKivy/issues)
[![GitHub License](https://img.shields.io/github/license/Novfensec/CodeKivy?style=flat-square)](https://github.com/Novfensec/CodeKivy/blob/main/LICENSE)
[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/Novfensec.codekivy?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=Novfensec.codekivy)
[![GitHub Stars](https://img.shields.io/github/stars/Novfensec/CodeKivy?style=flat-square)](https://github.com/Novfensec/CodeKivy/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Novfensec/CodeKivy?style=flat-square)](https://github.com/Novfensec/CodeKivy/network/members)
[![GitHub Watchers](https://img.shields.io/github/watchers/Novfensec/CodeKivy?style=flat-square)](https://github.com/Novfensec/CodeKivy/watchers)

<p align="center">
    <img height="180" align="right" padding="11" src="https://raw.githubusercontent.com/Novfensec/CodeKivy/master/assets/icon.png" style="border-radius:1em" 
            title="kvdeveloper create MyApp --template nav_toolbar"
        />
</p>

CodeKivy is a powerful and thoughtfully crafted Visual Studio Code extension that transforms the way you build user interfaces with Kivy and KvLang—Python’s dynamic, declarative UI framework and language. Whether you're crafting elegant mobile apps, responsive desktop tools, or experimental UI prototypes, CodeKivy equips you with a modern, intuitive development environment tailored for speed, precision, and creativity.

By integrating deeply with both your .kv files and Python backend, CodeKivy bridges the gap between design and logic—bringing intelligent autocompletion, real-time syntax awareness, and ergonomic snippets directly into your editor. It understands your custom widget classes, tracks property definitions, and adapts to your codebase as it evolves, enabling a seamless and productive workflow.

Gone are the days of manual lookups, boilerplate repetition, and cryptic KvLang errors. With CodeKivy, your editor becomes a smart assistant—highlighting structure, suggesting valid properties, and keeping your UI logic in sync with your Python code. Whether you're iterating rapidly on layout ideas or fine-tuning animations and bindings, CodeKivy helps you stay focused on what matters: building beautiful, functional interfaces with confidence.

## Features

- **KvLang Syntax Highlighting:**
    Enjoy vibrant, context-aware syntax highlighting for `.kv` files powered by a custom TextMate grammar. From widget rules to canvas instructions, every element is styled for clarity and readability.

- **Intelligent Autocompletion:**
    Get smart suggestions for Kivy widgets, properties, and event handlers—including your own Python classes and custom properties. CodeKivy parses your project in real time to offer accurate, context-sensitive completions

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
