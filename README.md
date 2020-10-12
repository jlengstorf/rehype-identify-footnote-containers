# rehype-identify-footnote-containers

I needed a way to style elements that contained footnotes, but I wanted to keep using Markdown, so I put together this [**rehype**](https://github.com/rehypejs/rehype) plugin to add a class to any element that contains a Markdown-generated footnote reference link.

I feel like this is an edge case, but probably not such an edge case that I’ll never use it again, so it’s an npm package now. :shrug:

## Installation & Usage

```sh
npm i rehype-identify-footnote-containers
```

In your Rehype config:

```js
var unified = require("unified");
var parse = require("rehype-parse");
var stringify = require("rehype-stringify");
var identifyFootnoteContainers = require("rehype-identitfy-footnote-containers");

// see https://unifiedjs.com/learn/guide/using-unified/ for more details
unified()
  .use(parse) // parse HTML into an AST
  .use(identifyFootnoteContainers) // <= add the plugin
  .use(stringify) // turn the AST back into HTML
  .process(/* ... */)
```