// 类的构造函数 constructor

class Person12 {
  // public name: string
  // constructor(name: string) {
  //   this.name = name
  // }
  // 简写
  constructor(public name: string) {}
}

class Teacher12 extends Person12 {
  constructor(public age: number) {
    super('liujianli')  // 不管父类有无 constructor，super() 一定要写
  }
}

const person12 = new Person12('liujianli')
console.log(person12.name)

const teacher12 = new Teacher12(23)
console.log(teacher12.name)
console.log(teacher12.age)


// 父类子类的构造函数