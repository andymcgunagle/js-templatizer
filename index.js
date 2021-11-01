import templatize from './templatizerFunctions/templatize.js';

const jsTemplatizer = {
  templatize,
};

jsTemplatizer.templatize(
  'userModel.js',
  {
    user: 'lowerCaseParam1',
    User: 'upperCaseParam1'
  },
  'modelGenerator'
);

export default jsTemplatizer;