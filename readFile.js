// import { EOL } from 'os';
import readline from 'readline';
import fs from 'fs';

const templatize = (fileToTemplatize, replaceThese) => {
  const rl = readline.createInterface({
    input: fs.createReadStream(fileToTemplatize),
  });

  const fileName = fileToTemplatize.split('.')[0];

  const writeStream = fs.createWriteStream(`${fileName}Generator.js`, { encoding: "utf8" });

  writeStream.write('HELLO!\n');

  rl.on('line', (line) => {
    // let newLine = `\`${line}\` +${EOL}`;
    let newLine = `\`${line}\` +\n`;

    for (let object of replaceThese) {
      const wordToReplace = Object.keys(object)[0];

      if (line.includes(wordToReplace)) {
        newLine = newLine.replace(wordToReplace, `\${${object[wordToReplace]}}`);
      };
    };

    if (line !== '') {
      writeStream.write(newLine);
    };
  });

  rl.on('close', () => {
    writeStream.write('GOODBYE!');
  });
};

templatize('userModel.js', [{ 'user': 'chicken' }, { 'User': 'Chicken' }]);