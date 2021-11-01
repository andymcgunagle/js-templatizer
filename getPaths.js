import { fileURLToPath } from 'url';

const pathToFile = fileURLToPath(import.meta.url);

const getDirPath = (filePath) => {
  const pathSegments = filePath.split('/');
  const lengthOfPath = pathSegments.length;

  const dirSegments = pathSegments.map((segment, index) => {
    if (index !== lengthOfPath - 1) {
      return segment;
    };
  });

  const dirPath = dirSegments.join('/');

  return dirPath;
};