// 型注釈
let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
// numberは少数、マイナスも一緒に使える

let single: string = "hello";
let double: string = "hello";
let back: string = `hello`;
// stringはバックスクオーテーションでも使用可能

// 型推論は明示的に型注釈をしなくても良い
// 基本的には型推論
// let hasValue = true;
// let count = 10;
// let float = 3.14;
// let negative = -0.12;
// let single = 'hello';
// let double = "hello";
// let back = `hello`;

// オブジェクトの型
// オブジェクトの中身が型になる
// objectという型もあるが普段は使わない。
// javascript内蔵のcreate()のようなものを使うときに使用する
const person = {
  name: "Jack",
  age: 21,
};

// 配列の型について
// anyを指定すればどんな型も一緒に含められる
// または推論を利用する
const fruite: string[] = ["Apple", "Banana", "Grape"];

// タプル型
const book: [string, number, boolean] = ["business", 1500, false];
// pushで入れることは可能
book.push(21);

// Enumについて
// 列挙型の定義
enum CoffeSize {
  SHORT = "short",
  TALL = "tall",
  GRANDE = "grande",
  VENTI = "VENTI",
}
// short等を省略してもよい

const coffee = {
  hot: true,
  size: CoffeSize.TALL,
};

// any型
// 基本何でも入るよ
let anything: any = true;
// anything = 'helo';
// anything = ['hello', 33, true];
// anything();
// let banana = 'banana';
// banana = anything;

// union型
// 前後の環境を調べる
let unionType: number | string = 10;

// リテラル型　特定の値のみ扱う
const apple = "apple";

const clothSize: "small" | "medium" | "large" = "large";
const cloth: {
  color: string;
  size: "small" | "medium" | "large";
} = {
  color: "white",
  size: "medium",
};

// タイプエイリアス
// 型の変数を作ることができる
// type ClothSize = 'small' | 'medium' | 'large';
// let clothSize: ClothSize = 'large';
// const cloth: {
//   color: string;
//   size: 'small' | 'medium' | 'large'
// } = {
//   color: 'white',
//   size: 'medium'
// }

// 関数に型をつける方法
// パラメータには型推論が適用されないので記載は必須
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(1, 2);

// function add(num1: number, num2: number)　{
//   return num1 + num2;
// }
// add(1,2);

// void型
function sayHello() {
  console.log("Hello");
}
// undefined型
// 基本的に使うことはない
let tmp: undefined;

// 型注釈
const anotherAdd: (n1: number, n2: number) => number = add;

// callback関数
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNumber = cb(num * 2);
  console.log(num * 2);
}

// unknown型
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
// 使うときに注意
text = anyInput;
if (typeof unknownInput === "string") {
  text = unknownInput;
}

// サティスファイズ演算子
// 左の値が右の型に入るかどうかをチェックするだけ
const age = 28 satisfies number;

// never型
function error(message: string): never {
  throw new Error(message);
}
console.log(error("This is an error"));
