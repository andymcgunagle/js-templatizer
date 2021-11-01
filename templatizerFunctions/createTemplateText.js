const createTemplateText = (line, replaceThese) => {
  if (line.includes('`')) {
    line = line.split('`').join('\\`');
  };

  if (line.includes('$')) {
    line = line.split('$').join('\\$');
  };

  let newLine = `    \`${line}\\n\` +\n`;

  for (const replaceThisString in replaceThese) {
    const withThisString = replaceThese[replaceThisString];

    if (line.includes(replaceThisString)) {
      newLine = newLine.split(replaceThisString).join(`\${${withThisString}}`);
    };
  };

  return newLine;
}

export default createTemplateText;