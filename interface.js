"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
const nameable = {
    name: 'hoge',
    nickName: 'hoho'
};
// const human: Human = {
//   name: 'hoge',
//   age: 38,
//   greeting(message: string) {
//     console.log(message);
//   }
// }
// let developer: Human;
// let tmpFunc(message: string):void;
class Developer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting(message) {
        console.log('Hello !');
    }
}
const user = new Developer('hoge', 20);
