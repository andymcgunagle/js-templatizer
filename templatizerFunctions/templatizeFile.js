import readline from 'readline';
import fs from 'fs';
import createEndOfFileText from './createEndOfFileText.js';
import getParameters from './getParameters.js';
import createBeginningOfFileText from './createBeginningOfFileText.js';
import createTemplateText from './createTemplateText.js';

const templatize = (fileToTemplatize, replaceThese) => {

  const rl = readline.createInterface({
    // TODO: This needs to map to the file to templatize regardless or which directory the module is in
    input: fs.createReadStream(fileToTemplatize),
  });

  const nameOfNewFile = `newFile.js`;

  // TODO: This needs to map to the home directory regardless or which directory the module is in
  const writeStream = fs.createWriteStream(nameOfNewFile, { encoding: "utf8" });

  const allParameters = getParameters(replaceThese);
  const parameters = allParameters[0];
  const parametersWithQuotes = allParameters[1];

  const beginningOfFileText = createBeginningOfFileText(parameters);

  // Write the beginning of the new file
  writeStream.write(beginningOfFileText);

  const linesArray = [];

  // Create the template for the middle of the new file
  rl.on('line', (line) => {
    const newLine = createTemplateText(line, replaceThese);
    linesArray.push(newLine);
  });

  rl.on('close', () => {
    const numberOfLinesInTemplate = linesArray.length;

    // Remove the extra '+' from the final line of the template and write the template to the new file
    linesArray.forEach((line, index) => {
      if (index === numberOfLinesInTemplate - 1) {
        const finalLine = `${line.trimEnd().slice(0, -1)}\n`;
        writeStream.write(finalLine);
      } else {
        writeStream.write(line);
      };
    });

    // Write the rest of the new file
    const endOfFileText = createEndOfFileText(parameters, parametersWithQuotes);
    writeStream.write(endOfFileText);
  });
};

export default templatize;