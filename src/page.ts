// 命名空间——减少全局变量的污染
// namespace Home {
//   export class Page {
//     constructor() {
//       new Components.Header()
//       new Components.Content()
//       new Components.Footer()
//     }
//   }
// }


// 上面使用的是 命名空间，这里使用 import
import { Header, Content, Footer } from './components'

export default class Page {
  constructor() {
    new Header()
    new Content()
    new Footer()
  }
}