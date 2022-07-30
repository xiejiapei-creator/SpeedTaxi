System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, carManager, clientEvent, poolManager, audioManager, constant, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, effectManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcarManager(extras) {
    _reporterNs.report("carManager", "./carManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../framework/constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      carManager = _unresolved_2.carManager;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      poolManager = _unresolved_4.poolManager;
    }, function (_unresolved_5) {
      audioManager = _unresolved_5.audioManager;
    }, function (_unresolved_6) {
      constant = _unresolved_6.constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf371ivOc1Ae64t3ScAzqjv", "effectManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("effectManager", effectManager = (_dec = ccclass("effectManager"), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: _crd && carManager === void 0 ? (_reportPossibleCrUseOfcarManager({
          error: Error()
        }), carManager) : carManager
      }), _dec(_class = (_class2 = class effectManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pfTailLine", _descriptor, this);

          _initializerDefineProperty(this, "carManager", _descriptor2, this);

          this.currentNode = null;
        }

        start() {// Your initialization goes here.
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('startBraking', this.onBrakingStart, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('endBraking', this.onBrakingEnd, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('startBraking', this.onBrakingStart, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('endBraking', this.onBrakingEnd, this);
        }

        onBrakingStart() {
          this.currentNode = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
            error: Error()
          }), poolManager) : poolManager).instance.getNode(this.pfTailLine, this.node);
          this.currentNode.setWorldPosition(this.carManager.mainCar.node.worldPosition);
          this.currentNode.eulerAngles = this.carManager.mainCar.node.eulerAngles;
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).AUDIO_SOUND.STOP);
        }

        onBrakingEnd() {
          let node = this.currentNode;
          this.currentNode = null;
          this.scheduleOnce(() => {
            if (node && node.isValid) {
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(node);
            }
          }, 2);
        }

        update(deltaTime) {
          // Your update function goes here.
          if (this.currentNode && this.carManager.mainCar) {
            this.currentNode.setWorldPosition(this.carManager.mainCar.node.worldPosition);
            this.currentNode.eulerAngles = this.carManager.mainCar.node.eulerAngles;
          }
        }

        reset() {
          if (this.currentNode) {
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(this.currentNode);
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.clearPool(this.currentNode.name);
            this.currentNode = null; //原有的都释放掉

            let arr = this.node.children.slice(0);

            for (let idx = 0; idx < arr.length; idx++) {
              let node = arr[idx];

              if (node && node.isValid) {
                node.destroy();
              }
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfTailLine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "carManager", [_dec3], {
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
//# sourceMappingURL=485274b3288ac81536a1c4cea2a625f345380984.js.map