// readonly
class Person14 {
  public readonly _name: string
  constructor(name: string){
    this._name = name
  }
}

const person14 = new Person14('liu')

// person14._name = 'lalala' // 此时不可修改

// console.log(person14._name)

// ------------------------------------------
abstract class Girl14 {
  abstract skill()
}

class Waiter extends Girl14 {
  skill() {
    console.log('来杯谁')
  }
}

class BaseTeacher extends Girl14 {
  skill() {
    console.log('来个按摩')
  }
}

// 抽象类
