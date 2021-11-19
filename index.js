import templatize from './functions/templatize.js';

const jsTemplatizer = {
  templatize,
};

// TEST
// templatize('sample.txt', {
//   world: 'Bobby',
// }, 'myNewFile');

// TODO: Refactor to an object
// templatize({
//   filetoTemplatize: 'sample.txt',
//   convertToParams: [],
//   templatizerFileName: 'myNewTemplatizer',
// });

export default jsTemplatizer;