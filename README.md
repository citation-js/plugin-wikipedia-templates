# @citation-js/wikipedia-templates

This plugin adds support for outputting [Citation Style 1 templates](https://en.wikipedia.org/wiki/Template:Citation_Style_documentation/cs1)
of the English Wikipedia.

[![NPM version](https://img.shields.io/npm/v/@citation-js/plugin-wikipedia-templates.svg)](https://npmjs.org/package/@citation-js/plugin-wikipedia-templates)
[![Codecov](https://img.shields.io/codecov/c/gh/citation-js/plugin-wikipedia-templates)](https://app.codecov.io/gh/citation-js/wikipedia-templates)
[![NPM total downloads](https://img.shields.io/npm/dt/@citation-js/wikipedia-templates.svg)](https://npmcharts.com/compare/@citation-js%2Fwikipedia-templates?minimal=true)
![License](https://img.shields.io/npm/l/@citation-js/plugin-wikipedia-templates.svg)

## Install

```js
npm install @citation-js/plugin-wikipedia-templates
```

## Use

Install the plugin by `require`-ing it:

```js
require('@citation-js/plugin-wikipedia-templates')
```

## Formats

Formats and other features added by this plugin.

### Output

#### `wikipediaTemplate`

```js
cite.format('wikipediaTemplate', options = {})
```

Options:

  - `options.format`: `'vertical'` (default) or `'horizontal'`
