// type annotation 类型注解
// type inference 类型推断

// 类型注解
let count4 : number;
count4 = 123

// ts 自动推断 countInference 为 number
let countInference = 123


function getTotal4(one: number, two: number): number {
  return one + two
}

const total = getTotal4(1, 2)


const XiaoJieJie = {
  name: 'liuying',
  age: 18
}

// 鼠标浮动 变量名 看类型提示