System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SpriteFrame, Sprite, Node, Prefab, Button, instantiate, localConfig, playerData, constant, uiManager, signInItem, gameLogic, util, clientEvent, i18n, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, signIn;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsignInItem(extras) {
    _reporterNs.report("signInItem", "./signInItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameLogic(extras) {
    _reporterNs.report("gameLogic", "../../logic/gameLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
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
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Button = _cc.Button;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      playerData = _unresolved_3.playerData;
    }, function (_unresolved_4) {
      constant = _unresolved_4.constant;
    }, function (_unresolved_5) {
      uiManager = _unresolved_5.uiManager;
    }, function (_unresolved_6) {
      signInItem = _unresolved_6.signInItem;
    }, function (_unresolved_7) {
      gameLogic = _unresolved_7.gameLogic;
    }, function (_unresolved_8) {
      util = _unresolved_8.util;
    }, function (_unresolved_9) {
      clientEvent = _unresolved_9.clientEvent;
    }, function (_unresolved_10) {
      i18n = _unresolved_10.i18n;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d016bBiB5J1prtR6VcBPd4", "signIn", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("signIn", signIn = (_dec = ccclass("signIn"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(Node), _dec12 = property(Prefab), _dec(_class = (_class2 = class signIn extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ndBtnNormal", _descriptor, this);

          _initializerDefineProperty(this, "ndBtnDouble", _descriptor2, this);

          _initializerDefineProperty(this, "ndBtnReceive", _descriptor3, this);

          _initializerDefineProperty(this, "ndBtnClose", _descriptor4, this);

          _initializerDefineProperty(this, "spDoubleBtnIcon", _descriptor5, this);

          _initializerDefineProperty(this, "sfBlue", _descriptor6, this);

          _initializerDefineProperty(this, "sfGray", _descriptor7, this);

          _initializerDefineProperty(this, "sfVideo", _descriptor8, this);

          _initializerDefineProperty(this, "sfShare", _descriptor9, this);

          _initializerDefineProperty(this, "arrNodeDay", _descriptor10, this);

          _initializerDefineProperty(this, "pbSignInItem", _descriptor11, this);

          this.currentDay = 0;
          this.arrReceived = [];
          this.arrAfterFillSignIn = [];
          this.isTodayReceived = false;
          this.isAllReceived = false;
          this.arrSignInItemScript = [];
          this.currentReward = void 0;
          this.currentRewardType = void 0;
          this.isHadCar = void 0;
          this.createDate = void 0;
          this.getCarDate = void 0;
        }

        start() {// Your initialization goes here.
        }

        show() {
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.updateSignInCurrentDay();
          var signInInfo = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.signInInfo;
          this.currentDay = signInInfo.currentDay;
          this.arrReceived = signInInfo.receivedDays;
          this.arrAfterFillSignIn = signInInfo.afterFillSignInDays;
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).updateRewardIcon((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_FUNCTION.SIGNIN, this.spDoubleBtnIcon); // gameLogic.updateRewardIcon(constant.SHARE_FUNCTION.SIGNIN, this.spReceiveBtnIcon);

          this.showSignInInfo();
          this.setButtonStyle(); // this.ndReceiveIcon.active = true;
        }
        /**
         * 分为“双倍领取-普通领取-关闭”， “领取-暂不领取-关闭”两种形式,当天奖励为金币显示第一种，为车辆显示第二种
         */


        setButtonStyle() {
          //如果今天领取完了就将双倍领取按钮或领取按钮置灰
          var receiveStatus = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.getSignInReceivedInfo();
          this.isTodayReceived = receiveStatus.isTodayReceived;
          this.isAllReceived = receiveStatus.isAllReceived;
          this.ndBtnDouble.getComponent(Sprite).spriteFrame = this.isTodayReceived ? this.sfGray : this.sfBlue;
          this.ndBtnDouble.getComponent(Button).interactable = !this.isTodayReceived;
          this.ndBtnReceive.getComponent(Sprite).spriteFrame = this.isTodayReceived ? this.sfGray : this.sfBlue;
          this.ndBtnReceive.getComponent(Button).interactable = !this.isTodayReceived;
          var arrSignIn = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getTableArr("signIn");
          this.currentReward = arrSignIn[this.currentDay - 1];
          this.currentRewardType = this.currentReward.rewardType;

          if (this.currentRewardType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).REWARD_TYPE.CAR) {
            if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.isHadCarAndDuringPeriod(this.currentReward.amount)) {
              this.ndBtnDouble.active = true;
              this.ndBtnReceive.active = false;
              this.ndBtnNormal.active = !this.isTodayReceived; // this.ndBtnNotYet.active = false;
            } else {
              this.ndBtnDouble.active = false;
              this.ndBtnReceive.active = true;
              this.ndBtnNormal.active = false; // this.ndBtnNotYet.active = !this.isTodayReceived;
            }
          } else {
            this.ndBtnDouble.active = true;
            this.ndBtnReceive.active = false;
            this.ndBtnNormal.active = !this.isTodayReceived; // this.ndBtnNotYet.active = false;
          }
        }

        showSignInInfo() {
          this.arrSignInItemScript = [];
          var arrSignIn = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getTableArr("signIn");

          for (var idx = 0; idx < arrSignIn.length; idx++) {
            var day = arrSignIn[idx].ID;
            var isReceived = this.arrReceived.includes(day) ? true : false; //从签到数组中判断是否已经领取

            if (day <= this.currentDay) {
              //状态设置为已领取或者可领取
              arrSignIn[idx].status = isReceived ? (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).SIGNIN_REWARD_STATUS.RECEIVED : (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).SIGNIN_REWARD_STATUS.RECEIVABLE;

              if (arrSignIn[idx].status === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).SIGNIN_REWARD_STATUS.RECEIVABLE && day < this.currentDay) {
                arrSignIn[idx].status = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).SIGNIN_REWARD_STATUS.FILL_SIGNIN;

                if (this.arrAfterFillSignIn.includes(day)) {
                  arrSignIn[idx].status = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).SIGNIN_REWARD_STATUS.AFTER_FILL_SIGNIN;
                }
              }
            } else {
              //不可领取
              arrSignIn[idx].status = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).SIGNIN_REWARD_STATUS.UNRECEIVABLE;
            } // 确定布局后，设置位置


            var node = this.arrNodeDay[idx];
            var signInItemNode = null;

            if (!node.getChildByName('signInItem')) {
              signInItemNode = instantiate(this.pbSignInItem);
              node.addChild(signInItemNode);
            } else {
              signInItemNode = node.getChildByName('signInItem');
            }

            var signInItemScript = signInItemNode.getComponent(_crd && signInItem === void 0 ? (_reportPossibleCrUseOfsignInItem({
              error: Error()
            }), signInItem) : signInItem);
            signInItemScript.init(arrSignIn[idx], this);

            if (!this.arrSignInItemScript.includes(signInItemScript)) {
              this.arrSignInItemScript.push(signInItemScript);
            }
          }

          ;
        }
        /**
         * 领取奖励
         *
         * @param {object} itemInfo 单个奖励信息
         * @param {boolean} itemInfo 是否是双倍奖励
         * @param {function} callback 更新签到界面的UI
         */


        receiveReward(itemInfo, isDouble, callback) {
          var day = itemInfo.ID; //大于可领奖天数点击图标不能领取

          if (this.currentDay < day) {
            return;
          }

          var title = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).t("showReward.signinReward");
          var targetItemInfo = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).clone(itemInfo);

          if (itemInfo.ID == 2 || itemInfo.ID == 7) {
            var targetCar = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.queryByID('car', itemInfo.amount);
            targetItemInfo.ID = targetCar.ID;
            var isHadCar = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.playerInfo.cars.indexOf(targetCar.ID) !== -1;

            if (isHadCar) {
              targetItemInfo.rewardType = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).REWARD_TYPE.GOLD;
              targetItemInfo.amount = itemInfo.ID == 2 ? (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).GOLD_REWARD.SECOND : (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).GOLD_REWARD.SEVENT;
            }
          }

          targetItemInfo.amount = isDouble ? targetItemInfo.amount *= 2 : targetItemInfo.amount;
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.shiftFromPopupSeq('signIn/signIn'); // this.unschedule(this.showBtnSecondaryCallback);

          if (targetItemInfo.rewardType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).REWARD_TYPE.GOLD) {
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.updatePlayerInfo('gold', targetItemInfo.amount);
            (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
              error: Error()
            }), gameLogic) : gameLogic).showFlyReward((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).REWARD_TYPE.GOLD, () => {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent('updateGold');
            });
            callback && callback();
            return;
          }

          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.pushToPopupSeq('common/showReward', 'showReward', [targetItemInfo, false, title, callback]);
        }
        /**
         * 点击领取
         *
         * @param {boolean} isDouble
         * @memberof signIn
         */


        receiveClick(isDouble) {
          var _this = this;

          var _loop = function _loop(j) {
            var element = _this.arrSignInItemScript[j]; //只有今天的状态才存在RECEIVABLE

            if (element.itemInfo.status === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).SIGNIN_REWARD_STATUS.RECEIVABLE) {
              element._parent.receiveReward(element.itemInfo, isDouble, () => {
                element.markReceived();
              });

              return "break";
            }
          };

          for (var j = 0; j < this.arrSignInItemScript.length; j++) {
            var _ret = _loop(j);

            if (_ret === "break") break;
          }
        }
        /**
         * 双倍领取
         */


        onBtnDoubleClick() {
          // 用户 TODO：此处可实现看视频领双倍福利功能
          // gameLogic.openReward(constant.SHARE_FUNCTION.SIGNIN, (err)=>{
          //    if (!err) {
          this.receiveClick(true); //    }
          // })
        }
        /**
         * 普通领取
         */


        onBtnNormalClick() {
          this.receiveClick(false);
        }
        /**
         * 领取
         */


        onBtnReceiveClick() {
          // 用户 TODO：此处可实现看视频领福利功能
          // gameLogic.openReward(constant.SHARE_FUNCTION.SIGNIN, (err)=>{
          //     if (!err) {
          this.receiveClick(false); // }
          //  })
        }
        /**
         * 暂不领取,关闭
         */


        onBtnCloseClick() {
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.shiftFromPopupSeq('signIn/signIn');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndBtnNormal", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ndBtnDouble", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ndBtnReceive", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ndBtnClose", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spDoubleBtnIcon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sfBlue", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sfGray", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sfVideo", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "sfShare", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "arrNodeDay", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "pbSignInItem", [_dec12], {
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
//# sourceMappingURL=13fef92b51ffc245065eeab3cec4148478b76d45.js.map