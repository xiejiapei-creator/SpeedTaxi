System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SpriteFrame, Sprite, Label, Node, Vec3, Animation, uiManager, resourceUtil, playerData, constant, localConfig, gameLogic, clientEvent, poolManager, i18n, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, showReward;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameLogic(extras) {
    _reporterNs.report("gameLogic", "../../logic/gameLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../../framework/poolManager", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      uiManager = _unresolved_2.uiManager;
    }, function (_unresolved_3) {
      resourceUtil = _unresolved_3.resourceUtil;
    }, function (_unresolved_4) {
      playerData = _unresolved_4.playerData;
    }, function (_unresolved_5) {
      constant = _unresolved_5.constant;
    }, function (_unresolved_6) {
      localConfig = _unresolved_6.localConfig;
    }, function (_unresolved_7) {
      gameLogic = _unresolved_7.gameLogic;
    }, function (_unresolved_8) {
      clientEvent = _unresolved_8.clientEvent;
    }, function (_unresolved_9) {
      poolManager = _unresolved_9.poolManager;
    }, function (_unresolved_10) {
      i18n = _unresolved_10.i18n;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "880e1kClIdKPqdXdgTIpdv2", "showReward", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("showReward", showReward = (_dec = ccclass("showReward"), _dec2 = property(SpriteFrame), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Animation), _dec(_class = (_class2 = class showReward extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sfGold", _descriptor, this);

          _initializerDefineProperty(this, "spIcon", _descriptor2, this);

          _initializerDefineProperty(this, "lbRewardValue", _descriptor3, this);

          _initializerDefineProperty(this, "lbTips", _descriptor4, this);

          _initializerDefineProperty(this, "lbTitle", _descriptor5, this);

          _initializerDefineProperty(this, "lbImmediateBtn", _descriptor6, this);

          _initializerDefineProperty(this, "ndCarParent", _descriptor7, this);

          _initializerDefineProperty(this, "ndBtnDouble", _descriptor8, this);

          _initializerDefineProperty(this, "ndBtnNormal", _descriptor9, this);

          _initializerDefineProperty(this, "ndBtnImmediately", _descriptor10, this);

          _initializerDefineProperty(this, "aniReward", _descriptor11, this);

          this.isDouble = false;
          this.callback = null;
          this.isLast = false;
          this.rewardType = 0;
          this.amount = 0;
          this.itemInfo = void 0;
          this._isHadCar = false;
          this.currentCar = null;
          this.carDegree = 0;
          this.rotateSpeed = 30;
        }

        start() {// Your initialization goes here.
        }
        /**
         *
         *
         * @param {*} itemInfo
         * @param {boolean} isDouble 是“双倍领取、普通领取”组合或者单独一个“立即领取”
         * @param {string} title
         * @param {Function} callback
         * @param {string} [tips]
         * @memberof showReward
         */


        show(itemInfo, isDouble, title, callback, tips, txtImmediateBtn) {
          this.itemInfo = itemInfo;
          this.rewardType = itemInfo.rewardType;
          this.amount = itemInfo.amount;
          this.ndBtnDouble.active = isDouble;
          this.ndBtnNormal.active = isDouble;
          this.ndBtnImmediately.active = !isDouble;
          this.lbTitle.string = title;
          this.lbRewardValue.string = itemInfo.rewardType === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).REWARD_TYPE.CAR ? '' : String(this.amount);
          this.callback = callback;

          if (tips) {
            this.lbTips.node.active = true;
            this.lbTips.string = tips;
          } else {
            this.lbTips.node.active = false;
          }

          this.showRewardPage();
          this.aniReward.play('rewardShow');
          this.aniReward.once(Animation.EventType.FINISHED, () => {
            this.aniReward.play('rewardIdle');
          }, this);

          if (txtImmediateBtn) {
            this.lbImmediateBtn.string = txtImmediateBtn;
          } else {
            this.lbImmediateBtn.string = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
              error: Error()
            }), i18n) : i18n).t('balance.receiveImmediately');
          }
        }
        /**
         * 设置奖励界面图标
         */


        showRewardPage() {
          if (this.currentCar) {
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(this.currentCar);
            this.currentCar = null;
          }

          switch (this.rewardType) {
            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).REWARD_TYPE.DIAMOND:
              break;

            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).REWARD_TYPE.GOLD:
              this.spIcon.spriteFrame = this.sfGold;
              this.spIcon.node.active = true;
              break;

            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).REWARD_TYPE.CAR:
              this.spIcon.node.active = false;
              let targetCar = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
                error: Error()
              }), localConfig) : localConfig).instance.queryByID('car', this.itemInfo.ID);
              let carModel = targetCar.model;
              (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
                error: Error()
              }), resourceUtil) : resourceUtil).getUICar(carModel, (err, prefab) => {
                if (err) {
                  console.error(err);
                  return;
                }

                this.currentCar = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                  error: Error()
                }), poolManager) : poolManager).instance.getNode(prefab, this.ndCarParent);
                this.carDegree = 0;
              }); // resourceUtil.setCarIcon(carModel, this.spIcon, false, ()=>{});

              break;
          }
        }

        onBtnNormalClick() {
          this.addReward();
        }

        onBtnDoubleClick() {
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).openReward((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_FUNCTION.SIGNIN, err => {
            if (!err) {
              this.amount *= 2;
              this.addReward();
            }
          });
        }

        onBtnImmediatelyClick() {
          this.addReward();
        }

        addReward() {
          switch (this.rewardType) {
            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).REWARD_TYPE.DIAMOND:
              break;

            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).REWARD_TYPE.GOLD:
              // gameLogic.addGold(this.amount);
              (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
                error: Error()
              }), playerData) : playerData).instance.updatePlayerInfo('gold', this.amount);
              (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
                error: Error()
              }), gameLogic) : gameLogic).showFlyReward((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).REWARD_TYPE.GOLD, () => {
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent('updateGold');
              });
              break;

            case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).REWARD_TYPE.CAR:
              (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
                error: Error()
              }), gameLogic) : gameLogic).buyCar(this.itemInfo.ID);
              break;
          }

          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.hideDialog('common/showReward');
          this.callback && this.callback();
        }

        update(deltaTime) {
          //旋转展示车辆
          if (this.currentCar) {
            this.carDegree -= deltaTime * this.rotateSpeed;

            if (this.carDegree <= -360) {
              this.carDegree += 360;
            }

            this.currentCar.eulerAngles = new Vec3(0, this.carDegree, 0);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sfGold", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbRewardValue", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbTips", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbTitle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbImmediateBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "ndCarParent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ndBtnDouble", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "ndBtnNormal", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "ndBtnImmediately", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "aniReward", [_dec12], {
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
//# sourceMappingURL=60f00d11d2ce1635940b7a09b60a09395bfdb809.js.map