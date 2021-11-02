import fs from 'fs/promises';

export const createString = (param1) => {
  return `import mongoose from 'mongoose';\n` + `\n` + `const UserSchema = new mongoose.Schema({\n` + `  email: {\n` + `    type: String,\n` + `    required: true,\n` + `  },\n` + `  password: {\n` + `    type: String,\n` + `    required: true,\n` + `  },\n` + `  name: {\n` + `    type: String,\n` + `  },\n` + `  age: {\n` + `    type: Number,\n` + `  },\n` + `});\n` + `\n` + `const User = mongoose.model('${param1}', UserSchema);\n` + `export default User;\n`;
};

export const writeToNewFile = async (param1) => {

  const fileText = createString(param1);

  try {
    const promise = await fs.writeFile('newFile.js', fileText);

    return promise;
  } catch (error) {
    console.error(error);
  };
};

writeToNewFile('dog');
