// namespace Components {
//   // 子命名空间，可以嵌套
//   export namespace SubComponents {
//     export class Test {}
//   }
  
//   export class Header {
//     constructor() {
//       const ele = document.createElement("div");
  
//       ele.innerText = "This is Header";
//       document.body.appendChild(ele);
//     }
//   }
  
//   export class Content {
//     constructor() {
//       const ele = document.createElement("div");
  
//       ele.innerText = "This is Content";
//       document.body.appendChild(ele);
//     }
//   }
  
//   export class Footer {
//     constructor() {
//       const ele = document.createElement("div");
  
//       ele.innerText = "This is Footer";
//       document.body.appendChild(ele);
//     }
//   }
// }


// 上面是使用命名空间，这里使用的是 import
export class Header {
  constructor() {
    const ele = document.createElement("div");

    ele.innerText = "This is Header";
    document.body.appendChild(ele);
  }
}

export class Content {
  constructor() {
    const ele = document.createElement("div");

    ele.innerText = "This is Content";
    document.body.appendChild(ele);
  }
}

export class Footer {
  constructor() {
    const ele = document.createElement("div");

    ele.innerText = "This is Footer";
    document.body.appendChild(ele);
  }
}