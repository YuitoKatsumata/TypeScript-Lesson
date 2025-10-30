// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Nameable {
  name: string;
  nickName?: string;
}

const nameable: Nameable = {
  name: 'hoge',
  nickName: 'hoho'
}
// オブジェクトの構造を作成
// オブジェクトのみ
interface Human extends Nameable{
  age: number;
  greeting?(messag: string):void;
}

// const human: Human = {
//   name: 'hoge',
//   age: 38,
//   greeting(message: string) {
//     console.log(message);
//   }
// }

// let developer: Human;

// let tmpFunc(message: string):void;

class Developer implements Human {
  constructor(public name: string, public age: number) {}
  greeting(message: string) {
    console.log('Hello !');
  }
}

const user: Human = new Developer('hoge', 20);

