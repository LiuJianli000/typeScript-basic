// 基础静态类型 -----------------------------------------------------
const count: number = 918
// string, null, undefined, boolean, void, symbol

// 对象静态类型 -----------------------------------------------------
// Object
const xiaoJieJie: {
  name: string,
  age: number
} = {
  name: '大脚',
  age: 18
}

// array
const xiaoJieJies: string[] = ['谢大脚', '刘英']

// class
class Person {}
const dajiao: Person = new Person()

// function
const jianXiaoJieJie: ()=>string = () => { return '大脚'}
const jianXiaoJieJie1 = ():string => { return '大脚'}

