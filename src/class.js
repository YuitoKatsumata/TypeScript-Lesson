"use strict";
class Person {
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
}
Person.species = 'Homo sapiens';
// let Person2: Person;
// const hoge = new Person('hoge', 38);
// hoge.incrementAge();
// hoge.greeting();
// 継承について
class Teacher extends Person {
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}`);
    }
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject');
        }
        this._subject = value;
    }
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
        // 継承もとのメソッドを使い方法
        // super.greeting();
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old I teach ${this.subject}`);
    }
}
// const teacher = new Teacher('hoho', 38, 'math');
// console.log(teacher.subject);
// teacher.subject = 'Music';
// teacher.greeting();
console.log(Person.species);
console.log(Person.isAdult(20));
const teacher = new Teacher('hoge', 38, 'Math');
teacher.greeting();
