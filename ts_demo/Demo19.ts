// 枚举类型

// 小白写法：
// function getServe(status: number) {
//   switch(status) {
//     case 0: {
//       return "massage"
//     }
//     case 1: {
//       return 'SPA'
//     }
//     case 2: {
//       return 'dabaojian'
//     }
//   }
// }

// const result = getServe(0)
// console.log(result)

// 中级写法：
// const serve = {
//   MASSAGE: 0,
//   SPA: 1,
//   DABAOJIAN: 2
// }

// function getServe(status: number) {
//   switch(status) {
//     case serve.MASSAGE: {
//       return "massage"
//     }
//     case serve.SPA: {
//       return 'SPA'
//     }
//     case serve.DABAOJIAN: {
//       return 'dabaojian'
//     }
//   }
// }

// const result = getServe(serve.MASSAGE)
// console.log(result)


// 高级写法 enum
enum Status {
  MASSAGE,
  SPA,
  DABAOJIAN
}

function getServe(status: number) {
  switch(status) {
    case Status.MASSAGE: {
      return "massage"
    }
    case Status.SPA: {
      return 'SPA'
    }
    case Status.DABAOJIAN: {
      return 'dabaojian'
    }
  }
}

console.log(getServe(Status.MASSAGE))
console.log(getServe(0))
console.log(Status.MASSAGE, Status[1])