System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Widget, Sprite, Node, gameLogic, constant, poolManager, localConfig, playerData, resourceUtil, uiManager, clientEvent, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, invincible;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfgameLogic(extras) {
    _reporterNs.report("gameLogic", "../../logic/gameLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Widget = _cc.Widget;
      Sprite = _cc.Sprite;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      gameLogic = _unresolved_2.gameLogic;
    }, function (_unresolved_3) {
      constant = _unresolved_3.constant;
    }, function (_unresolved_4) {
      poolManager = _unresolved_4.poolManager;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }, function (_unresolved_6) {
      playerData = _unresolved_6.playerData;
    }, function (_unresolved_7) {
      resourceUtil = _unresolved_7.resourceUtil;
    }, function (_unresolved_8) {
      uiManager = _unresolved_8.uiManager;
    }, function (_unresolved_9) {
      clientEvent = _unresolved_9.clientEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ec04bogempOHrQhVVHVqSZV", "invincible", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("invincible", invincible = (_dec = ccclass("invincible"), _dec2 = property(Node), _dec3 = property(Widget), _dec4 = property(Sprite), _dec(_class = (_class2 = class invincible extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nodeCarParent", _descriptor, this);

          _initializerDefineProperty(this, "wgMenu", _descriptor2, this);

          _initializerDefineProperty(this, "spIcon", _descriptor3, this);

          this._callback = undefined;
          this.currentCar = null;
        }

        start() {// Your initialization goes here.
        }

        show(callback) {
          this._callback = callback;
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).updateRewardIcon((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_FUNCTION.INVINCIBLE, this.spIcon, (err, type) => {});

          if (this.currentCar) {
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(this.currentCar);
            this.currentCar = null;
          } //随机辆未拥有的车


          let carInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.queryByID('car', (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.showCar.toString());
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getUICar(carInfo.model, (err, prefab) => {
            if (err) {
              console.error(err, carInfo.model);
              return;
            }

            this.currentCar = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(prefab, this.nodeCarParent);
          });
        }

        onBtnCloseClick() {
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.hideDialog('main/invincible');
          this._callback && this._callback();
        }

        onBtnOKClick() {
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).openReward((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_FUNCTION.INVINCIBLE, (err, type) => {
            if (err) return;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent('showInvincible');
            this.onBtnCloseClick();
          });
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeCarParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "wgMenu", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spIcon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2f42d30b59a2847cba34f225148667f878786ed6.js.map