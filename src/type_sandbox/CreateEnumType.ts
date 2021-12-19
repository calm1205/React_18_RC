// ======== Enum ==========
export enum SIZE {
  S = 'SMALL',
  M = 'MEDIUM',
  L = 'LARGE',
}

/* transpiled code
  var SIZE;
  (function (SIZE) {
      SIZE["S"] = "SMALL";
      SIZE["M"] = "MEDIUM";
      SIZE["L"] = "LARGE";
  })(SIZE = exports.SIZE || (exports.SIZE = {}));
  */

export const T_shirt = {
  color: 'red',
  size: SIZE.M,
};
T_shirt.size = SIZE.L; // ok
// T_shirt.size = 'SMALL'; // error

//  ======== object as Enum =========
const Size = {
  S: 'SMALL',
  M: 'MEDIUM',
  L: 'LARGE',
} as const;

/* transpiled code
  "use strict";
  const Size = {
    S: "SMALL";
    M: "MEDIUM";
    L: "LARGE";
  }
 */

export const T_shirt2 = {
  color: 'blue',
  size: Size.L,
};
// T_shirt2.size = 'SMALL'; // error
// T_shirt2.size = Size.M; // error

type Tshirt = {
  color: string;
  size: typeof Size[keyof typeof Size];
};
const T_shirt3: Tshirt = {
  color: 'black',
  size: Size.M,
};
// Enumをobjectで代用した場合はユニオン型を付けないと再代入不可
T_shirt3.size = Size.L; // ok
T_shirt3.size = 'LARGE'; // ok

// ======== Enum usage =========

enum T_SIZE {
  SMALL,
  MEDIUM,
  LARGE,
  XLARGE,
}
// key,valueを明示的に指定しないと数値になる。
// T_SIZE.SMALL = 0;
// T_SIZE.MEDIUM = 1;
// T_SIZE.LARGE = 2;
// T_SIZE.XLARGE = 3;

type UnionT = keyof typeof T_SIZE;
const fitting = (your_size: UnionT): void => {
  if (T_SIZE[your_size] > T_SIZE.MEDIUM) {
    console.log("we don't have your size.");
  }
};

fitting('XLARGE');
