const getParameters = (stringsToReplace) => {
  let parameters = '';
  let parametersWithQuotes = '';
  let allParameters = [];
  const lengthOfReplacementStrings = stringsToReplace.length;

  stringsToReplace.forEach((object, index) => {
    if (index === lengthOfReplacementStrings - 1) {
      const parameter = Object.keys(object)[0];
      parameters = parameters + `${object[parameter]}`;
    } else {
      const parameter = Object.keys(object)[0];
      parameters = parameters + `${object[parameter]}, `;
    };
  });

  stringsToReplace.forEach((object, index) => {
    if (index === lengthOfReplacementStrings - 1) {
      const parameter = Object.keys(object)[0];
      parametersWithQuotes = parametersWithQuotes + `'${object[parameter]}'`;
    } else {
      const parameter = Object.keys(object)[0];
      parametersWithQuotes = parametersWithQuotes + `'${object[parameter]}', `;
    };
  });

  allParameters.push(parameters, parametersWithQuotes);

  return allParameters;
};

export default getParameters;