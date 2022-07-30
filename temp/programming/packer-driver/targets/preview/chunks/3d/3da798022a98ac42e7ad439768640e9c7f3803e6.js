System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, error, log, _decorator, _dec, _class, _dec2, _class3, _crd, ccclass, property, oneToOneListener, eventListener;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      error = _cc.error;
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
          this.supportEvent = {};
          this.handle = {};
          this.supportEvent = null;
        }

        on(eventName, handler, target) {
          this.handle[eventName] = {
            handler: handler,
            target: target
          };
        }

        off(eventName, handler) {
          var oldObj = this.handle[eventName];

          if (oldObj && oldObj.handler && oldObj.handler === handler) {
            delete this.handle[eventName];
          }
        }

        dispatchEvent(eventName) {
          if (this.supportEvent !== null && !this.supportEvent.hasOwnProperty(eventName)) {
            error("please add the event into clientEvent.js");
            return;
          }

          var objHandler = this.handle[eventName];
          var args = [];

          for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
          }

          if (objHandler.handler) {
            objHandler.handler.apply(objHandler.target, args);
          } else {
            log("not register " + eventName + "    callback func");
          }
        }

        setSupportEventList(arrSupportEvent) {
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
//# sourceMappingURL=3da798022a98ac42e7ad439768640e9c7f3803e6.js.map