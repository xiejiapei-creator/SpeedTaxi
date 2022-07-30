System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Sprite, resourceUtil, poolManager, clientEvent, playerData, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, shopItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICarInfo(extras) {
    _reporterNs.report("ICarInfo", "../../framework/constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      resourceUtil = _unresolved_2.resourceUtil;
    }, function (_unresolved_3) {
      poolManager = _unresolved_3.poolManager;
    }, function (_unresolved_4) {
      clientEvent = _unresolved_4.clientEvent;
    }, function (_unresolved_5) {
      playerData = _unresolved_5.playerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b1f3615PZNnqYSDTVo5tI8", "shopItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("shopItem", shopItem = (_dec = ccclass("shopItem"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Sprite), _dec(_class = (_class2 = class shopItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nodeSelect", _descriptor, this);

          _initializerDefineProperty(this, "nodeUsed", _descriptor2, this);

          _initializerDefineProperty(this, "nodeRedDot", _descriptor3, this);

          _initializerDefineProperty(this, "spCarIcon", _descriptor4, this);

          this.currentCar = null;
          this.carInfo = {
            ID: 0,
            type: 0,
            num: 0,
            model: ''
          };
        }

        start() {// Your initialization goes here.
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('buyCar', this.refreshCarIcon, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('updateBuyTask', this.updateBuyTask, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('buyCar', this.refreshCarIcon, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('updateBuyTask', this.updateBuyTask, this);
        }

        refreshCarIcon() {
          if (!this.carInfo) {
            return;
          }

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).setCarIcon(this.carInfo.model, this.spCarIcon, !(_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.hasCar(this.carInfo.ID), () => {});
          this.updateBuyTask();
        }

        updateBuyTask() {
          if (!(_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.hasCar(this.carInfo.ID)) {
            var curProgress = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.getBuyTypeProgress(this.carInfo.type);
            this.nodeRedDot.active = curProgress >= this.carInfo.num;
          } else {
            this.nodeRedDot.active = false;
          }
        }

        show(carInfo) {
          this.carInfo = carInfo;
          this.select = false;
          this.nodeUsed.active = false;

          if (this.currentCar) {
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(this.currentCar);
            this.currentCar = null;
          }

          if (!carInfo) {
            //空目录
            this.spCarIcon.node.active = false;
            return;
          }

          this.spCarIcon.node.active = true;
          this.refreshCarIcon();

          if (this.carInfo.ID === (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.getCurrentCar()) {
            this.scheduleOnce(() => {
              //选中一下
              this.onItemClick(false);
            }, 0);
          }
        }

        set select(value) {
          this.nodeSelect.active = value;
        }

        get select() {
          return this.nodeSelect.active;
        }

        set used(value) {
          this.nodeUsed.active = value;
        }

        get used() {
          return this.nodeUsed.active;
        }

        onItemClick(isShowIntertitial) {
          if (isShowIntertitial === void 0) {
            isShowIntertitial = true;
          }

          if (!this.carInfo) {
            return;
          }

          var hasCar = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.hasCar(this.carInfo.ID);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent('onShopItemSelect', this.carInfo.ID, hasCar);
          this.select = true;

          if (hasCar) {
            this.used = true; // 改成点击换车按钮才换车
            // playerData.instance.useCar(this.carInfo.ID);
            // clientEvent.dispatchEvent('updateCar');
          }
        }

        updateUseState() {
          this.used = this.carInfo.ID === (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.getCurrentCar();
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeSelect", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeUsed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeRedDot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spCarIcon", [_dec5], {
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
//# sourceMappingURL=c0913b09a67afb6707183fa143be2b36deb9aaa4.js.map