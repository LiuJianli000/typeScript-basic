// get  set
class XiaoJieJie13 {
  constructor(private _age: number) {}

  get age() {
    return this._age -10
  }
  set age(age: number) {
    this._age = age + 3
  }
}

const chen = new XiaoJieJie13(28)
chen.age = 25
console.log(chen.age)


class Girl13 {
  static sayLove() {
    return 'I love u!'
  }
}
const girl = new Girl13()

console.log(Girl13.sayLove())
// static 静态类的作用是，可以不用再实例一个类，直接就可以调用里面的方法