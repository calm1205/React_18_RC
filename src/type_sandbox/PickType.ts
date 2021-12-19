export type User = {
  id: number;
  attribute: {
    firstName: string;
    lastName: string;
    age: number;
    isForeign: boolean;
  };
  friends: Array<{
    firstName: string;
    lastName: string;
    becomeFriendDay: Date;
  }>;
};

// Userのidの型が欲しいとき(LookUp型と呼ばれている)
type ID = User['id']; // number

// Userのattributeの中のageの型が欲しいとき
type Age = User['attribute']['age']; // number

// friendsの配列の中身の型が欲しいとき
type Friend = User['friends'][number];
const friend: Friend = {
  firstName: 'Michael',
  lastName: 'Jackson',
  becomeFriendDay: new Date(),
};

// 汎用的に配列の型を削除 T[] -> T
type UnpackArray<T> = T extends (infer U)[] ? U : boolean;
type UnpackFriends = UnpackArray<User['friends']>;
// type bool = UnpackArray<string>; // boolean

const firend2: UnpackFriends = {
  firstName: 'Michael',
  lastName: 'Jordan',
  becomeFriendDay: new Date(),
};

// 関数の型の返り値を返すGenerics
type GetReturnValue<T> = T extends (...arg: any[]) => infer R ? R : T;

type FunctionType = (arg: string) => string;
type FunctionTypeReturn = GetReturnValue<FunctionType>;

const returnValue: FunctionTypeReturn = 'return';
console.log(typeof returnValue); // -> string
