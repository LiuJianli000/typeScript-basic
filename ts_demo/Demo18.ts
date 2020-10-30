// 联合类型 和 类型保护

interface Waiter18 {
  anjiao: boolean;
  say: () => void;
}
interface Teacher18 {
  anjiao: boolean;
  skill: () => void;
}

const waiter18 = {
  anjiao: false,
  say: () => {
    console.log('Hi, boy!')
  }
}
const teacher18 = {
  anjiao: true,
  skill: () => {
    console.log('want SPA?')
  }
}

// 第一种保护方式：断言（as）
// function judgeWho(animal: Waiter18 | Teacher18) {
//   if (animal.anjiao) {
//     (animal as Teacher18).skill();
//   } else {
//     (animal as Waiter18).say();
//   }
// }

// 第二种保护方式：in 语法
function judgeWhoTwo(animal: Waiter18 | Teacher18) {
  if ("skill" in animal) {
    animal.skill();
  } else {
    animal.say();
  }
}
judgeWhoTwo(waiter18)

// 第三种保护方式：typeof 语法
function add18(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`
  }
  return first + second
}

// 第四种保护方式：instanceof 语法
class NumberObj {
  count: number
}
function addObj(first: Object | NumberObj, second: Object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  }
  return 0
}