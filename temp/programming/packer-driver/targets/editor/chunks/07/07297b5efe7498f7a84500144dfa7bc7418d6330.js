System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, SpriteFrame, Sprite, Label, Widget, playerData, util, clientEvent, uiManager, audioManager, constant, gameLogic, i18n, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _crd, ccclass, property, balance;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameLogic(extras) {
    _reporterNs.report("gameLogic", "../../logic/gameLogic", _context.meta, extras);
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
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      playerData = _unresolved_2.playerData;
    }, function (_unresolved_3) {
      util = _unresolved_3.util;
    }, function (_unresolved_4) {
      clientEvent = _unresolved_4.clientEvent;
    }, function (_unresolved_5) {
      uiManager = _unresolved_5.uiManager;
    }, function (_unresolved_6) {
      audioManager = _unresolved_6.audioManager;
    }, function (_unresolved_7) {
      constant = _unresolved_7.constant;
    }, function (_unresolved_8) {
      gameLogic = _unresolved_8.gameLogic;
    }, function (_unresolved_9) {
      i18n = _unresolved_9.i18n;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6b06mpFMlIZqLpxXisU3Cu", "balance", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("balance", balance = (_dec = ccclass("balance"), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Label
      }), _dec6 = property(Widget), _dec7 = property({
        type: Node,
        displayName: "进度项"
      }), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Sprite), _dec17 = property(Node), _dec(_class = (_class2 = class balance extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spStart", _descriptor, this);

          _initializerDefineProperty(this, "spEnd", _descriptor2, this);

          _initializerDefineProperty(this, "lbCurLevel", _descriptor3, this);

          _initializerDefineProperty(this, "lbTargetLevel", _descriptor4, this);

          _initializerDefineProperty(this, "wgMenu", _descriptor5, this);

          _initializerDefineProperty(this, "progress", _descriptor6, this);

          _initializerDefineProperty(this, "imgLevelFinished", _descriptor7, this);

          _initializerDefineProperty(this, "imgLevelUnfinished", _descriptor8, this);

          _initializerDefineProperty(this, "imgProgressNoActive", _descriptor9, this);

          _initializerDefineProperty(this, "imgProgressActive", _descriptor10, this);

          _initializerDefineProperty(this, "imgProgressFinished", _descriptor11, this);

          _initializerDefineProperty(this, "lbTakeCount", _descriptor12, this);

          _initializerDefineProperty(this, "lbGetNormal", _descriptor13, this);

          _initializerDefineProperty(this, "lbGetMulti", _descriptor14, this);

          _initializerDefineProperty(this, "spIcon", _descriptor15, this);

          _initializerDefineProperty(this, "nodeDouble", _descriptor16, this);

          this.rewardMoney = 0;
          this.isFinishLevel = false;
          this.showBalanceTimes = 0;
        }

        start() {// Your initialization goes here.
        }

        show(level, curProgress, isTakeOver, maxProgress, money, isFinishLevel) {
          this.showBalanceTimes++; //设置顶部关卡进度

          let start = curProgress;
          let end = isTakeOver ? start : start - 1;
          const len = this.progress.length;

          for (let idx = 0; idx < maxProgress; idx++) {
            if (maxProgress > len) {
              break;
            }

            this.progress[idx].active = true;

            if (idx < end) {
              this.progress[idx].getComponent(Sprite).spriteFrame = this.imgProgressFinished;
            } else {
              this.progress[idx].getComponent(Sprite).spriteFrame = this.imgProgressNoActive;
            }
          }

          if (!isTakeOver) {
            this.progress[end].getComponent(Sprite).spriteFrame = this.imgProgressActive;
          }

          for (let idx = maxProgress; idx < this.progress.length; idx++) {
            this.progress[idx].active = false;
          }

          this.lbCurLevel.string = level.toString();
          this.lbTargetLevel.string = `${level + 1}`;
          this.isFinishLevel = isFinishLevel;
          this.spStart.spriteFrame = this.imgLevelFinished;

          if (isFinishLevel) {
            this.spEnd.spriteFrame = this.imgLevelFinished;
          } else {
            this.spEnd.spriteFrame = this.imgLevelUnfinished;
          } //设置完成了几个订单


          let take = end >= 0 ? end : 0;
          this.lbTakeCount.string = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).t("balance.你完成了%{value}个订单", {
            value: take
          }); //设置奖励多少

          this.rewardMoney = money;
          this.lbGetNormal.string = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).formatMoney(money);
          this.lbGetMulti.string = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).formatMoney(money * 3);

          if (isFinishLevel) {
            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).AUDIO_SOUND.WIN);
          }

          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).updateRewardIcon((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_FUNCTION.BALANCE, this.spIcon); //有30%的概率不显示该按钮

          let percent = Math.floor(Math.random() * 100); //触发显示

          this.nodeDouble.active = percent < 30;
        }

        onBtnGetNormalClick() {
          //普通领取
          this.rewardOver(this.rewardMoney);
        }

        onBtnGetMultiClick() {
          //3倍领取
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).openReward((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_FUNCTION.BALANCE, err => {
            if (!err) {
              this.rewardOver(this.rewardMoney * 3);
            }
          });
        }

        rewardOver(rewardMoney) {
          //如果关卡是完成的，进入下一关
          //如果关卡是未完成的，还是保留同一关
          if (this.isFinishLevel) {
            //关卡完成了，进入下一关
            (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
              error: Error()
            }), gameLogic) : gameLogic).finishBuyTask((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).BUY_CAR_TYPE.PASS_LEVEL, (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.playerInfo.level, false);
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.passLevel(rewardMoney);
          } else {
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.updatePlayerInfo('gold', rewardMoney);
          }

          if (rewardMoney > 0) {
            (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
              error: Error()
            }), gameLogic) : gameLogic).showFlyReward((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).REWARD_TYPE.GOLD, () => {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent('updateGold');
            });
          }

          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.hideDialog('fight/balance');

          if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.level > 0) {
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.isComeFromBalance = false;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent('newLevel', this.isFinishLevel);
          } else {
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.isComeFromBalance = false;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent('newLevel', this.isFinishLevel);
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbCurLevel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbTargetLevel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "wgMenu", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "imgLevelFinished", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "imgLevelUnfinished", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "imgProgressNoActive", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "imgProgressActive", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "imgProgressFinished", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lbTakeCount", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lbGetNormal", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "lbGetMulti", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "spIcon", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "nodeDouble", [_dec17], {
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
//# sourceMappingURL=07297b5efe7498f7a84500144dfa7bc7418d6330.js.map