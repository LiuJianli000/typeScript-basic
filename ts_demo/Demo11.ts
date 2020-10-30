// private protected public

class Person11 {
  // 类的内部
  public name: string

  public sayHi() {
    console.log(this.name + '：say hello')
  }
}

class Teacher11 extends Person11 {
  public sayBye() {
    console.log(this.name + '：say bye')
  }
}

const person11 = new Person11()
person11.name = 'liu'
person11.sayHi()
console.log(person11.name)

const person111 = new Teacher11()
person111.sayBye()