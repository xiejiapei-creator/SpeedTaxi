System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Sprite, Node, Vec3, tween, sys, clientEvent, playerData, util, constant, uiManager, gameLogic, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, mainUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameLogic(extras) {
    _reporterNs.report("gameLogic", "../../logic/gameLogic", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      clientEvent = _unresolved_2.clientEvent;
    }, function (_unresolved_3) {
      playerData = _unresolved_3.playerData;
    }, function (_unresolved_4) {
      util = _unresolved_4.util;
    }, function (_unresolved_5) {
      constant = _unresolved_5.constant;
    }, function (_unresolved_6) {
      uiManager = _unresolved_6.uiManager;
    }, function (_unresolved_7) {
      gameLogic = _unresolved_7.gameLogic;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6e662xQs9xPfZ4Gn7vNo4u5", "mainUI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mainUI", mainUI = (_dec = ccclass("mainUI"), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class mainUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spIcon", _descriptor, this);

          _initializerDefineProperty(this, "lbGold", _descriptor2, this);

          _initializerDefineProperty(this, "nodeBtnService", _descriptor3, this);

          _initializerDefineProperty(this, "nodeSignInRedDot", _descriptor4, this);

          _initializerDefineProperty(this, "nodeGoldIcon", _descriptor5, this);

          _initializerDefineProperty(this, "nodeShopRedDot", _descriptor6, this);

          this.targetScale = new Vec3(1, 1, 1);
          this.isGoldPlaying = false;
          this.arrCars = [];
          this.isShowAniFinished = false;
          this.debugIdx = 0;
          this.debugTimer = 0;
        }

        start() {
          // Your initialization goes here.
          //界面启动后表示登录完了
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).afterLogin();
          this.updateSignIn();
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('updateGold', this.updateGold, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('updateSignIn', this.updateSignIn, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('receiveGold', this.receiveGold, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('updateCar', this.updateCar, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('buyCar', this.updateCarReceived, this);
          this.nodeGoldIcon.on(Node.EventType.TOUCH_START, this.resetPlayData, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('updateGold', this.updateGold, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('updateSignIn', this.updateSignIn, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('receiveGold', this.receiveGold, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('updateCar', this.updateCar, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('buyCar', this.updateCarReceived, this);
          this.nodeGoldIcon.off(Node.EventType.TOUCH_START, this.resetPlayData, this);
        }

        updateGold() {
          let gold = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.gold || 0;
          this.lbGold.string = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).formatMoney(gold);
        }

        receiveGold() {
          this.isGoldPlaying = true;
          this.nodeGoldIcon.setScale(new Vec3(1, 1, 1));
          tween(this.targetScale).to(0.2, new Vec3(1.2, 1.2, 1.2)).to(0.2, new Vec3(1, 1, 1)).call(() => {
            this.isGoldPlaying = false;
          }).start();
        }
        /**
         * 更新签到的红点显隐
         */


        updateSignIn() {
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.updateSignInCurrentDay();
          let signInStatus = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.getSignInReceivedInfo();
          this.nodeSignInRedDot.active = !signInStatus.isAllReceived;
        }

        onBtnBgClick() {
          //先咨询，要不要试用车辆
          if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.level > (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).NEWBEE_LEVEL) {
            (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
              error: Error()
            }), uiManager) : uiManager).instance.showDialog('main/trial', [() => {
              this.askInvincible();
            }]);
          } else {
            //前2关不试用
            this.showStart();
          }
        }

        askInvincible() {
          if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.level > (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).NEWBEE_LEVEL) {
            (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
              error: Error()
            }), uiManager) : uiManager).instance.showDialog('main/invincible', [() => {
              this.showStart();
            }]);
          } else {
            this.showStart();
          }
        }

        showStart() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent('startGame');
        }

        onBtnDailyClick() {
          //7日签到
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showDialog('signIn/signIn');
        }

        onBtnLotteryClick() {
          //大转盘
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showDialog('lottery/lottery');
        }

        onBtnRankClick() {
          //排行榜
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showDialog('rank/rank');
        }

        onBtnChangeCarClick() {
          //换车
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showDialog('shop/shop');
        }

        onBtnSettingClick() {
          //设置按钮
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showDialog('main/setting');
        }

        updateCar() {}

        updateCarReceived() {
          this.nodeShopRedDot.active = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.hasCarCanReceived();
        }

        onBtnLeftClick() {
          let car = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.showCar;
          let idx = this.arrCars.indexOf(car);
          idx--;

          if (idx < 0) {
            idx = this.arrCars.length - 1;
          }

          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.showCar = this.arrCars[idx];
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent('updateCar');
        }

        onBtnRightClick() {
          let car = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.showCar;
          let idx = this.arrCars.indexOf(car);
          idx++;

          if (idx >= this.arrCars.length) {
            idx = 0;
          }

          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.showCar = this.arrCars[idx];
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent('updateCar');
        }

        show() {
          this.updateGold();
          this.nodeShopRedDot.active = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.hasCarCanReceived();
          this.arrCars.length = 0; // let arr = localConfig.instance.getCars();

          let arr = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.cars;
          arr.forEach(element => {
            // this.arrCars.push(element.ID);
            const index = parseInt(element);

            if (index >= 0) {
              this.arrCars.push(index);
            }
          });
          this.isShowAniFinished = true;
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).updateRewardIcon((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_FUNCTION.TRIAL, this.spIcon, () => {
            if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.hasCar((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.showCar)) {
              this.spIcon.node.active = false;
            }
          });

          if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.isComeFromBalance) {
            this.onBtnBgClick();
          }
        }

        update(deltaTime) {
          // Your update function goes here.
          if (this.isGoldPlaying || this.targetScale.x !== 1) {
            this.nodeGoldIcon.setScale(this.targetScale);
          }
        }

        onBtnDebugClick() {
          return;

          if (!this.debugIdx) {
            this.debugIdx = 0;
          }

          const MAX_TIMES = 5;
          this.debugIdx++;

          if (this.debugIdx > MAX_TIMES) {
            (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
              error: Error()
            }), uiManager) : uiManager).instance.showDialog('debug/password');
          } else if (!this.debugTimer) {
            var _this = this;

            this.debugTimer = setTimeout(function () {
              // _this.debugTimer = null;
              if (_this.debugIdx < MAX_TIMES) {
                _this.debugIdx = 0;
              }
            }, 2000);
          }
        }

        resetPlayData() {
          sys.localStorage.removeItem('CarConfig');
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showTips('数据重置成功！');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbGold", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeBtnService", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeSignInRedDot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeGoldIcon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeShopRedDot", [_dec7], {
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
//# sourceMappingURL=77aafb09ef1b79ed2e75e8aea8dbf031ee8e3446.js.map