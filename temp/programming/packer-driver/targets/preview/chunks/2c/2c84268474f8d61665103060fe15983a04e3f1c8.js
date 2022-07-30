System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, playerData, clientEvent, configuration, constant, resourceUtil, flyReward, uiManager, _dec, _class, _class2, _crd, ccclass, gameLogic;

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfiguration(extras) {
    _reporterNs.report("configuration", "../framework/configuration", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfflyReward(extras) {
    _reporterNs.report("flyReward", "../ui/main/flyReward", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "../framework/uiManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      playerData = _unresolved_2.playerData;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      configuration = _unresolved_4.configuration;
    }, function (_unresolved_5) {
      constant = _unresolved_5.constant;
    }, function (_unresolved_6) {
      resourceUtil = _unresolved_6.resourceUtil;
    }, function (_unresolved_7) {
      flyReward = _unresolved_7.flyReward;
    }, function (_unresolved_8) {
      uiManager = _unresolved_8.uiManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6eeddtwEdPDYszSPn2rVjb", "gameLogic", undefined);

      ({
        ccclass
      } = _decorator);

      _export("gameLogic", gameLogic = (_dec = ccclass("gameLogic"), _dec(_class = (_class2 = class gameLogic {
        /* class member could be defined like this */
        // dummy = '';
        static addGold(gold) {
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.updatePlayerInfo('gold', gold);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent('updateGold');
        }

        static useCar(carId) {
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.useCar(carId);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent('updateCar');
        }

        static buyCar(carId) {
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.buyCar(carId);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent('buyCar');
        }

        static isVibrateOpen() {
          var isVibrateOpen = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getGlobalData('vibrate');

          if (isVibrateOpen === undefined || isVibrateOpen === null) {
            isVibrateOpen = true; //默认是打开的状态
          }

          return isVibrateOpen;
        }

        static getOpenRewardType(funStr, callback, index) {
          callback(null, (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).OPEN_REWARD_TYPE.NULL);
        }

        static checkIsByVideoAds() {
          return false;
        }
        /**
         * 根据功能设置图标对应展示
         *
         * @static
         * @param {string} funStr
         * @param {Sprite} spIcon
         * @param {Function} [callback]
         * @param {SpriteFrame} [imgAd]
         * @param {SpriteFrame} [imgShare]
         * @memberof gameLogic
         */


        static updateRewardIcon(funStr, spIcon, callback, imgAd, imgShare) {
          this.getOpenRewardType(funStr, (err, type) => {
            switch (type) {
              case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).OPEN_REWARD_TYPE.AD:
                spIcon.node.active = true;

                if (imgAd) {
                  spIcon.spriteFrame = imgAd;
                } else {
                  spIcon.spriteFrame = this.imgAd;
                }

                break;

              case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).OPEN_REWARD_TYPE.SHARE:
                spIcon.node.active = true;

                if (imgShare) {
                  spIcon.spriteFrame = imgShare;
                } else {
                  spIcon.spriteFrame = this.imgShare;
                }

                break;

              case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).OPEN_REWARD_TYPE.NULL:
                spIcon.node.active = false;
                break;
            }

            if (callback) {
              callback(err, type);
            }
          });
        }

        static finishBuyTask(type, value, isAdd) {
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.finishBuyTask(type, value, isAdd);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent('updateBuyTask');
        }

        static openReward(funStr, callback) {
          callback && callback(null);
        }
        /**
         * 登陆成功后会回调该方法,类似于一个声明周期或者状态
         */


        static afterLogin() {
          if (!(_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.isNewBee) {
            this.checkSignIn();
          }
        }
        /**
         * 如果今天还未签到则弹出
         */


        static checkSignIn() {
          if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.level === 1) {
            //第一关未通关则不跳签到界面
            return;
          }

          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.updateSignInCurrentDay();

          if (!(_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.getSignInReceivedInfo().isTodayReceived) {
            (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
              error: Error()
            }), uiManager) : uiManager).instance.pushToPopupSeq('signIn/signIn', 'signIn', {});
          }
        }

        static showFlyReward(rewardType, callback) {
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).createUI('common/flyReward', (err, node) => {
            if (err) {
              if (callback) {
                callback();
              }

              return;
            }

            var reward = node.getComponent(_crd && flyReward === void 0 ? (_reportPossibleCrUseOfflyReward({
              error: Error()
            }), flyReward) : flyReward); // reward.setInfo(rewardType === constant.REWARD_TYPE.GOLD);

            reward.setEndListener(callback);
          });
        }

      }, _class2.imgAd = null, _class2.imgShare = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2c84268474f8d61665103060fe15983a04e3f1c8.js.map