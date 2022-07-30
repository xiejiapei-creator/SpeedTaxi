System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, Label, playerData, util, constant, gameLogic, uiManager, clientEvent, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, online;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameLogic(extras) {
    _reporterNs.report("gameLogic", "../../logic/gameLogic", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      playerData = _unresolved_2.playerData;
    }, function (_unresolved_3) {
      util = _unresolved_3.util;
    }, function (_unresolved_4) {
      constant = _unresolved_4.constant;
    }, function (_unresolved_5) {
      gameLogic = _unresolved_5.gameLogic;
    }, function (_unresolved_6) {
      uiManager = _unresolved_6.uiManager;
    }, function (_unresolved_7) {
      clientEvent = _unresolved_7.clientEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "349acC5lWBNyZL7loxYm/uD", "online", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("online", online = (_dec = ccclass("online"), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Label), _dec(_class = (_class2 = class online extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spTimeProgress", _descriptor, this);

          _initializerDefineProperty(this, "perTimeProgress", _descriptor2, this);

          _initializerDefineProperty(this, "lbGold", _descriptor3, this);

          this.currentTime = 0;
          this.isOverflow = false;
          this.currentGold = 0;
        }

        start() {// Your initialization goes here.
        }

        onEnable() {
          //触发界面刷新
          this.refresh();
        }

        refresh() {
          //每圈计时
          this.currentTime = 0;
          this.perTimeProgress.fillRange = 0;
          let lastTime = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.getLastOnlineRewardTime();
          let offsetTime = Math.floor(((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.getCurrentTime() - lastTime) / 1000);
          offsetTime = offsetTime > 0 ? offsetTime : 0;
          offsetTime = offsetTime < (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).ONLINE.MAX_TIME ? offsetTime : (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).ONLINE.MAX_TIME;
          this.isOverflow = offsetTime === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).ONLINE.MAX_TIME; //设置当前收益

          this.currentGold = Math.floor(offsetTime * (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).ONLINE.PROFIT_PER_SECOND);
          this.lbGold.string = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).formatMoney(this.currentGold); //进度条

          let percent = offsetTime / (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).ONLINE.MAX_TIME;
          percent = percent > 1 ? 1 : percent;
          this.spTimeProgress.fillRange = percent;
        }

        clear() {
          this.currentGold = 0;
          this.lbGold.string = '0';
          this.spTimeProgress.fillRange = 0;
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.updateLastOnlineRewardTime(this.currentTime);
          this.isOverflow = false;
        }

        onBtnOnlineClick() {
          if (this.currentGold <= 0) {
            return;
          }

          let pro = this.spTimeProgress.fillRange; //如果超过了50%要问是否要双倍，否则直接领取

          if (pro >= 0.5) {
            //显示弹窗
            (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
              error: Error()
            }), uiManager) : uiManager).instance.showDialog('main/onlineDouble', [this.currentGold, () => {
              this.clear();
            }]);
          } else {
            // gameLogic.addGold(this.currentGold);
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.updatePlayerInfo('gold', this.currentGold); //播放特效
            //....

            (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
              error: Error()
            }), gameLogic) : gameLogic).showFlyReward((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).REWARD_TYPE.GOLD, () => {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent('updateGold');
            });
            this.clear();
          }
        }

        update(deltaTime) {
          // Your update function goes here.
          if (!this.isOverflow) {
            this.currentTime += deltaTime;

            if (this.currentTime > (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).ONLINE.TIME_PER_CIRCLE) {
              this.refresh();
            } else {
              let progress = this.currentTime / (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).ONLINE.TIME_PER_CIRCLE;
              this.perTimeProgress.fillRange = progress;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spTimeProgress", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "perTimeProgress", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbGold", [_dec4], {
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
//# sourceMappingURL=46ef0372e253792c9cf3f5d68a8a0ab90f6517a4.js.map