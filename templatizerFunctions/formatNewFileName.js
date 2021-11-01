const formatNewFileName = (newFileName) => {
  if (newFileName === 'newTemplateGenerator.js') {
    const randomNum = (Math.floor(Math.random() * (10000 - 1) + 1)).toString();
    newFileName = `newTemplateGenerator${randomNum}.js`;
  };

  console.log(newFileName)

  if (!newFileName.includes('.js') && !newFileName.includes('.ts')) {
    newFileName = `${newFileName}.js`;
  };

  console.log(newFileName)

  return newFileName;
};

export default formatNewFileName;