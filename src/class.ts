abstract class Person {

  static species = 'Homo sapiens';
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }
  constructor(public name: string, protected age: number) {
  }

  incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    this.explainJob();
  }
    abstract explainJob(): void;
}

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
  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
    // 継承もとのメソッドを使い方法
    // super.greeting();
  }
  greeting() {
      console.log(`Hello! My name is ${this.name}. I am ${this.age} years old I teach ${this.subject}`)
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
