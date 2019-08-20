# React Hooks + Context API Todo App Example

React 16.x version has important features, hooks.
So, while writing the examples for "hooks," I wrote an example of replacing a store like Redux using the Context API.

## Installation With Run

```bash
$ npm install
$ npm run start
```

## Tech Stacks

- TypeScript
- React 16.x
- Hooks
- Context API

## Use Pattern

- ***Atomic Design***
- ***Containers, Presentationals Pattern***

## Folder Structure

- src
  - assets: common styles and public assets
  - components: layout components
    - atoms: element layouts
    - molecules: grouping layouts
    - organisms: molecules + atoms + etc layouts
    - templates: page template css
  - containers: state, data components
  - models: model interface
  - store: global store (use context api)