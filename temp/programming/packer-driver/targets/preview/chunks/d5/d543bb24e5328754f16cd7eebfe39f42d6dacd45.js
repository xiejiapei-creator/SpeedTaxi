System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SpriteFrame, Node, carManager, gameLogic, loading, clientEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, fightCanvas;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcarManager(extras) {
    _reporterNs.report("carManager", "../../fight/carManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameLogic(extras) {
    _reporterNs.report("gameLogic", "../../logic/gameLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloading(extras) {
    _reporterNs.report("loading", "../common/loading", _context.meta, extras);
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
      SpriteFrame = _cc.SpriteFrame;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      carManager = _unresolved_2.carManager;
    }, function (_unresolved_3) {
      gameLogic = _unresolved_3.gameLogic;
    }, function (_unresolved_4) {
      loading = _unresolved_4.loading;
    }, function (_unresolved_5) {
      clientEvent = _unresolved_5.clientEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "daea1EBoy1Ms6PBdAupQWnn", "fightCanvas", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("fightCanvas", fightCanvas = (_dec = ccclass("fightCanvas"), _dec2 = property(_crd && carManager === void 0 ? (_reportPossibleCrUseOfcarManager({
        error: Error()
      }), carManager) : carManager), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(_crd && loading === void 0 ? (_reportPossibleCrUseOfloading({
        error: Error()
      }), loading) : loading), _dec6 = property(Node), _dec(_class = (_class2 = class fightCanvas extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "carManager", _descriptor, this);

          _initializerDefineProperty(this, "imgShare", _descriptor2, this);

          _initializerDefineProperty(this, "imgVideo", _descriptor3, this);

          _initializerDefineProperty(this, "loadingUI", _descriptor4, this);

          _initializerDefineProperty(this, "tip", _descriptor5, this);

          this.curProgress = 50;
          this.isFirstLoad = true;
          this.isTouching = false;
        }

        //是否正在点击中
        start() {
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).imgAd = this.imgVideo;
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).imgShare = this.imgShare; //首次进来，起始50%（前面为登录加载）

          this.loadingUI.show(this.curProgress); // Your initialization goes here.

          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('updateLoading', this.updateLoadingProgress, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('showGuide', this.showGuide, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('updateLoading', this.updateLoadingProgress, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('showGuide', this.showGuide, this);
        }

        onTouchStart() {
          this.isTouching = true;
          this.tip.active = false;
          this.carManager.controlMainCar(true);
        }

        onTouchEnd() {
          this.isTouching = false;
          this.carManager.controlMainCar(false);
        }

        showGuide(isShow) {
          if (isShow && this.isTouching) {
            //异步执行，使引导正常，因为
            this.scheduleOnce(() => {
              this.onTouchStart();
            }, 0);
          }
        }

        updateLoadingProgress(progress, tips) {
          if (!this.isFirstLoad) {
            this.curProgress += progress;
          } else {
            this.curProgress += Math.floor(progress / 2); //首次加载是跟登录一块的，这样起始是50%
          }

          this.loadingUI.updateProgress(this.curProgress, tips);
        }

        loadNewLevel() {
          this.loadingUI.node.active = true;
          this.curProgress = 0;
          this.isFirstLoad = false;
        }

        finishLoading() {
          this.loadingUI.node.active = false;
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "carManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "imgShare", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgVideo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loadingUI", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tip", [_dec6], {
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
//# sourceMappingURL=d543bb24e5328754f16cd7eebfe39f42d6dacd45.js.map