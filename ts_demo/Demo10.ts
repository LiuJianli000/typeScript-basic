// 类
class Lady10 {
  content = 'Hi, nihao!'
  sayHi() {
    return this.content
  }
}

class XiaoJieJie10 extends Lady10 {
  // 重写父类的方法
  sayHi() {
    // return 'Hi, honey!'
    return super.sayHi() + '——你好！'  // 继承父类的方法
  }
  
  sayLove() {
    return 'I love u'
  }
}

// const goddess = new Lady10()
const goddess = new XiaoJieJie10()
console.log(goddess.sayHi())
console.log(goddess.sayLove())


// 类的定义
// 类的继承
// 重写
// super 关键字