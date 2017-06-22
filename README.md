# Craven Boilerplate

### A Boilerplate for web development

* EsLint - Using AirBnb preset
* Stylelint - Standard preset
* Mocha/Chai - For unit testing
* ES6 syntax using Babel

## Setup
1. Clone the repo via git:

```bash
git clone https://github.com/papa-ogen/craven-boilerplate.git your-project-name
```

2. And then install dependencies:

```bash
cd your-project-name
npm install
```

3. Start project
```bash
npm start
```

(Runs on http://localhost:8080)

## Test
Start a test run
```bash
npm run test
```

Initiate test watch
```bash
npm run test:watch
```

## Editor Configuration
Add the following extensions to improve development:

**VSCode**
* [Editorconfig](https://github.com/editorconfig/editorconfig-vscode)
* [ESLint](https://github.com/Microsoft/vscode-eslint)
* [Flow](https://github.com/flowtype/flow-for-vscode)
* [Babel](https://github.com/dzannotti/vscode-babel)
* [ES6 Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)

## React Setup
https://facebook.github.io/react/docs/installation.html

### Install dev Dependencies
```bash
npm install --save-dev babel-preset-react eslint-config-airbnb eslint-plugin-jsx-a11y
```

### Install Dependencies
```bash
npm install --save react react-dom
```

### Edit .eslintrc.json
```json
"extends": ["airbnb", "plugin:react/recommended"],
```

#### and ignore following rule:
```json
"rules": {
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ]
    }
```
#### add "react" to plugins
```json
"plugins": [ "react" ]
```

### Edit .babelrc
```json
{
 "presets": [ "react", "es2015" ]
}
```

### Edit src/index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

require('./index.html');
require('./scss/styles.scss');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root'),
);
```