type Engineer = {
  name: string;
  role: string;
}

type Blogger = {
  name: string;
  follower: number;
}
// interfaceでも可

// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}
const hoge: EngineerBlogger = {
  name: 'hoge',
  role: 'front',
  follower: 1000
}

type tmp = string & number;

type NumberBoolean = number | boolean;
type StrignNumer = string | number;
type Mix = NumberBoolean & StrignNumer;

function toUpperCase(x:string): string;
function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return '';
}

const upperHello = toUpperCase('hello');

type NomadWorker = Engineer | Blogger;
function describeProfile(NomadWorker: NomadWorker) {
  console.log(NomadWorker.name);
  if ('role' in NomadWorker) {
    console.log(NomadWorker.role);
  }
  if ('follower' in NomadWorker) {
    console.log(NomadWorker.follower);
  }
}

class Dog {
  kind: 'dog' = 'dog';
  speak() {
    console.log('bow-wow');
  }
}

class Bird {
  kind: 'bird' = 'bird';
  speak() {
    console.log('tweet-tweet');
  }
  fly() {
    console.log('flutter');
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  switch (pet.kind) {
    case 'bird':
      pet.fly();
  }
  if(pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Dog());
havePet(new Bird());

const input = document.getElementById('input') as HTMLInputElement;
// const input = <HTMLInputElement>document.getElementById('input');
input.value = 'initial input value';
// (<HTMLInputElement>document.getElementById('input')).value = 'nitial input value';

interface Designer {
  name: string;
  [index: string]: string;
}

const designer: Designer = {
  name: 'hoge',
}

interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;      
    }
  }
} 

const downloadedData: DownloadedData = {
  id: 1
}

console.log(downloadedData.user?.name?.first);

// 右がundifind or nullであれば左を返す
const userData = downloadedData.user ?? 'no-user';
// const userData = downloadedData.user || 'no-user';

type id = DownloadedData['id'];

let target = 'hello';
let source: 'hello' = 'hello';
target = source;

enum Color {
  RED,
  BLUE
}