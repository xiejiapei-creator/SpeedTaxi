System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, tween, _decorator, Component, Label, Prefab, Node, Color, Button, SpriteFrame, Sprite, Vec3, uiManager, localConfig, playerData, lodash, lotteryItem, constant, clientEvent, gameLogic, configuration, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, LOTTERY_PART, lottery;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOflodash(extras) {
    _reporterNs.report("lodash", "../../framework/lodash", _context.meta, extras);
  }

  function _reportPossibleCrUseOflotteryItem(extras) {
    _reporterNs.report("lotteryItem", "./lotteryItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameLogic(extras) {
    _reporterNs.report("gameLogic", "../../logic/gameLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfiguration(extras) {
    _reporterNs.report("configuration", "../../framework/configuration", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      Color = _cc.Color;
      Button = _cc.Button;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      uiManager = _unresolved_2.uiManager;
    }, function (_unresolved_3) {
      localConfig = _unresolved_3.localConfig;
    }, function (_unresolved_4) {
      playerData = _unresolved_4.playerData;
    }, function (_unresolved_5) {
      lodash = _unresolved_5.lodash;
    }, function (_unresolved_6) {
      lotteryItem = _unresolved_6.lotteryItem;
    }, function (_unresolved_7) {
      constant = _unresolved_7.constant;
    }, function (_unresolved_8) {
      clientEvent = _unresolved_8.clientEvent;
    }, function (_unresolved_9) {
      gameLogic = _unresolved_9.gameLogic;
    }, function (_unresolved_10) {
      configuration = _unresolved_10.configuration;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7ed7RMvvZIvbdJyWwfIGDy", "lottery", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      LOTTERY_PART = 6;

      _export("lottery", lottery = (_dec = ccclass("lottery"), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Label), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(Sprite), _dec13 = property(Sprite), _dec14 = property(Sprite), _dec(_class = (_class2 = class lottery extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "arrRewardNode", _descriptor, this);

          _initializerDefineProperty(this, "pfRewardItem", _descriptor2, this);

          _initializerDefineProperty(this, "nodeTurnable", _descriptor3, this);

          _initializerDefineProperty(this, "ndBtnClose", _descriptor4, this);

          _initializerDefineProperty(this, "btnLottery", _descriptor5, this);

          _initializerDefineProperty(this, "btnAd", _descriptor6, this);

          _initializerDefineProperty(this, "lbMoney", _descriptor7, this);

          _initializerDefineProperty(this, "imgLotteryBtnDisable", _descriptor8, this);

          _initializerDefineProperty(this, "imgLotteryBtnEnable", _descriptor9, this);

          _initializerDefineProperty(this, "imgAdBtnEnable", _descriptor10, this);

          _initializerDefineProperty(this, "spLotteryBtn", _descriptor11, this);

          _initializerDefineProperty(this, "spAdIcon", _descriptor12, this);

          _initializerDefineProperty(this, "spAdBtn", _descriptor13, this);

          this.arrRewardData = [];
          this.arrLotteryItem = [];
          this.arrProbability = [];
          this.randValue = 0;
          this.curRotation = null;
          this._receiveCarTimes = 0;
        }

        //获取车的次数
        set receiveCarTimes(num) {
          console.log("#####receiveCarTimes", num);
          this._receiveCarTimes = num;
        }

        get receiveCarTimes() {
          return this._receiveCarTimes;
        }

        start() {// Your initialization goes here.
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('buyCar', this.onBuyCar, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('buyCar', this.onBuyCar, this);
        }

        onBuyCar() {
          this.initReward(); //更新下奖励界面
        }

        show() {
          this.initReward();
          this.initInfo();
          this.btnAd.node.active = true;
        }

        initReward() {
          let arrCars = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCars(); //获得所有车

          let arrLottery = [];
          arrCars.forEach(element => {
            if (!(_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.hasCar(element.ID) && element.type === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).BUY_CAR_TYPE.GOLD) {
              //未拥有的车辆，加入抽奖列表
              arrLottery.push(element.ID);
            }
          });

          if (arrLottery.length < 6) {
            //不足6辆，从已有的车辆中获得
            let arrHas = (_crd && lodash === void 0 ? (_reportPossibleCrUseOflodash({
              error: Error()
            }), lodash) : lodash).cloneDeep((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.playerInfo.cars);

            while (arrLottery.length < 6) {
              //凑足6辆
              let rand = Math.floor(Math.random() * arrHas.length);
              let carId = arrHas[rand];
              let car = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.queryByID('car', carId);

              if (car.type === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).BUY_CAR_TYPE.GOLD) {
                arrLottery.push(arrHas.splice(rand, 1)[0]);
              }
            }
          }

          this.arrRewardData = arrLottery;
          this.arrProbability = [];
          let start = 0;

          for (let idx = 0; idx < this.arrRewardNode.length; idx++) {
            let parentNode = this.arrRewardNode[idx];
            let rewardItem = this.arrLotteryItem[idx];

            if (!rewardItem) {
              rewardItem = instantiate(this.pfRewardItem);
              rewardItem.parent = parentNode;
              this.arrLotteryItem[idx] = rewardItem;
            }

            if (this.arrRewardData.length > idx) {
              let car = this.arrRewardData[idx];
              let script = rewardItem.getComponent(_crd && lotteryItem === void 0 ? (_reportPossibleCrUseOflotteryItem({
                error: Error()
              }), lotteryItem) : lotteryItem);
              script.show(car);
              let min = start;
              let max = start + 100 / LOTTERY_PART; //平均概率

              this.arrProbability.push({
                min: min,
                max: max,
                idx: idx
              });
              start = max;
            }
          }
        }

        initInfo() {
          this.lbMoney.string = '' + (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOTTERY.MONEY;
          this.checkButton();
        }

        checkButton() {
          const isFree = this.checkIsFree();
          this.btnAd.node.active = isFree;
          this.btnLottery.node.active = !isFree;

          if (isFree) {
            return;
          }

          if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.gold > (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOTTERY.MONEY) {
            this.lbMoney.color = new Color(163, 64, 27);
            this.lotteryBtnEnable = true;
            this.adBtnEnable = false;
          } else {
            this.lbMoney.color = Color.RED;
            this.lotteryBtnEnable = false;
            this.adBtnEnable = true;
          }

          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).updateRewardIcon((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_FUNCTION.LOTTERY, this.spAdIcon, () => {});
        }

        checkIsFree() {
          let signInInfo = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.signInInfo;
          const currentDay = signInInfo.currentDay;
          const data = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getGlobalData('rewardDays');
          const isFree = data === undefined || parseInt(data) < currentDay ? true : false;
          return isFree;
        }

        set lotteryBtnEnable(value) {
          if (value) {
            this.btnLottery.interactable = true;
            this.spLotteryBtn.spriteFrame = this.imgLotteryBtnEnable;
          } else {
            this.btnLottery.interactable = false;
            this.spLotteryBtn.spriteFrame = this.imgLotteryBtnDisable;
          }
        }

        set adBtnEnable(value) {
          if (value) {
            this.btnAd.interactable = true;
            this.spAdBtn.spriteFrame = this.imgAdBtnEnable;
          } else {
            this.btnAd.interactable = false;
            this.spAdBtn.spriteFrame = this.imgLotteryBtnDisable;
          }
        }

        getRandValue() {
          let idxRand = -1;

          while (idxRand === -1) {
            let rand = Math.floor(Math.random() * 100);

            for (let idx = 0; idx < this.arrProbability.length; idx++) {
              let probability = this.arrProbability[idx];

              if (rand >= probability.min && rand < probability.max) {
                idxRand = probability.idx;
                break;
              }
            }
          }

          return idxRand;
        }

        onBtnStartClick() {
          //扣除对应金币
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).addGold(-(_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOTTERY.MONEY); //每抽一次扣一次

          this.startRun();
        }

        onBtnAdClick() {
          const data = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getGlobalData('rewardDays');
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setGlobalData('rewardDays', `${!data ? 0 : parseInt(data) + 1}`);
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).openReward((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_FUNCTION.LOTTERY, err => {
            if (!err) {
              this.startRun();
            }
          });
        }

        startRun() {
          this.lotteryBtnEnable = false;
          this.adBtnEnable = false;
          this.ndBtnClose.getComponent(Button).interactable = false; //随机抽奖结果

          this.randValue = this.getRandValue(); //开始旋转
          //先开始第一轮，根据当前度数，将其旋转至360度

          let targetRotation = -360;
          let curRotation = this.nodeTurnable.eulerAngles.z % 360;
          this.nodeTurnable.eulerAngles = new Vec3(0, 0, curRotation);
          let offset = 360 - curRotation;
          let randTimes = 3 + Math.floor(Math.random() * 4);
          let rotate = targetRotation - randTimes * 360 + this.randValue * 60 + 30 - 360;
          this.curRotation = this.nodeTurnable.eulerAngles.clone();
          tween(this.curRotation) // .to(offset/360 + randTimes * 0.5, new Vec3(0, 0, rotate), { easing: 'Circular-Out'})
          .to(offset / 360 + randTimes * 0.5, new Vec3(0, 0, rotate), {
            easing: 'cubicOut'
          }).call(() => {
            this.curRotation = null;
            this.showReward();
          }).start(); // this.nodeTurnable.eulerAngles = new Vec3(0, 0, rotate);
        }

        showReward() {
          this.ndBtnClose.getComponent(Button).interactable = true;
          let itemNode = this.arrLotteryItem[this.randValue];
          let lottery = itemNode.getComponent(_crd && lotteryItem === void 0 ? (_reportPossibleCrUseOflotteryItem({
            error: Error()
          }), lotteryItem) : lotteryItem);
          lottery.showReward(this);
          this.checkButton();
        }

        onBtnCloseClick() {
          // cc.gameSpace.audioManager.playSound('click', false);
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.hideDialog('lottery/lottery');
        }

        update(deltaTime) {
          // Your update function goes here.
          if (this.curRotation) {
            this.nodeTurnable.eulerAngles = this.curRotation;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrRewardNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfRewardItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeTurnable", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ndBtnClose", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnLottery", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnAd", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbMoney", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "imgLotteryBtnDisable", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "imgLotteryBtnEnable", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "imgAdBtnEnable", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "spLotteryBtn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "spAdIcon", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "spAdBtn", [_dec14], {
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
//# sourceMappingURL=280fabd5796d321f727c8664ca13e6c6a8877359.js.map