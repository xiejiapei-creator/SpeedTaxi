System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _class2, _crd, ccclass, oneToMultiListener;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10a25g6TDNP2IICdF4Htopx", "oneToMultiListener", undefined);

      ({
        ccclass
      } = _decorator);

      _export("oneToMultiListener", oneToMultiListener = (_dec = ccclass("oneToMultiListener"), _dec(_class = (_class2 = class oneToMultiListener {
        // 注册监听事件
        static on(eventName, handler, target) {
          const objHandler = {
            handler: handler,
            target: target
          };
          let handlerList = this.handlers[eventName];

          if (!handlerList) {
            handlerList = [];
            this.handlers[eventName] = handlerList;
          }

          for (var i = 0; i < handlerList.length; i++) {
            if (!handlerList[i]) {
              handlerList[i] = objHandler;
              return i;
            }
          }

          handlerList.push(objHandler);
          return handlerList.length;
        }

        // 取消监听事件
        static off(eventName, handler, target) {
          const handlerList = this.handlers[eventName];

          if (!handlerList) {
            return;
          }

          for (let i = 0; i < handlerList.length; i++) {
            const oldObj = handlerList[i];

            if (oldObj.handler === handler && (!target || target === oldObj.target)) {
              handlerList.splice(i, 1);
              break;
            }
          }
        }

        // 派发事件
        static dispatchEvent(eventName, ...args) {
          const handlerList = this.handlers[eventName];

          if (!handlerList) {
            return;
          }

          for (let i = 0; i < handlerList.length; i++) {
            const objHandler = handlerList[i];

            if (objHandler.handler) {
              objHandler.handler.apply(objHandler.target, args);
            }
          }
        }

      }, _class2.handlers = void 0, _class2)) || _class));

      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7ffc3be0c5b98fb741d9b95bed5478f2db2cb0e8.js.map