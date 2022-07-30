System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Button, Node, Prefab, Vec3, Color, Sprite, instantiate, playerData, clientEvent, util, uiManager, shopPage, poolManager, localConfig, resourceUtil, constant, gameLogic, i18n, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, MAX_PAGE_SIZE, shop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshopPage(extras) {
    _reporterNs.report("shopPage", "./shopPage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../../framework/resourceUtil", _context.meta, extras);
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
      Label = _cc.Label;
      Button = _cc.Button;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      Color = _cc.Color;
      Sprite = _cc.Sprite;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      playerData = _unresolved_2.playerData;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      util = _unresolved_4.util;
    }, function (_unresolved_5) {
      uiManager = _unresolved_5.uiManager;
    }, function (_unresolved_6) {
      shopPage = _unresolved_6.shopPage;
    }, function (_unresolved_7) {
      poolManager = _unresolved_7.poolManager;
    }, function (_unresolved_8) {
      localConfig = _unresolved_8.localConfig;
    }, function (_unresolved_9) {
      resourceUtil = _unresolved_9.resourceUtil;
    }, function (_unresolved_10) {
      constant = _unresolved_10.constant;
    }, function (_unresolved_11) {
      gameLogic = _unresolved_11.gameLogic;
    }, function (_unresolved_12) {
      i18n = _unresolved_12.i18n;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15effXNtKpGeLctODlTRqhl", "shop", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      MAX_PAGE_SIZE = 9; //一页最多9个

      _export("shop", shop = (_dec = ccclass("shop"), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Prefab), _dec13 = property(Sprite), _dec14 = property(Label), _dec(_class = (_class2 = class shop extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lbGold", _descriptor, this);

          _initializerDefineProperty(this, "nodeGet", _descriptor2, this);

          _initializerDefineProperty(this, "nodeGold", _descriptor3, this);

          _initializerDefineProperty(this, "nodeBuy", _descriptor4, this);

          _initializerDefineProperty(this, "nodeGo", _descriptor5, this);

          _initializerDefineProperty(this, "lbDesc", _descriptor6, this);

          _initializerDefineProperty(this, "lbPrice", _descriptor7, this);

          _initializerDefineProperty(this, "lbGo", _descriptor8, this);

          _initializerDefineProperty(this, "nodeCarParent", _descriptor9, this);

          _initializerDefineProperty(this, "nodePages", _descriptor10, this);

          _initializerDefineProperty(this, "pfPage", _descriptor11, this);

          _initializerDefineProperty(this, "spCarBlack", _descriptor12, this);

          _initializerDefineProperty(this, "lbPage", _descriptor13, this);

          this.currentPage = null;
          this.currentCar = null;
          this.carDegree = 0;
          this.rotateSpeed = 30;
          this.currentCarInfo = void 0;
          this.pageIndex = 0;
          this.maxPage = 0;
          this.currentCarID = 0;
        }

        start() {// Your initialization goes here.
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('updateGold', this.updateGold, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('onShopItemSelect', this.onShopItemSelect, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('updateBuyTask', this.updateButtons, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('updateGold', this.updateGold, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('onShopItemSelect', this.onShopItemSelect, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('updateBuyTask', this.updateButtons, this);
        }

        show() {
          let cars = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCars();
          this.maxPage = Math.floor(cars.length / MAX_PAGE_SIZE);
          this.updateGold();
          this.showPage();
        }

        showPage() {
          if (!this.currentPage) {
            this.currentPage = instantiate(this.pfPage);
            this.currentPage.parent = this.nodePages;
            this.pageIndex = 0;
            this.refreshPageLabel();
            this.currentPage.getComponent(_crd && shopPage === void 0 ? (_reportPossibleCrUseOfshopPage({
              error: Error()
            }), shopPage) : shopPage).setPage(this.pageIndex);
          }

          this.currentPage.getComponent(_crd && shopPage === void 0 ? (_reportPossibleCrUseOfshopPage({
            error: Error()
          }), shopPage) : shopPage).show();
        }

        updateGold() {
          let gold = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.gold || 0;
          this.lbGold.string = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).formatMoney(gold);
        }

        onBtnCloseClick() {
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.hideDialog('shop/shop');
        }

        getCar() {
          // playerData.instance.buyCar(this.currentCarInfo.ID);
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).buyCar(this.currentCarInfo.ID);
          let rewardInfo = {
            rewardType: (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).REWARD_TYPE.CAR,
            amount: 1,
            ID: this.currentCarInfo.ID
          };
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showDialog('common/showReward', [rewardInfo, false,
          /*i18n.t("showReward.buySuccessful")*/
          '购买成功', () => {
            //启用
            (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
              error: Error()
            }), gameLogic) : gameLogic).useCar(this.currentCarInfo.ID);
            this.currentPage.getComponent(_crd && shopPage === void 0 ? (_reportPossibleCrUseOfshopPage({
              error: Error()
            }), shopPage) : shopPage).refreshUse(this.currentCarInfo.ID);
          }, null,
          /*i18n.t("showReward.confirm")*/
          '确认']);
        }

        onBtnGetClick() {
          let carID = this.currentCarInfo.ID;

          if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.hasCar(carID)) {
            // 点击换车按钮后才算换车成功
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.useCar(carID);
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent('updateCar'); // return;
          } else if (this.currentCarInfo.type === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).BUY_CAR_TYPE.GOLD) {
            if (this.currentCarInfo.num > (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.playerInfo.gold) {
              //金币不足
              // return;
              (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
                error: Error()
              }), uiManager) : uiManager).instance.showTips(
              /*i18n.t("shop.getGold")*/
              '获取金币', () => {});
              return;
            } //扣款


            (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
              error: Error()
            }), gameLogic) : gameLogic).addGold(-this.currentCarInfo.num); //获得车

            this.getCar();
          } else {
            let currentProgress = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.getBuyTypeProgress(this.currentCarInfo.type);

            if (currentProgress >= this.currentCarInfo.num) {
              //可以获得了
              this.getCar();
            } else {
              //对应任务，对应界面
              switch (this.currentCarInfo.type) {
                case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).BUY_CAR_TYPE.GAME:
                case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).BUY_CAR_TYPE.LOGIN:
                case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).BUY_CAR_TYPE.CONTINUOUS_LOGIN:
                case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).BUY_CAR_TYPE.PASS_LEVEL:
                  this.onBtnCloseClick();
                  break;

                case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).BUY_CAR_TYPE.SIGNIN:
                  this.onBtnCloseClick(); //显示签到界面

                  (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
                    error: Error()
                  }), uiManager) : uiManager).instance.showDialog('signIn/signIn');
                  break;

                case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).BUY_CAR_TYPE.SHARE:
                  (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
                    error: Error()
                  }), gameLogic) : gameLogic).openReward((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).SHARE_FUNCTION.SHOP_SHARE, (err, type) => {});
                  break;

                case (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                  error: Error()
                }), constant) : constant).BUY_CAR_TYPE.VIDEO:
                  (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
                    error: Error()
                  }), gameLogic) : gameLogic).openReward((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                    error: Error()
                  }), constant) : constant).SHARE_FUNCTION.SHOP_VIDEO, (err, isOver) => {});
                  break;
              }
            }
          }
        }

        checkBtn() {}

        onBtnGoldClick() {
          (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
            error: Error()
          }), gameLogic) : gameLogic).openReward((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).SHARE_FUNCTION.SHOP_VIDEO, err => {
            if (!err) {
              (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
                error: Error()
              }), gameLogic) : gameLogic).showFlyReward((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).REWARD_TYPE.GOLD, () => {
                (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
                  error: Error()
                }), gameLogic) : gameLogic).addGold(300);
                this.updateButtons();
              });
            }
          });
        }

        onShopItemSelect(carID, useCar) {
          let curPage = this.currentPage.getComponent(_crd && shopPage === void 0 ? (_reportPossibleCrUseOfshopPage({
            error: Error()
          }), shopPage) : shopPage);
          curPage.unSelectAll();

          if (useCar) {
            curPage.unUseAll();
          }

          if (this.currentCar) {
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(this.currentCar);
            this.currentCar = null;
          } //刷新界面展示


          this.currentCarInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.queryByID('car', carID.toString());

          if (this.currentCarInfo.type === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).BUY_CAR_TYPE.SHARE) {
            //分享审核的时候特殊处理
            this.currentCarInfo.type = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).BUY_CAR_TYPE.GOLD;
            this.currentCarInfo.num = 2000;
          }

          if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.hasCar(carID)) {
            this.spCarBlack.node.active = false;
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).getUICar(this.currentCarInfo.model, (err, prefab) => {
              if (err) {
                console.error(err, this.currentCarInfo.model);
                return;
              }

              this.carDegree = 0;
              this.currentCar = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(prefab, this.nodeCarParent);
            });
          } else {
            this.spCarBlack.node.active = true;
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).setCarIcon(this.currentCarInfo.model, this.spCarBlack, true, () => {});
          }

          this.updateButtons();
        }

        update(deltaTime) {
          // Your update function goes here.
          //旋转展示车辆
          if (this.currentCar) {
            this.carDegree -= deltaTime * this.rotateSpeed;

            if (this.carDegree <= -360) {
              this.carDegree += 360;
            }

            this.currentCar.eulerAngles = new Vec3(0, this.carDegree, 0);
          }
        }

        updateButtons() {
          if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.hasCar(this.currentCarInfo.ID)) {
            //已拥有该车辆
            this.lbDesc.string = '';
            this.nodeGo.active = true;
            this.nodeBuy.active = false;
            this.lbGo.string =
            /*i18n.t('shop.acquired')*/
            '换车'; //TODO 引擎点击事件传递有问题，先开起来

            this.nodeGet.getComponent(Button).interactable = true; //即刻玩那边特殊处理，如果是分享则变成用金币获取
          } else if (this.currentCarInfo.type === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).BUY_CAR_TYPE.GOLD) {
            this.lbDesc.string = '';
            this.lbPrice.string = this.currentCarInfo.num;

            if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.playerInfo.gold >= this.currentCarInfo.num) {
              this.lbPrice.color = Color.WHITE;
              this.nodeGet.getComponent(Button).interactable = true; // this.nodeGold.active = false;
            } else {
              this.lbPrice.color = Color.RED;
              this.nodeGet.getComponent(Button).interactable = true; // this.nodeGold.active = true;
            }

            this.nodeGo.active = false;
            this.nodeBuy.active = true;
          } else {
            this.nodeGet.getComponent(Button).interactable = true;
            this.nodeGo.active = true;
            this.nodeBuy.active = false;
            let num = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.getBuyTypeProgress(this.currentCarInfo.type);

            if (num < this.currentCarInfo.num) {
              this.lbGo.string =
              /*i18n.t('shop.go')*/
              '前往商店';
            } else {
              this.lbGo.string =
              /*i18n.t('shop.receive')*/
              '获取';
            }

            let strDesc = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
              error: Error()
            }), i18n) : i18n).t(`carTask.${this.currentCarInfo.show}`);

            if (this.currentCarInfo.type !== (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).BUY_CAR_TYPE.SIGNIN) {
              strDesc += `(${(_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                error: Error()
              }), i18n) : i18n).t("shop.current")}：${num}/${this.currentCarInfo.num})`;
            }

            this.lbDesc.string = strDesc;
          }
        }

        refreshPageLabel() {
          this.lbPage.string = `${this.pageIndex + 1}/${this.maxPage + 1}`;
        }

        onBtnLeftClick() {
          const shopPageScript = this.currentPage.getComponent(_crd && shopPage === void 0 ? (_reportPossibleCrUseOfshopPage({
            error: Error()
          }), shopPage) : shopPage);

          if (this.pageIndex > 0) {
            this.pageIndex--;
          } else {
            this.pageIndex = this.maxPage;
          }

          this.refreshPageLabel();
          shopPageScript.setPage(this.pageIndex);
          shopPageScript.show();
        }

        onBtnRightClick() {
          const shopPageScript = this.currentPage.getComponent(_crd && shopPage === void 0 ? (_reportPossibleCrUseOfshopPage({
            error: Error()
          }), shopPage) : shopPage);

          if (this.pageIndex >= this.maxPage) {
            this.pageIndex = 0;
          } else {
            this.pageIndex++;
          }

          this.refreshPageLabel();
          shopPageScript.setPage(this.pageIndex);
          shopPageScript.show();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbGold", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeGet", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeGold", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeBuy", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeGo", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbDesc", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbPrice", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbGo", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeCarParent", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodePages", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "pfPage", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "spCarBlack", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lbPage", [_dec14], {
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
//# sourceMappingURL=8ab1d51a85f1cd2963d995c77ca7c0261f027a5e.js.map