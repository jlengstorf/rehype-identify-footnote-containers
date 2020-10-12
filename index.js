const visit = require('unist-util-visit');

module.exports = () => (tree) => {
  let fnCount = 1;

  visit(
    tree,
    (node) => {
      const isElement = node.type === 'element';
      const hasFootnote = node.children?.some((child) =>
        child.properties?.id?.match(/^fnref-/),
      );

      return isElement && hasFootnote;
    },
    (node) => {
      const existingClassNames = node.properties.className || [];
      node.properties.className = [...existingClassNames, 'has-footnote'];
    },
  );
};
