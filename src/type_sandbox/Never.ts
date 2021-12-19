export const echo = (word: string): void => {
  console.log(word);
};

console.log(echo('hello world'));
// => undefinedが返る。

// undefinedすらも返さないのがnever
const error = (message: string): never => {
  throw error(message);
};
error('This is an error.');
