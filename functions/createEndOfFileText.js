const createEndOfFileText = (parameters, parametersWithQuotes) => {
  return (
    `  );\n` +
    `};\n\n` +
    `export const generateNewFile = async (${parameters}, newFileExtension = 'js') => {\n` +
    `\n` +
    `  const fileText = generateNewFileText(${parameters});\n` +
    `\n` +
    `  try {\n` +
    `    const promise = await fs.writeFile(\`newFile.\${newFileExtension}\`, fileText);\n` +
    `    return promise;\n` +
    `  } catch (error) {\n` +
    `    console.error(error);\n` +
    `  };\n` +
    `};\n` +
    `\n` +
    `// generateNewFile(${parametersWithQuotes});\n`
  );
};

export default createEndOfFileText;