// TODO: Add logic that enables something like this:
// const myObject = {
//   user: 'dog',
//   includeCapitalized: true,
// }
// And appends a quick function to the string to capitalize the variables

const getParameters = (convertToVariables) => {
  let parameters = [];
  let parametersWithQuotes = [];
  let allParameters = [];

  for (const replaceThisString in convertToVariables) {
    const replacement = convertToVariables[replaceThisString];
    parameters.push(replacement);
  };

  for (const replaceThisString in convertToVariables) {
    const replacement = convertToVariables[replaceThisString];
    parametersWithQuotes.push(`'${replacement}'`);
  };

  const lengthOfParameters = parameters.length;

  parameters = parameters.map((parameter, index) => {
    if (index === lengthOfParameters - 1) {
      return `${parameter}`;
    } else {
      return `${parameter},`;
    };
  });

  parametersWithQuotes = parametersWithQuotes.map((parameter, index) => {
    if (index === lengthOfParameters - 1) {
      return `${parameter}`;
    } else {
      return `${parameter},`;
    };
  });

  allParameters.push(parameters.join(' '), parametersWithQuotes.join(' '));

  return allParameters;
};

export default getParameters;