System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ProgressBarComponent, Node, Label, Sprite, fightConstants, gameLogic, uiManager, constant, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, clickBox;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOffightConstants(extras) {
    _reporterNs.report("fightConstants", "../../fight/fightConstants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameLogic(extras) {
    _reporterNs.report("gameLogic", "../../logic/gameLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "../../framework/uiManager", _context.meta, extras);
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
      ProgressBarComponent = _cc.ProgressBarComponent;
      Node = _cc.Node;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      fightConstants = _unresolved_2.fightConstants;
    }, function (_unresolved_3) {
      gameLogic = _unresolved_3.gameLogic;
    }, function (_unresolved_4) {
      uiManager = _unresolved_4.uiManager;
    }, function (_unresolved_5) {
      constant = _unresolved_5.constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "884dcSQc2hHsJby3+7ljIyd", "clickBox", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("clickBox", clickBox = (_dec = ccclass("clickBox"), _dec2 = property(ProgressBarComponent), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Sprite), _dec(_class = (_class2 = class clickBox extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "progress", _descriptor, this);

          _initializerDefineProperty(this, "nodeReward", _descriptor2, this);

          _initializerDefineProperty(this, "lbReward", _descriptor3, this);

          _initializerDefineProperty(this, "nodeBox", _descriptor4, this);

          _initializerDefineProperty(this, "nodeMenu", _descriptor5, this);

          _initializerDefineProperty(this, "nodeClickBtn", _descriptor6, this);

          _initializerDefineProperty(this, "spIcon", _descriptor7, this);

          this.scheduleTime = 0;
          this.curProgress = 50;
          this.clickTimes = 15;
          this.curClick = 0;
          this.isOpenBox = false;
          this.rewardValue = 0;
        }

        start() {// Your initialization goes here.
        }

        show() {
          this.scheduleTime = 0;
          this.curProgress = 50;
          this.clickTimes = 10 + Math.floor(Math.random() * 5); //10-15次随机次数

          this.curClick = 0;
          this.isOpenBox = false;
          this.nodeClickBtn.active = true;
          this.progress.node.active = true;
          this.nodeBox.active = true;
          this.nodeReward.active = false;
          this.nodeMenu.active = false;
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).updateRewardIcon((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_FUNCTION.CLICK_BOX, this.spIcon);
        }

        onBtnBoxClick() {
          if (this.isOpenBox) {
            return;
          }

          this.curClick++;

          if (this.curClick > this.clickTimes) {
            //TODO 打开宝箱
            this.isOpenBox = true; //切换展示

            this.showReward();
          } else {
            this.curProgress += 20;
            this.curProgress = this.curProgress > 100 ? 100 : this.curProgress;
          }
        }

        showReward() {
          this.nodeClickBtn.active = false;
          this.progress.node.active = false;
          this.nodeBox.active = false;
          this.nodeReward.active = true;
          this.nodeMenu.active = true;
          this.lbReward.string = "+" + (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).CLICK_BOX_REWARD;
          this.rewardValue = (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).CLICK_BOX_REWARD; //TODO 展示一倍或者三倍奖励
          // playerData.instance.updatePlayerInfo('gold', fightConstants.CLICK_BOX_REWARD);
        }

        update(deltaTime) {
          this.scheduleTime += deltaTime;

          if (this.scheduleTime >= 0.1) {
            //100ms减3%
            this.curProgress -= 3;
            this.curProgress = this.curProgress < 0 ? 0 : this.curProgress;
            this.scheduleTime = 0;
          }

          this.progress.progress = this.curProgress / 100;
        }

        onBtnNormalClick() {
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).addGold((_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).CLICK_BOX_REWARD);
          this.close();
        }

        onBtnDoubleClick() {
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).openReward((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_FUNCTION.CLICK_BOX, err => {
            if (!err) {
              (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
                error: Error()
              }), gameLogic) : gameLogic).addGold((_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
                error: Error()
              }), fightConstants) : fightConstants).CLICK_BOX_REWARD * 2);
              this.close();
            }
          });
        }

        close() {
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.hideDialog('fight/clickBox');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeReward", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbReward", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeBox", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeMenu", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeClickBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spIcon", [_dec8], {
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
//# sourceMappingURL=ef49c8032a0909015ddb3056206c56625e3d03f6.js.map