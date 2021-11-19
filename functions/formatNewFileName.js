const formatNewFileName = (newFileName) => {
  if (newFileName === 'newTemplateGenerator.js') {
    const randomNum = (Math.floor(Math.random() * (10000 - 1) + 1)).toString();
    newFileName = `newTemplateGenerator${randomNum}.js`;
  };

  if (!newFileName.includes('.js') && !newFileName.includes('.ts')) {
    newFileName = `${newFileName}.js`;
  };

  return newFileName;
};

export default formatNewFileName;