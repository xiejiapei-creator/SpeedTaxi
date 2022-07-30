System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Node, Collider, fightMap, customerManager, carManager, clientEvent, fightConstants, resourceUtil, uiManager, playerData, fightCanvas, effectManager, i18n, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, fightManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOffightMap(extras) {
    _reporterNs.report("fightMap", "./fightMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcustomerManager(extras) {
    _reporterNs.report("customerManager", "./customerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcarManager(extras) {
    _reporterNs.report("carManager", "./carManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightConstants(extras) {
    _reporterNs.report("fightConstants", "./fightConstants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuiManager(extras) {
    _reporterNs.report("uiManager", "../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightCanvas(extras) {
    _reporterNs.report("fightCanvas", "../ui/fight/fightCanvas", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeffectManager(extras) {
    _reporterNs.report("effectManager", "./effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfi18n(extras) {
    _reporterNs.report("i18n", "../i18nMaster/runtime-scripts/LanguageData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Collider = _cc.Collider;
    }, function (_unresolved_2) {
      fightMap = _unresolved_2.fightMap;
    }, function (_unresolved_3) {
      customerManager = _unresolved_3.customerManager;
    }, function (_unresolved_4) {
      carManager = _unresolved_4.carManager;
    }, function (_unresolved_5) {
      clientEvent = _unresolved_5.clientEvent;
    }, function (_unresolved_6) {
      fightConstants = _unresolved_6.fightConstants;
    }, function (_unresolved_7) {
      resourceUtil = _unresolved_7.resourceUtil;
    }, function (_unresolved_8) {
      uiManager = _unresolved_8.uiManager;
    }, function (_unresolved_9) {
      playerData = _unresolved_9.playerData;
    }, function (_unresolved_10) {
      fightCanvas = _unresolved_10.fightCanvas;
    }, function (_unresolved_11) {
      effectManager = _unresolved_11.effectManager;
    }, function (_unresolved_12) {
      i18n = _unresolved_12.i18n;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f3d36qkNslPB4TIGcZlp8vd", "fightManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("fightManager", fightManager = (_dec = ccclass("fightManager"), _dec2 = property(_crd && fightCanvas === void 0 ? (_reportPossibleCrUseOffightCanvas({
        error: Error()
      }), fightCanvas) : fightCanvas), _dec3 = property({
        type: _crd && fightMap === void 0 ? (_reportPossibleCrUseOffightMap({
          error: Error()
        }), fightMap) : fightMap
      }), _dec4 = property({
        type: _crd && customerManager === void 0 ? (_reportPossibleCrUseOfcustomerManager({
          error: Error()
        }), customerManager) : customerManager
      }), _dec5 = property({
        type: _crd && carManager === void 0 ? (_reportPossibleCrUseOfcarManager({
          error: Error()
        }), carManager) : carManager
      }), _dec6 = property({
        type: _crd && effectManager === void 0 ? (_reportPossibleCrUseOfeffectManager({
          error: Error()
        }), effectManager) : effectManager
      }), _dec7 = property({
        type: Node,
        displayName: '地面'
      }), _dec(_class = (_class2 = class fightManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "fightLoading", _descriptor, this);

          _initializerDefineProperty(this, "mapManager", _descriptor2, this);

          _initializerDefineProperty(this, "customerManager", _descriptor3, this);

          _initializerDefineProperty(this, "carManager", _descriptor4, this);

          _initializerDefineProperty(this, "effectManager", _descriptor5, this);

          _initializerDefineProperty(this, "nodeGround", _descriptor6, this);

          this.isStart = false;
          this.isOver = false;
          this.isFinishedLevel = false;
          this.money = 0;
          this.curLevel = 0;
          this.hasRevive = false;
        }

        start() {
          // Your initialization goes here.
          this.initGround();
          this.loadMap(() => {
            this.initCar();
            this.loadCar();
          }); // this.initCar();
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('startGame', this.startGame, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('takeCustomer', this.onTakeCustomer, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('gameOver', this.gameOver, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('newLevel', this.newLevel, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('updateCar', this.updateMainCar, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('revive', this.revive, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('startGame', this.startGame, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('takeCustomer', this.onTakeCustomer, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('gameOver', this.gameOver, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('newLevel', this.newLevel, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('updateCar', this.updateMainCar, this);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('revive', this.revive, this);
        }

        initGround() {
          let collider = this.nodeGround.getComponent(Collider);
          collider.setGroup((_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).CAR_GROUP.NORMAL);
          collider.setMask(-1);
        }

        loadMap(cb) {
          //地图载入
          let level = 1;

          if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo) {
            console.log("###playerData.instance.playerInfo.realLevel;", (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.playerInfo.realLevel);

            if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.playerInfo.passCheckPoint) {
              level = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
                error: Error()
              }), playerData) : playerData).instance.playerInfo.realLevel || level;
            } else {
              level = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
                error: Error()
              }), playerData) : playerData).instance.playerInfo.level || level;
            }

            console.log("###level", level);
          }

          this.curLevel = level; // let level = 3;
          // level = 3;

          console.log(`load level ${this.curLevel}`);
          let mapId = this.curLevel > 100 ? this.curLevel : this.curLevel + 100;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent('updateLoading', 4, (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).t('fightManager.loadingMap'));
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getMap(mapId, (err, res) => {
            if (err) {
              console.error(err);
              return;
            }

            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent('updateLoading', 10, (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
              error: Error()
            }), i18n) : i18n).t('fightManager.buildingCity'));
            this.mapManager.buildMap(res, () => {}, () => {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent('updateLoading', 6, (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                error: Error()
              }), i18n) : i18n).t('fightManager.cityLoadOver'));
              cb && cb();
            });
          });
        }

        initCar() {
          this.carManager.init(this.mapManager, this.customerManager);
        }

        reset() {
          this.carManager.reset();
          this.customerManager.reset();
          this.effectManager.reset();
          this.isStart = false;
          this.isOver = false;
          this.isFinishedLevel = false;
          this.money = 0;
          this.hasRevive = false;
          this.loadCar();
        }

        loadCar() {
          //预加载使用的汽车,加载完毕后，关闭界面
          this.carManager.preloadAICar(() => {
            this.fightLoading.finishLoading(); //等进度条加载完后展示主界面

            this.showMainUI();
          });
        }

        startGame() {
          if (this.isStart) {
            return;
          }

          this.isStart = true;
          this.carManager.startGame();
          this.showFightUI();
        }

        gameOver(isFinished) {
          if (this.isOver) {
            return;
          }

          this.isFinishedLevel = isFinished;
          this.isOver = true;
          this.carManager.gameOver();
          this.showBalanceUI();
        }

        onTakeCustomer() {
          //完成乘客接送，这时候要计算加到多少钱
          //公式 （30+关卡数/2）+ 10  取整
          let rand = Math.floor(30 + this.curLevel / 2 + Math.floor(Math.random() * 10));
          this.money += rand;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent('makeMoney', rand); //显示获得金币的特效

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getEffect('coin', (err, prefab) => {
            if (err) {
              console.error(err);
            }

            let node = instantiate(prefab);
            node.parent = this.node;

            if (this.carManager.mainCar) {
              node.setWorldPosition(this.carManager.mainCar.node.getWorldPosition());
            }

            this.scheduleOnce(() => {
              node.destroy();
            }, 2);
          });
        }

        showMainUI() {
          //一开始加载主界面
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showDialog('main/mainUI');
        }

        showFightUI() {
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.hideDialog('main/mainUI');
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showDialog('fight/fightUI', [this]); //将自身当作参数传入
        }

        showBalanceUI() {
          //level: number, curProgress: number, isTakeOver: boolean,  maxProgress: number, money: number, isFinishLevel:boolean
          let objProgress = this.carManager.getCurrentProgress();
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.showDialog('fight/balance', [(_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.level, objProgress.cur, objProgress.isOver, this.mapManager.levelProgressCnt, this.money, this.isFinishedLevel]);
        }
        /**
         * 重置关卡
         *
         * @param {boolean} isNewLevel 是否为新关卡
         * @memberof fightManager
         */


        newLevel(isNewLevel) {
          //重置关卡
          this.fightLoading.loadNewLevel();
          (_crd && uiManager === void 0 ? (_reportPossibleCrUseOfuiManager({
            error: Error()
          }), uiManager) : uiManager).instance.hideDialog('fight/fightUI');
          this.hasRevive = false;

          if (isNewLevel) {
            //要将原有地图移除，并引入新地图
            this.mapManager.recycle();
            this.loadMap(() => {
              //地图处理完毕，后续处理
              this.reset();
            });
          } else {
            this.reset();
          }
        }

        updateMainCar() {
          this.carManager.creatMainCar();
        }

        revive() {
          this.carManager.revive();
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fightLoading", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mapManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "customerManager", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "carManager", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "effectManager", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeGround", [_dec7], {
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
//# sourceMappingURL=2db52431ef9fc7fe2b57b5291ee7b51db7006037.js.map