System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, error, _decorator, _dec, _class, _class2, _crd, ccclass, oneToMultiListener;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      error = _cc.error;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10a25g6TDNP2IICdF4Htopx", "oneToMultiListener", undefined);

      ({
        ccclass
      } = _decorator);

      _export("oneToMultiListener", oneToMultiListener = (_dec = ccclass("oneToMultiListener"), _dec(_class = (_class2 = class oneToMultiListener {
        static on(eventName, handler, target) {
          var objHandler = {
            handler: handler,
            target: target
          };
          var handlerList = this.handlers[eventName];

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

        static off(eventName, handler, target) {
          var handlerList = this.handlers[eventName];

          if (!handlerList) {
            return;
          }

          for (var i = 0; i < handlerList.length; i++) {
            var oldObj = handlerList[i];

            if (oldObj.handler === handler && (!target || target === oldObj.target)) {
              handlerList.splice(i, 1);
              break;
            }
          }
        }

        static dispatchEvent(eventName) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          // if (this.supportEvent !== null && !this.supportEvent.hasOwnProperty(eventName)) {
          //     cc.error("please add the event into clientEvent.js");
          //     return;
          // }
          var handlerList = this.handlers[eventName];
          var params = [];
          var i;

          for (i = 1; i < arguments.length; i++) {
            params.push(arguments[i]);
          }

          if (!handlerList) {
            return;
          }

          for (i = 0; i < handlerList.length; i++) {
            var objHandler = handlerList[i];

            if (objHandler.handler) {
              objHandler.handler.apply(objHandler.target, args);
            }
          }
        }

        static setSupportEventList(arrSupportEvent) {
          if (!(arrSupportEvent instanceof Array)) {
            error("supportEvent was not array");
            return false;
          }

          this.supportEvent = {};

          for (var i in arrSupportEvent) {
            var eventName = arrSupportEvent[i];
            this.supportEvent[eventName] = i;
          }

          return true;
        }

      }, _class2.handlers = void 0, _class2.supportEvent = void 0, _class2)) || _class));

      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c2adf935fbf47bd4709daaee5fe95d63f353eac9.js.map