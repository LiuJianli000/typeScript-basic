function getTotal(one: number, two: number): number {
  return one + two
}

const total5 = getTotal(1, 2)

function sayHello(): void {
  console.log('hello world')

  // return 0
}

function errFunc(): never {
  throw new Error()  // 下面代码永远无法被执行到
  console.log('hello world')
}
function forNever(): never {
  while(true) {}
  console.log('hello world')
}

function add({one, two}: { one: number, two: number }):number {
  return one + two
}

const total55 = add({ one: 1, two: 2 })

// 函数的输出类型