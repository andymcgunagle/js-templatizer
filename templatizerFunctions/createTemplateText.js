const createTemplateText = (line, replaceThese) => {
  if (line.includes('`')) {
    line = line.split('`').join('\\`');
  };

  if (line.includes('$')) {
    line = line.split('$').join('\\$');
  };

  let newLine = `    \`${line}\\n\` +\n`;

  for (let object of replaceThese) {
    const wordToReplace = Object.keys(object)[0];

    if (line.includes(wordToReplace)) {
      newLine = newLine.split(wordToReplace).join(`\${${object[wordToReplace]}}`);
    };
  };

  return newLine;
}

export default createTemplateText;