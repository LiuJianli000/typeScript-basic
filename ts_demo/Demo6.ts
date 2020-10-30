const numberArr: number[] = [1, 2, 3]

const strArr: string[] = ['a', 'b']

const undefinedArr: undefined[] = [undefined]

const arr: (number | string)[] = [1, 'a']

// type alias 类型别名
type Lady = {
  name: string,
  age: number
}
class Medan {
  name: string
  age: number
}

const xiaoJieJies6: {name: string, age: number}[] = [
  {
    name: 'dai',
    age: 18
  },
  {
    name: 'chen',
    age: 20
  }
]
const xiaoJieJies66: Lady[] = [
  {
    name: 'dai',
    age: 18
  },
  {
    name: 'chen',
    age: 20
  }
]
const xiaoJieJies666: Medan[] = [
  {
    name: 'dai',
    age: 18
  },
  {
    name: 'chen',
    age: 20
  }
]