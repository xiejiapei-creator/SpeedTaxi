System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, log, _decorator, _dec, _class, _dec2, _class3, _crd, ccclass, property, oneToOneListener, eventListener;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      log = _cc.log;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10a09om3sZD8q2H50TLwLIc", "eventListener", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      oneToOneListener = (_dec = ccclass("oneToOneListener"), _dec(_class = class oneToOneListener {
        constructor() {
          this.handle = {};
        }

        // 注册监听事件
        on(eventName, handler, target) {
          this.handle[eventName] = {
            handler: handler,
            target: target
          };
        } // 取消监听事件


        off(eventName, handler) {
          const oldObj = this.handle[eventName];

          if (oldObj && oldObj.handler && oldObj.handler === handler) {
            delete this.handle[eventName];
          }
        } // 派发事件


        dispatchEvent(eventName) {
          const objHandler = this.handle[eventName];

          if (objHandler.handler) {
            objHandler.handler.apply(objHandler.target);
          } else {
            log("not register " + eventName + "    callback func");
          }
        }

      }) || _class);
      ;

      _export("eventListener", eventListener = (_dec2 = ccclass("eventListener"), _dec2(_class3 = class eventListener {
        static getBaseClass(type) {
          return oneToOneListener;
        }

      }) || _class3));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a902fdd4f78d3d7e7cd08a001cefd4a18baefcc3.js.map