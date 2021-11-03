import getParameters from '../templatizerFunctions/getParameters.js';

const params1 = { world: 'earth' };
const expected1 = ['earth', "'earth'"]

test('convert object to array of strings', () => {
  expect(getParameters(params1)).toEqual(expect.arrayContaining(expected1));
});

const params2 = { world: 'earth', dog: 'cat' };
const expected2 = ['earth, cat', "'earth', 'cat'"]

test('convert object to array of strings', () => {
  expect(getParameters(params2)).toEqual(expect.arrayContaining(expected2));
});