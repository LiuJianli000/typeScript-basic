// Gril 接口
interface Grils9 {
  name: string
  age: number
  bust: number
  waistline?: number
  [propname: string]: any
  say():string
}

// 类实现接口，类的约束，下面少一个属性都会报错
class XiaoJieJie9 implements Grils9 {
  name = 'dai'
  age = 23
  bust = 90
  say() {
    return 'hello'
  }
}

// Teacher 接口 继承 Gril
interface Teacher extends Grils9 {
  teach(): string
}


const gril9 = {
  name: 'dai',
  age: 23,
  bust: 90,
  waistline: 86,
  sex: '女',
  say() {
    return '欢迎光临'
  },
  teach() {
    return '我是教师'
  }
}

const screenResume9 = (gril: Grils9) => {
  gril.age < 24 && gril.bust >=90 && console.log(gril.name + '进入面试')
  gril.age >= 24 || gril.bust <90 && console.log(gril.name + '已被淘汰')
}

const getResume9 = (gril: Teacher) => {
  console.log(gril.name + '年龄是' + gril.age)
  console.log(gril.name + '胸围是' + gril.bust)
  gril.waistline && console.log(gril.name + '腰围是' + gril.waistline)
  gril.sex && console.log(gril.name + '性别是' + gril.sex)
  console.log(gril.say())
  console.log(gril.teach())
}

screenResume9(gril9)
getResume9(gril9)

// 接口 interface 1
// 类实现接口
// 接口继承接口