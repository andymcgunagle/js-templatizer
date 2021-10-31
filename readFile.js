// import { EOL } from 'os';
import readline from 'readline';
import fs from 'fs';

const templatize = (fileToTemplatize, replaceThisString, withThisString) => {
  const rl = readline.createInterface({
    input: fs.createReadStream(fileToTemplatize),
  });

  const writeStream = fs.createWriteStream(`${withThisString}.js`, { encoding: "utf8" })

  rl.on('line', (line) => {
    // let newLine = `\`${line}\` +${EOL}`;
    let newLine = `\`${line}\` +\n`;

    if (line.includes(replaceThisString)) {
      newLine = newLine.replace(replaceThisString, `\${${withThisString}}`);
    };

    if (line !== '') {
      writeStream.write(newLine);
    };

  });
}

templatize('userModel.js', 'user', 'chicken');