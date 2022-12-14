System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Vec3, _decorator, Component, macro, car, follow, roadPoint, clientEvent, resourceUtil, poolManager, playerData, constant, localConfig, fightConstants, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, carManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOffightMap(extras) {
    _reporterNs.report("fightMap", "./fightMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcar(extras) {
    _reporterNs.report("car", "./car", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcustomerManager(extras) {
    _reporterNs.report("customerManager", "./customerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOffollow(extras) {
    _reporterNs.report("follow", "./follow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfroadPoint(extras) {
    _reporterNs.report("roadPoint", "./roadPoint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightConstants(extras) {
    _reporterNs.report("fightConstants", "./fightConstants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      macro = _cc.macro;
    }, function (_unresolved_2) {
      car = _unresolved_2.car;
    }, function (_unresolved_3) {
      follow = _unresolved_3.follow;
    }, function (_unresolved_4) {
      roadPoint = _unresolved_4.roadPoint;
    }, function (_unresolved_5) {
      clientEvent = _unresolved_5.clientEvent;
    }, function (_unresolved_6) {
      resourceUtil = _unresolved_6.resourceUtil;
    }, function (_unresolved_7) {
      poolManager = _unresolved_7.poolManager;
    }, function (_unresolved_8) {
      playerData = _unresolved_8.playerData;
    }, function (_unresolved_9) {
      constant = _unresolved_9.constant;
    }, function (_unresolved_10) {
      localConfig = _unresolved_10.localConfig;
    }, function (_unresolved_11) {
      fightConstants = _unresolved_11.fightConstants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0ab97H51jJALJr6aO9gzNGg", "carManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("carManager", carManager = (_dec = ccclass("carManager"), _dec2 = property({
        type: _crd && follow === void 0 ? (_reportPossibleCrUseOffollow({
          error: Error()
        }), follow) : follow
      }), _dec(_class = (_class2 = class carManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "followCamera", _descriptor, this);
        }

        start() {// Your initialization goes here.
        }

        onEnable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).on('showInvincible', this.showInvincible, this);
        }

        onDisable() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).off('showInvincible', this.showInvincible, this);
        }

        showInvincible() {
          if (this.mainCar) {
            this.mainCar.isInvincible = true;
          }
        }

        init(fightMap, customerManager) {
          this._fightMap = fightMap;
          this._customerManager = customerManager;
          this.creatMainCar();
        }

        creatMainCar() {
          let car = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.showCar ? (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.showCar : (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).INITIAL_CAR;
          let carInfo = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.queryByID('car', car.toString());
          let skin = carInfo ? carInfo.model : (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MIN_CAR_ID;
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getCar(skin, (err, pfCar) => {
            if (err) {
              console.error(err);
              return;
            }

            if (this.mainCar) {
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(this.mainCar.node);
            }

            let nodeCar = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(pfCar, this.node);
            this.mainCar = nodeCar.getComponent('car');
            this.mainCar.markMainCar(true);
            this.mainCar.setEntry(this._fightMap.path[0]);
            this.mainCar.manager = this._customerManager;
            this.mainCar.maxProgress = this._fightMap.levelProgressCnt;
            this.mainCar.setMoveOverListener(() => {});
            this.followCamera.followTarget = nodeCar;
            this.followCamera.showStart();
          }); // this.nodeTailLine = instantiate(this.pfTailLine);
          // this.nodeTailLine.parent = this.node;
          // this.nodeTailLine.active = false;
        } //???????????????ai??????


        preloadAICar(callback) {
          let arrPreload = [];

          for (let idx = 1; idx < this._fightMap.path.length; idx++) {
            let nodeRoadPoint = this._fightMap.path[idx];
            let point = nodeRoadPoint.getComponent(_crd && roadPoint === void 0 ? (_reportPossibleCrUseOfroadPoint({
              error: Error()
            }), roadPoint) : roadPoint);

            if (point.type !== (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
              error: Error()
            }), fightConstants) : fightConstants).ROAD_POINT_TYPE.AI_START) {
              return;
            }

            let arrCars = point.cars.split(',');

            for (let idx = 0; idx < arrCars.length; idx++) {
              if (arrPreload.indexOf(arrCars[idx]) === -1) {
                arrPreload.push(arrCars[idx]);
              }
            }
          }

          let cur = 0;
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getCarsBatch(arrPreload, arg => {
            //????????????????????????????????????2%
            cur++;

            if (cur <= 15) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent('updateLoading', 2);
            }
          }, () => {
            if (cur <= 15) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent('updateLoading', 30 - cur * 2);
            }

            callback && callback();
          });
        }

        startGenerateEnemy() {
          this.genAICar = this.genAICar.bind(this);

          for (let idx = 1; idx < this._fightMap.path.length; idx++) {
            let nodeRoadPoint = this._fightMap.path[idx];
            let point = nodeRoadPoint.getComponent(_crd && roadPoint === void 0 ? (_reportPossibleCrUseOfroadPoint({
              error: Error()
            }), roadPoint) : roadPoint);
            point.startGenerateCar(this.genAICar);
          }
        }

        stopGenerateEnemy() {
          for (let idx = 1; idx < this._fightMap.path.length; idx++) {
            let nodeRoadPoint = this._fightMap.path[idx];
            let point = nodeRoadPoint.getComponent(_crd && roadPoint === void 0 ? (_reportPossibleCrUseOfroadPoint({
              error: Error()
            }), roadPoint) : roadPoint);
            point.stopGenerateCar();
          }
        }

        genAICar(road, randCar) {
          //??????????????????
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getCar(randCar, (err, pfCar) => {
            if (err) {
              console.error(err);
              return;
            }

            let otherCar = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(pfCar, this.node);
            let car = otherCar.getComponent('car');
            car.setEntry(road.node);
            car.minSpeed = road.carSpeed;
            car.maxSpeed = road.carSpeed;
            car.startRunning();
            car.markMainCar(false);
            car.setMoveOverListener(car => {
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(car.node);
            });
          });
        }

        reset() {
          this.mainCar.setEntry(this._fightMap.path[0]);
          this.mainCar.maxProgress = this._fightMap.levelProgressCnt;
          this.followCamera.followTarget = this.mainCar.node;
          this.stopGenerateEnemy();
          this.recycleAllAICar();
        }
        /**
         *????????????????????????
         *
         * @memberof carManager
         */


        recycleAllAICar() {
          let arrCars = [];
          let children = this.node.children;
          children.forEach(nodeCar => {
            arrCars.push(nodeCar);
          }, this);
          arrCars.forEach(nodeCar => {
            let car = nodeCar.getComponent('car');

            if (car && !car.isMain) {
              //????????????
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(nodeCar);
            }
          });
        }
        /**
         *??????????????????????????????
         *
         * @memberof carManager
         */


        recycleLimitAICar() {
          let arrCars = [];
          let children = this.node.children;
          children.forEach(nodeCar => {
            arrCars.push(nodeCar);
          }, this);
          arrCars.forEach(nodeCar => {
            let car = nodeCar.getComponent('car');
            let distance = Vec3.distance(nodeCar.worldPosition, this.mainCar.node.worldPosition);

            if (car && !car.isMain && Math.abs(distance) <= 5) {
              //????????????
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(nodeCar);
            } else {
              car.isOver = false;
              car.startRunning();
            }
          });
        }
        /**
         * ???UI??????????????????????????????
         * @param isRunning
         */


        controlMainCar(isRunning) {
          if (isRunning) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent('showGuide', false);
            this.mainCar.startRunning();
          } else {
            this.mainCar.stopRunning();
          }
        }

        startGame() {
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent('showGuide', true);
          this.mainCar.startWithMinSpeed();
          this.startGenerateEnemy(); //???????????????????????????AI??????????????????

          this.schedule(this.checkCarIsCloser, 0.2, macro.REPEAT_FOREVER); //???0.2s????????????
        }

        gameOver() {
          this.followCamera.followTarget = null; //???????????????????????????????????????

          this.stopGenerateEnemy(); //???????????????????????????

          this.unschedule(this.checkCarIsCloser); //????????????????????????

          this.node.children.forEach(nodeCar => {
            let carScript = nodeCar.getComponent(_crd && car === void 0 ? (_reportPossibleCrUseOfcar({
              error: Error()
            }), car) : car);
            carScript.stopImmediately();
          });
        }

        changeCameraFollowRotation() {
          //??????????????????
          this.followCamera.isFollowRotation = !this.followCamera.isFollowRotation;
        }
        /**
         * ????????????????????????
         *
         * @memberof carManager
         */


        getCurrentProgress() {
          return {
            cur: this.mainCar.curProgress,
            isOver: !this.mainCar.hasCustomer
          };
        }

        revive() {
          this.recycleLimitAICar();
          this.mainCar.revive();
          this.followCamera.followTarget = this.mainCar.node;
          this.startGenerateEnemy();
        }

        checkCarIsCloser() {
          if (!this.mainCar.isCarMoving) {
            return; //???????????????????????????????????????
          }

          let nodeMainCar = this.mainCar.node;
          let posMainCar = nodeMainCar.getWorldPosition();
          this.node.children.forEach(nodeCar => {
            if (nodeCar !== nodeMainCar) {
              let posCar = nodeCar.getWorldPosition();
              let forward = nodeCar.forward;
              posCar.x -= forward.x;
              posCar.z -= forward.z;

              if (Math.abs(posCar.x - posMainCar.x) < 2 && Math.abs(posCar.z - posMainCar.z) < 2) {
                nodeCar.getComponent(_crd && car === void 0 ? (_reportPossibleCrUseOfcar({
                  error: Error()
                }), car) : car).tooting();
              }
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "followCamera", [_dec2], {
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
//# sourceMappingURL=e42e8999ee4ee40c2adef7dbe7db96b94d329fc9.js.map