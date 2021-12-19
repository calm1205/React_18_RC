// ===== Any Type =====
// どんな型でも再定義可能。どんな型にでも再代入可能

export let anything: any;
anything = 'hello world';
anything = 999;
anything = true;

const word: string = anything;
console.log(word);
// => true

// ===== Unknown Type =====
// どんな型でも再定義可能。Type Guardしないと再代入は不可

let unknown: unknown;
unknown = 0;
unknown = false;
unknown = 'hello world';

// const word: string = unknown; // error: 型 'unknown' を型 'string' に割り当てることはできません。
if (typeof unknown === 'string') {
  const word: string = unknown;
  console.log(word);
  // => hello world
}
