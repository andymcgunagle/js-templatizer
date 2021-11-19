import readline from 'readline';
import fs from 'fs';
import createEndOfFileText from './createEndOfFileText.js';
import getParameters from './getParameters.js';
import createBeginningOfFileText from './createBeginningOfFileText.js';
import createTemplateText from './createTemplateText.js';
import formatNewFileName from './formatNewFileName.js';

/**
 * Turn any file into a new file with a template and a function that will write new files from that template. 
 * 
 * You can also turn any strings in the file you're templatizing into variables, which will also become arguments in the function that's generated.
 * 
 * @param {string} fileToTemplatize - The file to templatize. If this file is in the same directory as the file that's calling the templatize method, then you can just write the file name (including the file extension). If they're in different directories, you'll need to write a relative path to the file to templatize.
 * 
 * @param {{}} [stringsToReplace] - Optional parameter. This object's keys will be the strings in the file you're templatizing that you'd like to turn into variables. The corresponding values will become the names of the variables in the new template you'll generate.
 * 
 * @param {string} [nameOfNewFile] - Optional parameter that allows you to name the new file the templatize method will generate.
 * 
 * @example
 * jsTemplatizer.templatize(
 *   'userModel.js',
 *   { user: 'param' },
 *   'modelGenerator'
 * ); 
 */
const templatize = (
  fileToTemplatize,
  stringsToReplace,
  nameOfNewFile = 'newTemplateGenerator.js'
) => {

  // Create read stream for the file to templatize. The file to templatize must be in the same dir as the file that's calling the templatize method, otherwise a relative path will need to be written.
  const rl = readline.createInterface({
    input: fs.createReadStream(fileToTemplatize),
  });

  // Format the name of the new file and create a write stream to it
  nameOfNewFile = formatNewFileName(nameOfNewFile);
  const writeStream = fs.createWriteStream(nameOfNewFile, { encoding: "utf8" });

  // Generate parameters from the stringsToReplace array for the new templatizer function, which will be written to the new file 
  const allParameters = getParameters(stringsToReplace);
  const parameters = allParameters[0];
  const parametersWithQuotes = allParameters[1];

  // Generate the text for the beginning of the new file and write it to the new file
  const beginningOfFileText = createBeginningOfFileText(parameters);
  writeStream.write(beginningOfFileText);

  // Initialize an array that will soon include each line of the file to templatize
  const linesArray = [];

  // Create the template for the middle of the new file by reformatting each line then pushing it to the linesArray
  rl.on('line', (line) => {
    const newLine = createTemplateText(line, stringsToReplace);
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

    // Create the text for the rest of the new file (the templatizer function with the parameters generated earlier) and write it to the new file 
    const endOfFileText = createEndOfFileText(parameters, parametersWithQuotes);
    writeStream.write(endOfFileText);
  });
};

export default templatize;