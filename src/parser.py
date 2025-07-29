import os
import re
import importlib
import inspect
import kivy
import kivy.uix
import json

# --- Step 1: Locate factory_registers.py ---
def get_factory_classes():
    factory_path = os.path.join(os.path.dirname(kivy.__file__), "factory_registers.py")
    registered = {}
    with open(factory_path, 'r') as f:
        for line in f:
            match = re.match(r"r\('(\w+)',\s*module='([\w\.]+)'\)", line.strip())
            if match:
                class_name, module = match.groups()
                registered[class_name] = module
    return registered

# --- Step 2: Get all Kivy widget classes ---
def get_kivy_widgets():
    widgets = []
    for name in dir(kivy.uix):
        try:
            mod = importlib.import_module(f'kivy.uix.{name}')
            for cls_name, cls in inspect.getmembers(mod, inspect.isclass):
                if 'kivy.uix' in cls.__module__:
                    widgets.append(cls)
        except Exception:
            continue
    return widgets

# --- Step 3: Get properties of a widget class ---
def get_properties(cls):
    props = []
    for name, attr in cls.__dict__.items():
        if hasattr(attr, '__class__') and 'Property' in attr.__class__.__name__:
            props.append(name)
    return props

# --- Step 4: Combine and format ---
def main():
    factory_classes = get_factory_classes()
    widget_classes = {cls.__name__: cls for cls in get_kivy_widgets()}

    print("🔍 Registered Kivy Classes:")
    for name in factory_classes:
        print(f"- {name}")

    user_input = input("\nEnter a class name to use: ").strip()

    if user_input in widget_classes and user_input in factory_classes:
        print(f"\n📦 Output:\n{user_input}:\n\t")
        props = get_properties(widget_classes[user_input])
        if props:
            print("🧩 Properties:")
            for p in props:
                print(f"\t{p}")
    elif user_input in factory_classes:
        print(f"\n📦 Output:\n{user_input}")
    else:
        print("❌ Class not found or not registered.")

if __name__ == "__main__":
    main()