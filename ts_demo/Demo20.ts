// 泛型——函数中的泛型 <>

// function join(first: string | number, second: string | number) {
//   return `${first}${second}`
// }
// join('hello', 1)

// 如果需要，前面如果是 string 后面也是 string
// 这里就要使用 泛型
function join<T>(first: T, second: T) {
  return `${first}${second}`
}
join<string>('hello', 'world')

// 多个泛型的定义
function join2<T, P>(first: T, second: P) {
  return `${first}${second}`
}
join2<string, number>('hello', 2)
join2('hello', 2)  // 支持类型推断

// 泛型中数据的使用
// 1
// function myFun<T>(params: T[]) {
//   return params
// }
// 2
function myFun<T>(params: Array<T>) {
  return params
}
myFun<string>(['hello', 'world'])