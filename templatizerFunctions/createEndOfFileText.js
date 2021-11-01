const createEndOfFileText = (parameters, parametersWithQuotes) => {
  return (
    `  );\n` +
    `};\n\n` +
    `export const writeToNewFile = async (${parameters}) => {\n` +
    `\n` +
    `  const fileText = createString(${parameters});\n` +
    `\n` +
    `  try {\n` +
    `    const promise = await fs.writeFile('newFile.js', fileText);\n` +
    `\n` +
    `    return promise;\n` +
    `  } catch (error) {\n` +
    `    console.error(error);\n` +
    `  };\n` +
    `};\n` +
    `\n` +
    `// writeToNewFile(${parametersWithQuotes});\n`
  );
};

export default createEndOfFileText;