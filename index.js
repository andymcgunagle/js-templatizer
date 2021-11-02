import templatize from './templatizerFunctions/templatize.js';

const jsTemplatizer = {
  templatize,
};

// TODO: Need to make the file extension more general 
// jsTemplatizer.templatize('HELLO.txt', { WORLD: 'Bobby!' }, 'myNewFile');

jsTemplatizer.templatize('userModel.js', { user: 'param1' }, 'modelGenerator');

export default jsTemplatizer;