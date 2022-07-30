System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, Widget, uiManager, clientEvent, gameLogic, constant, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, revive;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameLogic(extras) {
    _reporterNs.report("gameLogic", "../../logic/gameLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      uiManager = _unresolved_2.uiManager;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      gameLogic = _unresolved_4.gameLogic;
    }, function (_unresolved_5) {
      constant = _unresolved_5.constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "95f63L653dBgLBdIgYWzpHv", "revive", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("revive", revive = (_dec = ccclass("revive"), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Widget), _dec(_class = (_class2 = class revive extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spCountDown", _descriptor, this);

          _initializerDefineProperty(this, "spIcon", _descriptor2, this);

          _initializerDefineProperty(this, "wgMenu", _descriptor3, this);

          this.closeCb = null;
          this.countDownTime = 0;
          this.currentTime = 0;
          this.isCountDowning = false;
        }

        start() {// Your initialization goes here.
        }

        show(closeCallback) {
          this.closeCb = closeCallback; //默认展示满额，倒计时下来最后为0

          this.countDownTime = 5;
          this.currentTime = 0;
          this.spCountDown.fillRange = 1;
          this.isCountDowning = true;
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).updateRewardIcon((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_FUNCTION.RELIVE, this.spIcon);
        }

        onBtnReviveClick() {
          this.isCountDowning = false;
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).openReward((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_FUNCTION.RELIVE, err => {
            if (!err) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent('revive');
              (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
                error: Error()
              }), uiManager) : uiManager).instance.hideDialog('fight/revive');
            } else {
              //失败继续倒计时
              this.isCountDowning = true;
            }
          });
        }

        onBtnSkipClick() {
          this.isCountDowning = false;
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.hideDialog('fight/revive');
          this.closeCb && this.closeCb();
        } // update (dt: number) {
        //     if (!this.isCountDowning) {
        //         return;
        //     }
        //     this.currentTime += dt;
        //     let spare = this.countDownTime - this.currentTime;
        //     if (spare <= 0) {
        //         spare = 0;
        //         //触发倒计时结束
        //         this.isCountDowning = false;
        //         this.onBtnSkipClick();
        //     }
        //     let percent = spare / this.countDownTime; // 展示百分比
        //     this.spCountDown.fillRange = percent;
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spCountDown", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "wgMenu", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a266a21ad741bcfd04dcd9d4693f4ccf1345d823.js.map