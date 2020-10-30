// namespace Components {
//   // 子命名空间，可以嵌套
//   export namespace SubComponents {
//     export class Test {}
//   }
define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Header = void 0;
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
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement("div");
            ele.innerText = "This is Header";
            document.body.appendChild(ele);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var ele = document.createElement("div");
            ele.innerText = "This is Content";
            document.body.appendChild(ele);
        }
        return Content;
    }());
    exports.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var ele = document.createElement("div");
            ele.innerText = "This is Footer";
            document.body.appendChild(ele);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
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
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = /** @class */ (function () {
        function Page() {
            new components_1.Header();
            new components_1.Content();
            new components_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
