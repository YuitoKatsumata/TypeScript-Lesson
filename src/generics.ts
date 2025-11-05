function copy<T extends {name: string}>(value: T): T {
  // let user: T
  return value;
}

console.log(copy({name: 'hoge'}));

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  } 
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  get() {
    return this.data;
  }
}

const stringLightDatabase = new LightDatabase();
stringLightDatabase.add('hoge');