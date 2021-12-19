export {};

type input1 = string;
type input2 = number;

type output1 = string;
type output2 = number;

// type FuncUnion = (i: string | number) => string | number;
type FuncType1 = (i: string) => string;
type FuncType2 = (i: number) => number;

type FuncType = FuncType1 & FuncType2;
const unionFunction: FuncType = (i) => {
  return i;
};
const i1 = unionFunction('hello world');
const i2 = unionFunction(999);

interface Func {
  (input: input1): output1;
}
// eslint-disable-next-line no-redeclare
interface Func {
  (input: input2): output2;
}

const extendFunction: Func = (input) => {
  return input;
};

const return1 = extendFunction('hello world');
const return2 = extendFunction(3);

declare namespace _ {
  interface func1 {
    (input: string): string;
  }
  interface func2 {
    (input: number): number;
  }
}

const nameFunction: _.func1 & _.func2 = (input) => {
  return input;
};
