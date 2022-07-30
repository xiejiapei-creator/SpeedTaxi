System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, SpriteFrame, Label, Node, Animation, playerData, constant, gameLogic, localConfig, clientEvent, uiManager, resourceUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, signInItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameLogic(extras) {
    _reporterNs.report("gameLogic", "../../logic/gameLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../../framework/resourceUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Label = _cc.Label;
      Node = _cc.Node;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      playerData = _unresolved_2.playerData;
    }, function (_unresolved_3) {
      constant = _unresolved_3.constant;
    }, function (_unresolved_4) {
      gameLogic = _unresolved_4.gameLogic;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }, function (_unresolved_6) {
      clientEvent = _unresolved_6.clientEvent;
    }, function (_unresolved_7) {
      uiManager = _unresolved_7.uiManager;
    }, function (_unresolved_8) {
      resourceUtil = _unresolved_8.resourceUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a6efh8jF9Js7ZZXyAL57KG", "signInItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("signInItem", signInItem = (_dec = ccclass("signInItem"), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(Sprite), _dec5 = property(SpriteFrame), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Label), _dec(_class = (_class2 = class signInItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sfBgBlue", _descriptor, this);

          _initializerDefineProperty(this, "sfYellow", _descriptor2, this);

          _initializerDefineProperty(this, "spReward", _descriptor3, this);

          _initializerDefineProperty(this, "sfGold", _descriptor4, this);

          _initializerDefineProperty(this, "nodeTick", _descriptor5, this);

          _initializerDefineProperty(this, "nodeBtnFillSign", _descriptor6, this);

          _initializerDefineProperty(this, "nodeBtnAfterFillSign", _descriptor7, this);

          _initializerDefineProperty(this, "lbDayIndex", _descriptor8, this);

          _initializerDefineProperty(this, "nodeLight", _descriptor9, this);

          _initializerDefineProperty(this, "lbValue", _descriptor10, this);

          this._parent = null;
          this.itemInfo = null;
          this.isHadCar = null;
        }

        start() {// Your initialization goes here.
        }

        init(itemInfo, parent) {
          this._parent = parent;
          this.itemInfo = itemInfo;
          this.lbValue.string = itemInfo.rewardType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).REWARD_TYPE.CAR ? '' : String(itemInfo.amount);
          this.lbDayIndex.string = String(itemInfo.ID);
          this.setIcon(itemInfo.rewardType);
          this.setStatus(itemInfo.status);
          this.node.getComponent(Sprite).spriteFrame = Number(itemInfo.ID) >= 7 ? this.sfBgBlue : this.sfYellow;
        }

        setIcon(type) {
          switch (type) {
            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).REWARD_TYPE.DIAMOND:
              break;

            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).REWARD_TYPE.GOLD:
              this.spReward.spriteFrame = this.sfGold;
              break;

            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).REWARD_TYPE.CAR:
              let targetCar = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.queryByID('car', this.itemInfo.amount);
              let carModel = targetCar.model;

              if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
                error: Error()
              }), playerData) : playerData).instance.isHadCarAndDuringPeriod(this.itemInfo.amount)) {
                this.spReward.spriteFrame = this.sfGold;

                if (this.itemInfo.ID == 2) {
                  this.lbValue.string = String((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).GOLD_REWARD.SECOND);
                } else if (this.itemInfo.ID == 7) {
                  this.lbValue.string = String((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).GOLD_REWARD.SEVENT);
                }
              } else {
                (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
                  error: Error()
                }), resourceUtil) : resourceUtil).setCarIcon(carModel, this.spReward, false, () => {});
              }

              break;
          }
        }

        setStatus(status) {
          switch (status) {
            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).SIGNIN_REWARD_STATUS.RECEIVED:
              this.showItemUI(false, true, false, false);
              break;

            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).SIGNIN_REWARD_STATUS.RECEIVABLE:
              this.showItemUI(true, false, false, false);
              break;

            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).SIGNIN_REWARD_STATUS.UNRECEIVABLE:
              this.showItemUI(false, false, false, false);
              break;

            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).SIGNIN_REWARD_STATUS.FILL_SIGNIN:
              this.showItemUI(false, false, true, false);
              break;

            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).SIGNIN_REWARD_STATUS.AFTER_FILL_SIGNIN:
              this.showItemUI(true, false, false, true);
              break;
          }
        }

        showItemUI(isShowLight, isShowTick, isShowBtnFillSignIn, isShowBtnReceive) {
          this.nodeLight.active = isShowLight;
          let lightAni = this.nodeLight.getComponent(Animation);
          isShowLight ? lightAni.play() : lightAni.stop();
          this.nodeTick.active = isShowTick;
          this.nodeBtnFillSign.active = isShowBtnFillSignIn;
          this.nodeBtnAfterFillSign.active = isShowBtnReceive;
        }
        /**
         * 点击补签后的领取按钮触发，或者点击当前可领取触发
         */


        onBtnAfterFillSignClick() {
          if (this.itemInfo.status === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SIGNIN_REWARD_STATUS.AFTER_FILL_SIGNIN || this.itemInfo.status === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SIGNIN_REWARD_STATUS.RECEIVABLE) {
            this._parent.receiveReward(this.itemInfo, false, this.markReceived.bind(this));
          }
        }
        /**
         * 标记为已领取
         */


        markReceived() {
          this.itemInfo.status = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SIGNIN_REWARD_STATUS.RECEIVED;
          this.setStatus(this.itemInfo.status); //记录车领取的时间

          if ((this.itemInfo.ID === 2 || this.itemInfo.ID === 7) && !this.isHadCar) {
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.updateDictGetCarTime(this.itemInfo.amount);
          } //添加已领取奖励的天数


          if (this.itemInfo.ID) {
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.updateSignInReceivedDays(this.itemInfo.ID);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent('updateSignIn');
          }

          this.close();
        }

        close() {
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.shiftFromPopupSeq('common/showReward');
          let receiveStatus = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.getSignInReceivedInfo();
          let isAllReceived = receiveStatus.isAllReceived;

          if (!isAllReceived) {
            (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
              error: Error()
            }), uiManager) : uiManager).instance.pushToPopupSeq('signIn/signIn', 'signIn', {});
          } else {
            (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
              error: Error()
            }), uiManager) : uiManager).instance.shiftFromPopupSeq("common/showReward");
          }
        }
        /**
         * 标记为补签后可以领取
         */


        markAfterFillSignIn() {
          this.itemInfo.status = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SIGNIN_REWARD_STATUS.AFTER_FILL_SIGNIN;
          this.setStatus(this.itemInfo.status);
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.updateSignInFillSignInDays(this.itemInfo.ID, false);
        }
        /**
         * 补签按钮
         */


        onBtnFillSignInClick() {
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).openReward((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_FUNCTION.FILL_SIGNIN, err => {
            if (!err) {
              this.markAfterFillSignIn();
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sfBgBlue", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sfYellow", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spReward", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sfGold", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeTick", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeBtnFillSign", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeBtnAfterFillSign", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbDayIndex", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeLight", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbValue", [_dec11], {
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
//# sourceMappingURL=cd3ce657486041bf2b6a2185966fb9659c695e49.js.map