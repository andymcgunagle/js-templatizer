import createTemplateText from "../functions/createTemplateText.js";

const line1 = 'Hello, world!';
const result1 = '`Hello, world!\\n` +';

test('convert line from file to specifically formatted string', () => {
  expect(createTemplateText(line1).trim()).toBe(result1);
});

const result2 = '`Hello, ${friend}!\\n` +';

test('convert line from file to specifically formatted string', () => {
  expect(createTemplateText(line1, { world: 'friend' }).trim()).toBe(result2);
});