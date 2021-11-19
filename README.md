# JS Templatizer by amcgunagle

Transform any file into new file with a template of the original file.

The new file will also include a function that enables you to generate additional new files from the template.

You can also turn any strings in the original file you're templatizing into variables, which will also become arguments in the function that's generated.

## Installation

`npm i js-templatizer --save-dev`

## templatize method

### templatize method example

Let's say we have a file called **userModel.js** we'd like to templatize so we can quickly reuse the code we've already written.

In the same directory as **userModel.js**, we have the following in **templatizer.js**:

```javascript
import jsTemplatizer from 'js-templatizer';

jsTemplatizer.templatize('userModel.js', { user: 'param1' }, 'modelGenerator');
```

Note that the first argument to the `templatize` method, the file to templatize, would need to be a relative path to **userModel.js** if **templatizer.js** and **userModel.js** were not in the same directory.

For example, if **userModel.js** was one directory level up, the first argument to the function call in the example above would be `'../userModel.js'`.

Running `node templatizer.js` would create a new file called **modelGenerator.js** containing the following:

```javascript
import fs from 'fs/promises';

export const generateNewFileText = (param1) => {
  return `import mongoose from 'mongoose';\n` + `\n` + `const UserSchema = new mongoose.Schema({\n` + `  email: {\n` + `    type: String,\n` + `    required: true,\n` + `  },\n` + `  password: {\n` + `    type: String,\n` + `    required: true,\n` + `  },\n` + `  name: {\n` + `    type: String,\n` + `  },\n` + `  age: {\n` + `    type: Number,\n` + `  },\n` + `});\n` + `\n` + `const User = mongoose.model('${param1}', UserSchema);\n` + `export default User;\n`;
};

export const generateNewFile = async (param1) => {
  const fileText = generateNewFileText(param1);

  try {
    const promise = await fs.writeFile('newFile.js', fileText);
    return promise;
  } catch (error) {
    console.error(error);
  }
};

// generateNewFile('param1');
```

At the bottom of the new file you'll notice the `generateNewFile` function call that is commented out. Uncomment it and pass in any parameters you'd like to include. Then, in this example, you'd call `node modelGenerator.js` to generate a new file from your template.

### templatize method parameters

1. #### fileToTemplatize

The file to templatize. If this file is in the same directory as the file that's calling the templatize method, then you can just write the file name (including the file extension). If they're in different directories, you'll need to write a relative path to the file to templatize.

2. #### stringsToReplace (optional)

This object's keys will be the strings in the file you're templatizing that you'd like to turn into variables. The corresponding values will become the names of the variables in the new template you'll generate.

3. #### nameOfNewFile (optional)

Allows you to name the new file the templatize method will generate.

## ES modules

If you get an error using the import-export syntax for ES modules in the examples above, add the following to your package.json file:

```json
{
  "type": "module"
}
```
