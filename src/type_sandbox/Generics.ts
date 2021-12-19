// ===== Generics =====
export function copy<T>(word: T): T {
  return word;
}

const copyNumber = copy(9);
console.log(typeof copyNumber); // -> number

const copyString = copy('hello world');
console.log(typeof copyString); // -> string

const copyBoolean = copy(false);
console.log(typeof copyBoolean); // -> boolean

// ===== Extends =====
// extendsをつけることでGenericsに制約をつけることが可能
function copyWord<T extends string>(word: T) {
  return word;
}

const copiedWord = copyWord('hello world');
console.log(typeof copiedWord); // -> string

// 型 'boolean' の引数を型 'string' のパラメーターに割り当てることはできません。
// const copiedBool = copyWord(false); // error
// T extends string により stringしか扱えない。

// ===== Extends2 (Object) =====
// extendsにオブジェクトを指定することで補完可能

// プロパティ 'name' は型 'T' に存在しません
// function objectCopy<T>(obj: T) {
//   return obj.name; // error
// }

function objectCopy<T extends { name: string }>(obj: T) {
  return obj.name;
}
const lastName = objectCopy({ name: '山田' });
console.log(lastName); // -> 山田

// ===== Extends3 (keyof) =====
type Dareka = {
  name: string;
  age: number;
  isForeign: boolean;
};

// T には name,age,isForeignのどれかしか入らない
function returnKey<T extends keyof Dareka>(key: T) {
  return key;
}
console.log(returnKey('age')); // -> age

// よく使われるextends
function returnValueOfKey<T extends Dareka, U extends keyof Dareka>(
  obj: T,
  key: U
) {
  return obj[key];
}
const user: Dareka = {
  name: '山田',
  age: 23,
  isForeign: false,
};

const age = returnValueOfKey(user, 'age');
console.log(age); // -> 23
