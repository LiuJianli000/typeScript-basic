// 接口
interface Grils {
  name: string
  age: number
  bust: number
  waistline?: number
}
// type 别名
// type Grils = {
//   name: string,
//   age: number,
//   bust: number
// }

const gril = {
  name: 'dai',
  age: 23,
  bust: 90,
  waistline: 86
}

const screenResume = (gril: Grils) => {
  gril.age < 24 && gril.bust >=90 && console.log(gril.name + '进入面试')
  gril.age >= 24 || gril.bust <90 && console.log(gril.name + '已被淘汰')
}

const getResume = (gril: Grils) => {
  console.log(gril.name + '年龄是' + gril.age)
  console.log(gril.name + '胸围是' + gril.bust)
  gril.waistline && console.log(gril.name + '腰围是' + gril.waistline)
}

screenResume(gril)
getResume(gril)

// 接口 interface 1