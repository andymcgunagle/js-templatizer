import createBeginningOfFileText from "../functions/createBeginningOfFileText.js";

const result1 = `import fs from 'fs/promises';

export const createString = (dog, cat) => {
  return (
`;

test('creates string for beginning of file, with optional parameters', () => {
  expect(createBeginningOfFileText(['dog, cat'])).toEqual(result1);
});

const result2 = `import fs from 'fs/promises';

export const createString = () => {
  return (
`;

test('creates string for beginning of file, with optional parameters', () => {
  expect(createBeginningOfFileText([])).toEqual(result2);
});