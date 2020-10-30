const count2: number = 1

// count. 后面会提示 number 类型的一些属性

// 自定义类型
interface XiaoJieJie {
  uname: string,
  age: number
}

const xiaohong: XiaoJieJie = {
  uname: '小红',
  age: 18
}

console.log(xiaohong.age)