import formatNewFileName from "../functions/formatNewFileName.js";

test('convert fileName from file to specifically formatted string', () => {
  expect(formatNewFileName('myFile.js')).toBe('myFile.js');
});

test('convert fileName from file to specifically formatted string', () => {
  expect(formatNewFileName('myFile')).toBe('myFile.js');
});

test('convert fileName from file to specifically formatted string', () => {
  expect(formatNewFileName('newTemplateGenerator.js')).toEqual(expect.stringContaining('newTemplateGenerator'));
});