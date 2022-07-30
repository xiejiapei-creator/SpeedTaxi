System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Node, Sprite, SpriteFrame, Animation, playerData, clientEvent, localConfig, resourceUtil, i18n, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _crd, ccclass, property, fightUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcarManager(extras) {
    _reporterNs.report("carManager", "../../fight/carManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightManager(extras) {
    _reporterNs.report("fightManager", "../../fight/fightManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfi18n(extras) {
    _reporterNs.report("i18n", "../../i18nMaster/runtime-scripts/LanguageData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      playerData = _unresolved_2.playerData;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      localConfig = _unresolved_4.localConfig;
    }, function (_unresolved_5) {
      resourceUtil = _unresolved_5.resourceUtil;
    }, function (_unresolved_6) {
      i18n = _unresolved_6.i18n;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb9b7V8bZND35IgNyATVMNv", "fightUI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("fightUI", fightUI = (_dec = ccclass("fightUI"), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Label
      }), _dec6 = property({
        type: Node,
        displayName: "进度项"
      }), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Sprite), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec14 = property(SpriteFrame), _dec15 = property(SpriteFrame), _dec16 = property(Animation), _dec17 = property(Node), _dec18 = property(Sprite), _dec19 = property(SpriteFrame), _dec20 = property(SpriteFrame), _dec21 = property(SpriteFrame), _dec22 = property(SpriteFrame), _dec(_class = (_class2 = class fightUI extends Component {
        // Property.
        // yourProperty = "some what";
        //是否展示showGuide动画
        constructor() {
          super();

          _initializerDefineProperty(this, "spStart", _descriptor, this);

          _initializerDefineProperty(this, "spEnd", _descriptor2, this);

          _initializerDefineProperty(this, "curLevel", _descriptor3, this);

          _initializerDefineProperty(this, "targetLevel", _descriptor4, this);

          _initializerDefineProperty(this, "progress", _descriptor5, this);

          _initializerDefineProperty(this, "nodeTalk", _descriptor6, this);

          _initializerDefineProperty(this, "lbTalk", _descriptor7, this);

          _initializerDefineProperty(this, "lbMake", _descriptor8, this);

          _initializerDefineProperty(this, "spHead", _descriptor9, this);

          _initializerDefineProperty(this, "imgLevelFinished", _descriptor10, this);

          _initializerDefineProperty(this, "imgLevelUnfinished", _descriptor11, this);

          _initializerDefineProperty(this, "imgProgressNoActive", _descriptor12, this);

          _initializerDefineProperty(this, "imgProgressActive", _descriptor13, this);

          _initializerDefineProperty(this, "imgProgressFinished", _descriptor14, this);

          _initializerDefineProperty(this, "aniMakeMoney", _descriptor15, this);

          _initializerDefineProperty(this, "nodeGuide", _descriptor16, this);

          this.fightManager = null;
          this.carManager = null;

          _initializerDefineProperty(this, "spShowGuideTip", _descriptor17, this);

          _initializerDefineProperty(this, "img01", _descriptor18, this);

          _initializerDefineProperty(this, "img02", _descriptor19, this);

          _initializerDefineProperty(this, "img01En", _descriptor20, this);

          _initializerDefineProperty(this, "img02En", _descriptor21, this);

          this.isShowGuide = false;
          this.showGuideTime = 0;
        }

        start() {}

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('greetingCustomer', this.updateCarProgress, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('takeCustomer', this.updateCarProgress, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('gameOver', this.updateCarProgress, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('showTalk', this.showCustomerTalk, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('makeMoney', this.onMakeMoney, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('showGuide', this.showGuide, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('greetingCustomer', this.updateCarProgress, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('takeCustomer', this.updateCarProgress, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('gameOver', this.updateCarProgress, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('showTalk', this.showCustomerTalk, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('makeMoney', this.onMakeMoney, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('showGuide', this.showGuide, this);
        }

        onTouchStart() {
          this.nodeGuide.getComponent(Animation).stop();
          this.nodeGuide.active = false;
        }

        show(manager) {
          this.fightManager = manager;
          this.carManager = this.fightManager.carManager;
          this.refreshUI();

          if (!this.carManager.mainCar.isMoving) {
            this.showGuide(true);
          }
        }

        showGuide(isShow) {
          this.nodeGuide.active = isShow;
          let ani = this.nodeGuide.getComponent(Animation);
          isShow ? ani.play() : ani.stop();

          if (isShow) {
            this.isShowGuide = true;
            this.showGuideTime = 0;
            ani.getState('showGuide').setTime(0);
          } else {
            this.isShowGuide = false;
            this.showGuideTime = 0;
          }
        }

        onBtnAgainClick() {
          // this.fightManager.reset();
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent('newLevel', false);
        }

        onBtnChangeCameraRotation() {
          this.carManager.changeCameraFollowRotation();
        }

        refreshUI() {
          let maxProgress = this.fightManager.mapManager.levelProgressCnt; //总共有多少个乘客
          //设置总共有多少个节点

          for (let idx = 0; idx < maxProgress; idx++) {
            this.progress[idx].active = true;
            this.progress[idx].getComponent(Sprite).spriteFrame = this.imgProgressNoActive;
          }

          for (let idx = maxProgress; idx < this.progress.length; idx++) {
            this.progress[idx].active = false;
          }

          let level = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo ? (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.level : 1;
          this.curLevel.string = `${level}`;
          this.targetLevel.string = `${level + 1}`;
          this.spStart.spriteFrame = this.imgLevelFinished;
          this.spEnd.spriteFrame = this.imgLevelUnfinished;
        }

        updateCarProgress() {
          //刷新进度
          let objProgress = this.carManager.getCurrentProgress();
          let start = objProgress.cur;
          let end = objProgress.isOver ? start : start - 1;

          for (let idx = 0; idx < end; idx++) {
            this.progress[idx].getComponent(Sprite).spriteFrame = this.imgProgressFinished;
          }

          if (!objProgress.isOver) {
            this.progress[end].getComponent(Sprite).spriteFrame = this.imgProgressActive;
          }

          if (this.fightManager.isFinishedLevel) {
            this.spEnd.spriteFrame = this.imgLevelFinished;
          }
        }
        /**
         * 顾客上车后或者接到新订单时会有提示
         *
         * @param {string} customerId
         * @param {number} type
         * @memberof fightUI
         */


        showCustomerTalk(customerId, type) {
          let arrTalk = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getTableArr('talk'); // Note:

          let arrFilter = [];
          arrTalk.forEach(element => {
            if (element.type === type) {
              arrFilter.push(element);
            }
          });
          let rand = Math.floor(Math.random() * arrFilter.length);
          let objRand = arrFilter[rand];
          this.lbTalk.string = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).t(`talk.${objRand.content}`);
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).setCustomerIcon(customerId, this.spHead, () => {}); //显示3秒

          this.nodeTalk.active = true;
          this.nodeTalk.getComponent(Animation).play();
          this.scheduleOnce(() => {
            this.nodeTalk.active = false;
          }, 4);
        }

        onMakeMoney(value) {
          this.aniMakeMoney.node.active = true;
          this.lbMake.string = `+${value}`;
          this.aniMakeMoney.play();
          this.aniMakeMoney.once(Animation.EventType.FINISHED, () => {
            this.aniMakeMoney.node.active = false;
          }, this);
        }

        update(deltaTime) {
          // Your update function goes here.
          if (this.isShowGuide) {
            if (Math.floor(this.showGuideTime) === 0) {
              if (window.i18nConfig.curLang === 'zh') {
                this.spShowGuideTip.spriteFrame = this.img01;
              } else if (window.i18nConfig.curLang === 'en') {
                this.spShowGuideTip.spriteFrame = this.img01En;
              }
            }

            this.showGuideTime += deltaTime;

            if (Math.floor(this.showGuideTime) === 1) {
              if (window.i18nConfig.curLang === 'zh') {
                this.spShowGuideTip.spriteFrame = this.img02;
              } else if (window.i18nConfig.curLang === 'en') {
                this.spShowGuideTip.spriteFrame = this.img02En;
              }
            } else if (Math.floor(this.showGuideTime) === 2) {
              if (window.i18nConfig.curLang === 'zh') {
                this.spShowGuideTip.spriteFrame = this.img01;
              } else if (window.i18nConfig.curLang === 'en') {
                this.spShowGuideTip.spriteFrame = this.img01En;
              }

              this.showGuideTime = 0;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spStart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spEnd", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "curLevel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "targetLevel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeTalk", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbTalk", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbMake", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spHead", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "imgLevelFinished", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "imgLevelUnfinished", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "imgProgressNoActive", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "imgProgressActive", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "imgProgressFinished", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "aniMakeMoney", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "nodeGuide", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "spShowGuideTip", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "img01", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "img02", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "img01En", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "img02En", [_dec22], {
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
//# sourceMappingURL=ffaa1d482d5dcdf098820e0cfbaa164f2972fcb3.js.map