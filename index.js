import templatize from './functions/templatize.js';

const jsTemplatizer = {
  templatize,
};

// TEST
// templatize({
//   fileToTemplatize: 'sample.txt',
//   convertToVariables: { world: 'param1' },
//   nameOfNewFile: 'myNewTemplate',
// });

export default jsTemplatizer;