// 泛型——类中的泛型

// class SelectGirl {
//   constructor(private girls: string[]) {}
//   getGirl(index: number): string {
//     return this.girls[index]
//   }
// }

// const selectGirl = new SelectGirl(['chen', 'dai', 'xie'])

// console.log(selectGirl.getGirl(1))

// 改造 可以传入名字 也可以传入编号
// class SelectGirl {
//   constructor(private girls: string[] | number[]) {}
//   getGirl(index: number): string | number {
//     return this.girls[index]
//   }
// }

// const selectGirl = new SelectGirl(['chen', 'dai', 'xie'])

// console.log(selectGirl.getGirl(1))

// 重构为 使用泛型
// 1
// class SelectGirl<T> {
//   constructor(private girls: T[]) {}
//   getGirl(index: number): T {
//     return this.girls[index]
//   }
// }

// const selectGirl = new SelectGirl<string>(['chen', 'dai', 'xie'])

// console.log(selectGirl.getGirl(1))

// 2
class SelectGirl<T extends number | string> {
  constructor(private girls: T[]) {}
  getGirl(index: number): T {
    return this.girls[index]
  }
}

const selectGirl = new SelectGirl<string>(['chen', 'dai', 'xie'])

console.log(selectGirl.getGirl(1))

// 添加需求：必须有个 name 属性
// interface Girl21 {
//   name: string
// }
// class SelectGirl<T extends Girl21> {
//   constructor(private girls: T[]) {}
//   getGirl(index: number): string {
//     return this.girls[index].name
//   }
// }

// const selectGirl = new SelectGirl([
//   { name: 'dai' },
//   { name: 'chen' },
//   { name: 'xie' }
// ])

// console.log(selectGirl.getGirl(1))