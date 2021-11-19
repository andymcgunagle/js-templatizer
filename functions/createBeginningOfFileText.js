const createBeginningOfFileText = (parameters) => {
  return (
    `import fs from 'fs/promises';\n\n` +
    `export const generateNewFileText = (${parameters}) => {\n` +
    '  return (\n'
  );
};

export default createBeginningOfFileText;