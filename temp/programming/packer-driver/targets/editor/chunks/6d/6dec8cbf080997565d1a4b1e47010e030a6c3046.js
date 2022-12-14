System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Vec3, Node, Collider, RigidBody, instantiate, ParticleSystem, ERigidBodyType, fightConstants, clientEvent, audioManager, constant, resourceUtil, poolManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, TOOTING_COOL_TIME, car;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfroadPoint(extras) {
    _reporterNs.report("roadPoint", "./roadPoint", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightConstants(extras) {
    _reporterNs.report("fightConstants", "./fightConstants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcustomerManager(extras) {
    _reporterNs.report("customerManager", "./customerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../framework/poolManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Node = _cc.Node;
      Collider = _cc.Collider;
      RigidBody = _cc.RigidBody;
      instantiate = _cc.instantiate;
      ParticleSystem = _cc.ParticleSystem;
      ERigidBodyType = _cc.ERigidBodyType;
    }, function (_unresolved_2) {
      fightConstants = _unresolved_2.fightConstants;
    }, function (_unresolved_3) {
      clientEvent = _unresolved_3.clientEvent;
    }, function (_unresolved_4) {
      audioManager = _unresolved_4.audioManager;
    }, function (_unresolved_5) {
      constant = _unresolved_5.constant;
    }, function (_unresolved_6) {
      resourceUtil = _unresolved_6.resourceUtil;
    }, function (_unresolved_7) {
      poolManager = _unresolved_7.poolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6d4fVD3pxJ7Y1Khf8fRUoa", "car", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      TOOTING_COOL_TIME = 5; //5s?????????????????????

      _export("car", car = (_dec = ccclass("car"), _dec2 = property({
        displayName: '??????????????????'
      }), _dec3 = property({
        displayName: '??????????????????'
      }), _dec4 = property(Node), _dec(_class = (_class2 = class car extends Component {
        set isMoving(value) {
          this._isMoving = value;
          this.updateBackLight();
        }

        get isMoving() {
          return this._isMoving;
        }

        //????????????
        //??????????????????
        set isHosting(value) {
          this._isHosting = value;
          this.updateBackLight();
        }

        get isHosting() {
          return this._isHosting;
        }

        set isInvincible(isShow) {
          this._isInvincible = isShow;

          if (isShow) {
            if (this.nodeInvincible) {
              //?????????????????????
              this.nodeInvincible.active = true;
              return;
            } else {
              (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
                error: Error()
              }), resourceUtil) : resourceUtil).getEffect('shield', (err, prefab) => {
                if (err) {
                  console.error(err);
                  return;
                }

                this.nodeInvincible = instantiate(prefab);
                this.nodeInvincible.parent = this.node;
              });
            }
          } else {
            if (this.nodeInvincible) {
              this.nodeInvincible.destroy();
              this.nodeInvincible = null;
            }
          }
        }

        get isInvincible() {
          return this._isInvincible;
        }

        constructor() {
          super();
          this._isMoving = false;

          _initializerDefineProperty(this, "maxSpeed", _descriptor, this);

          _initializerDefineProperty(this, "minSpeed", _descriptor2, this);

          _initializerDefineProperty(this, "nodeGas", _descriptor3, this);

          this._minSpeed = -1;
          this._maxSpeed = -1;
          this.manager = null;
          this.isMain = false;
          this.currentSpeed = 0;
          this.accelerate = 2;
          this.originRotation = 0;
          this.targetRotation = 0;
          this.curRoadPoint = null;
          this.circleCenterPoint = new Vec3();
          this.quarter = 0;
          this._nodeGasInst = null;
          this.entry = null;
          this.forward = new Vec3(0, 0, -1);
          this.posTarget = new Vec3();
          this.posSrc = new Vec3();
          this._callback = null;
          this.isOver = false;
          this.curProgress = 0;
          this.maxProgress = 0;
          this.hasCustomer = false;
          this.lastPos = new Vec3();
          this.lastRotation = new Vec3();
          this.isBraking = false;
          this.arrTyres = [];
          this.curTyreRotation = 0;
          this.nodeCarBackLight = null;
          this.tootingCoolTime = 0;
          this.isCarMoving = false;
          this.nodeInvincible = null;
          this._isHosting = false;
          this._isInvincible = false;
          this.invincibleRotation = 0;
        }

        start() {
          // Your initialization goes here.
          this._minSpeed = this.minSpeed;
          this._maxSpeed = this.maxSpeed;
          let tyre1 = this.node.getChildByPath('RootNode/tyre1');

          if (tyre1) {
            this.arrTyres = [tyre1, this.node.getChildByPath('RootNode/tyre2'), this.node.getChildByPath('RootNode/tyre3'), this.node.getChildByPath('RootNode/tyre4')];
            this.nodeCarBackLight = this.node.getChildByPath('RootNode/light1');
          } //??????????????????,?????????????????????????????????


          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getEffect('gas', (err, prefab) => {
            if (err) {
              return;
            }

            const gas = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(prefab, this.nodeGas);
            this._nodeGasInst = gas.getComponent(ParticleSystem);
            gas.setPosition(new Vec3(0, 0, 0));
          });
        }
        /**
         * ???????????????
         */


        markMainCar(isMain) {
          this.isMain = isMain;
          let rigidBody = this.node.getComponent(RigidBody);
          let collider = this.node.getComponent(Collider);
          collider.off("onCollisionEnter", this.onCollisionEnter, this);

          if (isMain) {
            rigidBody.setGroup((_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
              error: Error()
            }), fightConstants) : fightConstants).CAR_GROUP.MAIN_CAR);
            rigidBody.setMask((_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
              error: Error()
            }), fightConstants) : fightConstants).CAR_GROUP.OTHER_CAR);
            rigidBody.type = ERigidBodyType.KINEMATIC;
            collider.on("onCollisionEnter", this.onCollisionEnter, this);
          } else {
            rigidBody.setGroup((_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
              error: Error()
            }), fightConstants) : fightConstants).CAR_GROUP.OTHER_CAR);
            rigidBody.setMask(-1);
            rigidBody.type = ERigidBodyType.DYNAMIC;
          }
        }

        setEntry(entry) {
          this.entry = entry;
          this.reset();
        }

        onCollisionEnter(event) {
          if (!this.isMain) {
            return;
          }

          if (event.otherCollider.node.name === 'ground') {
            return;
          }

          let nodeEnemy = event.otherCollider.node;

          if (event.otherCollider.node === this.node) {
            nodeEnemy = event.selfCollider.node;
          }

          let car = nodeEnemy.getComponent('car');

          if (!car.isOver) {
            car.isOver = true; //???????????????????????????

            let enemyRigidBody = nodeEnemy.getComponent(RigidBody);
            enemyRigidBody.useGravity = true;

            if (!this.isInvincible) {
              enemyRigidBody.applyForce(new Vec3(0, 1500, -3000), new Vec3(0, 0.5, 0));
            } else {
              enemyRigidBody.applyForce(new Vec3(0, 10000, -3000), new Vec3(0, 0.5, 0));
            }
          }

          if (this.isOver) {
            return;
          }

          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).AUDIO_SOUND.CRASH);
          let rigidBody = this.node.getComponent(RigidBody);

          if (this.isInvincible) {
            this.lastPos = this.node.worldPosition;
            this.lastRotation = this.node.eulerAngles;
            rigidBody.enabled = false; //?????????????????????????????????0

            this.scheduleOnce(() => {
              this.isInvincible = false;
              rigidBody.enabled = true; //???????????????????????????AI????????????bug

              this.revive();
              this.currentSpeed = this._minSpeed;
            }, 0.1);
            this.scheduleOnce(() => {
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(nodeEnemy);
            }, 0.3);
            return;
          } //????????????????????????????????????????????????????????????


          this.lastPos = this.node.worldPosition;
          this.lastRotation = this.node.eulerAngles;
          this.isOver = true; // rigidBody.useGravity = true;

          rigidBody.setGroup((_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).CAR_GROUP.MAIN_CAR);
          rigidBody.setMask((_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).CAR_GROUP.OTHER_CAR | (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).CAR_GROUP.NORMAL);
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent('gameOver', false);
        }

        updateBackLight() {
          if (this.nodeCarBackLight) {
            this.nodeCarBackLight.active = !this.isMoving || this.isHosting;
          }
        }

        startRunning() {
          if (this.isOver) {
            return;
          }

          this.isMoving = true;
          this.accelerate = 0.4;

          if (this._nodeGasInst) {
            this._nodeGasInst.play();
          }

          if (this.isBraking) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent('endBraking');
            this.isBraking = false;
          }
        }

        startWithMinSpeed() {
          this.currentSpeed = this.minSpeed;
          this.stopRunning(true);

          if (this._nodeGasInst) {
            this._nodeGasInst.play();
          } // if (this.isMain) {
          //     this.isInvincible = true;
          // }

        }

        stopRunning(isInit) {
          if (this.isOver) {
            return;
          }

          this.isMoving = false;
          this.accelerate = -0.15;

          if (!this.isBraking && !isInit) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent('startBraking');
            this.isBraking = true;
          }
        }

        stopImmediately() {
          this.isMoving = false;
          this.currentSpeed = 0;
        }

        setMoveOverListener(callback) {
          this._callback = callback;
        }

        resetPhysical() {
          this.isOver = false;

          if (this.isMain) {
            this.markMainCar(true);
          } //?????????????????????????????????


          let rigidBody = this.node.getComponent(RigidBody);
          rigidBody.useGravity = false; //?????????????????????????????????0

          rigidBody.sleep();
          rigidBody.wakeUp();
        }

        revive() {
          //??????
          this.resetPhysical();
          console.log("revive pos ", this.lastPos);
          let lastPos = new Vec3(this.lastPos.x, 0, this.lastPos.z);
          this.node.setWorldPosition(lastPos);
          this.node.eulerAngles = this.lastRotation;
          this.isMoving = false;
          this.currentSpeed = 0;
        }

        reset() {
          //??????????????????????????????????????????????????????????????????????????????,????????????????????????0
          this.resetPhysical();

          if (this.isMain) {
            this.curProgress = 0;
            this.hasCustomer = false;

            if (this._nodeGasInst) {
              this._nodeGasInst.stop();
            }

            this.isInvincible = false;
          }

          this.tootingCoolTime = 0;
          this.curRoadPoint = this.entry.getComponent('roadPoint');
          this.posSrc.set(this.entry.worldPosition);
          this.posTarget.set(this.curRoadPoint.next.worldPosition); //???????????????

          this.node.setWorldPosition(this.entry.worldPosition); //?????????????????????

          if (this.posTarget.z !== this.posSrc.z) {
            if (this.posTarget.z < this.posSrc.z) {
              //??????
              this.node.eulerAngles = new Vec3(0, 360, 0);
            } else {
              //??????
              this.node.eulerAngles = new Vec3(0, 180, 0);
            }
          } else {
            if (this.posTarget.x > this.posSrc.x) {
              //??????
              this.node.eulerAngles = new Vec3(0, 270, 0);
            } else {
              //??????
              this.node.eulerAngles = new Vec3(0, 90, 0);
            }
          }

          this.originRotation = this.node.eulerAngles.y;
          this.targetRotation = this.originRotation;
          this.isMoving = false;
          this.isHosting = false;
          this.currentSpeed = 0;

          if (this._minSpeed > 0) {
            this.minSpeed = this._minSpeed;
            this.maxSpeed = this._maxSpeed;
          }
        }
        /**
         * ??????
         */


        greeting() {
          this.isHosting = true;
          this.curProgress++;
          this.hasCustomer = true;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent('greetingCustomer'); //?????????????????????

          this.manager.greeting(this.node.worldPosition, this.curRoadPoint.direction, () => {
            this.isMoving = false;
            this.currentSpeed = 0;
            this.isHosting = false;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent('showGuide', true);
          });
        }
        /**
         * ??????
         */


        takeCustomer() {
          this.isHosting = true;
          this.hasCustomer = false;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent('takeCustomer'); //??????

          this.manager.takeCustomer(this.node.worldPosition, this.curRoadPoint.direction, this.curProgress === this.maxProgress, () => {
            this.isMoving = false;
            this.currentSpeed = 0;
            this.isHosting = false;
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent('showGuide', true);
          });
        }

        arrivalPoint() {
          this.node.setWorldPosition(this.posTarget);

          if (this.curRoadPoint.moveType === (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).ROAD_MOVE_TYPE.BEND) {
            //???????????????????????????????????????????????????
            this.node.eulerAngles = new Vec3(0, this.targetRotation, 0);
          } //???????????????????????????


          this.posSrc.set(this.posTarget);
          this.posTarget.set(Vec3.ZERO);

          if (this.curRoadPoint.next) {
            this.curRoadPoint = this.curRoadPoint.next.getComponent('roadPoint'); //todo ????????????????????????????????????????????????

            if (this.isMain) {
              if (this.curRoadPoint.type === (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
                error: Error()
              }), fightConstants) : fightConstants).ROAD_POINT_TYPE.GREETING) {
                this.greeting();
              } else if (this.curRoadPoint.type === (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
                error: Error()
              }), fightConstants) : fightConstants).ROAD_POINT_TYPE.PLATFORM) {
                this.takeCustomer();
              } else if (this.curRoadPoint.type === (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
                error: Error()
              }), fightConstants) : fightConstants).ROAD_POINT_TYPE.END) {
                //?????????????????????
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent('gameOver', true);
                this.moveAfterFinished();
              }
            }

            if (this.curRoadPoint.next) {
              this.posTarget.set(this.curRoadPoint.next.worldPosition);
            } else {
              //?????????????????????????????????????????????
              this._callback && this._callback(this); //??????????????????
            }

            this.originRotation = this.node.eulerAngles.y;
            this.targetRotation = this.originRotation;

            if (this.curRoadPoint.moveType === (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
              error: Error()
            }), fightConstants) : fightConstants).ROAD_MOVE_TYPE.BEND) {
              //???????????????
              //???????????????????????????
              if (this.curRoadPoint.clockwise) {
                //????????? -90
                this.originRotation = this.originRotation <= 0 ? 360 + this.originRotation : this.originRotation;
                this.targetRotation = this.originRotation - 90; //???????????????

                if (this.posTarget.x > this.posSrc.x && this.posTarget.z < this.posSrc.z || this.posTarget.x < this.posSrc.x && this.posTarget.z > this.posSrc.z) {
                  //???????????????????????????
                  this.circleCenterPoint = new Vec3(this.posTarget.x, 0, this.posSrc.z);
                } else {
                  this.circleCenterPoint = new Vec3(this.posSrc.x, 0, this.posTarget.z);
                }

                let r = Vec3.subtract(new Vec3(), this.circleCenterPoint, this.posSrc).length(); // this.circleCenterPoint.sub(this.posSrc).mag();

                this.quarter = 90 / (Math.PI * r / 2); //?????????1????????????????????????
              } else {
                this.originRotation = this.originRotation >= 360 ? this.originRotation - 360 : this.originRotation;
                this.targetRotation = this.originRotation + 90; //???????????????

                if (this.posTarget.x > this.posSrc.x && this.posTarget.z < this.posSrc.z || this.posTarget.x < this.posSrc.x && this.posTarget.z > this.posSrc.z) {
                  //???????????????????????????
                  this.circleCenterPoint = new Vec3(this.posSrc.x, 0, this.posTarget.z);
                } else {
                  this.circleCenterPoint = new Vec3(this.posTarget.x, 0, this.posSrc.z);
                }

                let r = Vec3.subtract(new Vec3(), this.circleCenterPoint, this.posSrc).length();
                this.quarter = 90 / (Math.PI * r / 2); //?????????1????????????????????????
              } //????????????????????????????????????


              this.node.eulerAngles = new Vec3(0, this.originRotation, 0); // this.circleCenterPoint = Vec3(this.posTarget.x,
            }
          } else {
            this.curRoadPoint = null;
            this._callback && this._callback(this); //??????????????????
          }
        }

        update(deltaTime) {
          //??????????????????
          if (this.nodeInvincible) {
            this.invincibleRotation += deltaTime * 200; //??????????????????

            if (this.invincibleRotation > 360) {
              this.invincibleRotation -= 360;
            }

            this.nodeInvincible.eulerAngles = new Vec3(this.invincibleRotation, 0, 0);
          } //??????


          if (this.tootingCoolTime > 0) {
            this.tootingCoolTime = this.tootingCoolTime > deltaTime ? this.tootingCoolTime - deltaTime : 0;
          } //??????????????????


          if (!this.isMoving && this.currentSpeed < 0.01 || this.posTarget.equals(Vec3.ZERO) || this.isHosting || this.isOver) {
            this.isCarMoving = false;
            return;
          }

          this.isCarMoving = true;
          this.currentSpeed += this.accelerate * deltaTime;
          this.currentSpeed = this.currentSpeed > this.maxSpeed ? this.maxSpeed : this.currentSpeed;

          if (this.currentSpeed < this.minSpeed) {
            this.currentSpeed = this.minSpeed;

            if (this.isBraking) {
              (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                error: Error()
              }), clientEvent) : clientEvent).dispatchEvent('endBraking');
              this.isBraking = false;
            }
          }

          if (this.arrTyres.length > 0) {
            this.curTyreRotation -= this.currentSpeed * 200;

            if (this.curTyreRotation < -360) {
              this.curTyreRotation += 360;
            }

            let rotation = new Vec3(this.curTyreRotation, 0);

            for (let idx = 0; idx < this.arrTyres.length; idx++) {
              let tyre = this.arrTyres[idx];
              tyre.eulerAngles = rotation;
            }
          }

          switch (this.curRoadPoint.moveType) {
            case (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
              error: Error()
            }), fightConstants) : fightConstants).ROAD_MOVE_TYPE.LINE:
              let offset = new Vec3();
              Vec3.subtract(offset, this.posTarget, this.node.worldPosition);
              offset.normalize();
              Vec3.multiplyScalar(offset, offset, this.currentSpeed);
              let pos = this.node.worldPosition;
              offset.add(pos);

              if (this.posTarget.z !== this.posSrc.z) {
                if (this.posTarget.z < this.posSrc.z) {
                  //??????
                  this.node.eulerAngles = new Vec3(0, 360, 0);

                  if (offset.z < this.posTarget.z) {
                    offset.z = this.posTarget.z;
                  }
                } else {
                  //??????
                  this.node.eulerAngles = new Vec3(0, 180, 0);

                  if (offset.z > this.posTarget.z) {
                    offset.z = this.posTarget.z;
                  }
                }
              } else {
                if (this.posTarget.x > this.posSrc.x) {
                  //??????
                  this.node.eulerAngles = new Vec3(0, 270, 0);

                  if (offset.x > this.posTarget.x) {
                    offset.x = this.posTarget.x;
                  }
                } else {
                  //??????
                  this.node.eulerAngles = new Vec3(0, 90, 0);

                  if (offset.x < this.posTarget.x) {
                    offset.x = this.posTarget.x;
                  }
                }
              } // this.node.eulerAngles = offset;


              this.node.setWorldPosition(offset);
              break;

            case (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
              error: Error()
            }), fightConstants) : fightConstants).ROAD_MOVE_TYPE.BEND:
              //??????????????????
              let offsetRotation = this.targetRotation - this.originRotation;
              let curRotation = this.node.eulerAngles.y < 0 ? 360 + this.node.eulerAngles.y : this.node.eulerAngles.y;

              if (this.node.eulerAngles.y > 360) {
                curRotation = this.node.eulerAngles.y - 360;
              }

              let percent = Math.abs((curRotation - this.originRotation) / offsetRotation);
              let nextRotation = offsetRotation * percent + this.currentSpeed * this.quarter * (this.targetRotation > this.originRotation ? 1 : -1);

              if (Math.abs(offsetRotation) < Math.abs(nextRotation)) {
                nextRotation = offsetRotation;
              }

              let target = this.originRotation + nextRotation;
              let posCur = Vec3.rotateY(new Vec3(), this.posSrc, this.circleCenterPoint, nextRotation * Math.PI / 180);
              this.node.setWorldPosition(posCur);
              this.node.eulerAngles = new Vec3(0, target, 0);
              break;
          }

          if (Vec3.subtract(new Vec3(), this.posTarget, this.node.worldPosition).lengthSqr() < 0.001) {
            //???????????????
            this.arrivalPoint();
          }
        }

        moveAfterFinished() {
          this.isMoving = true;
          this.minSpeed = 0.2;
          this.maxSpeed = 0.2;
          this.startRunning();
        }

        tooting() {
          if (this.tootingCoolTime > 0) {
            return;
          }

          this.tootingCoolTime = TOOTING_COOL_TIME; //?????????????????????
          //?????????????????????

          let audio = Math.floor(Math.random() * 2) === 1 ? (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).AUDIO_SOUND.TOOTING1 : (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).AUDIO_SOUND.TOOTING2;
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).instance.playSound(audio);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maxSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "minSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeGas", [_dec4], {
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
//# sourceMappingURL=6dec8cbf080997565d1a4b1e47010e030a6c3046.js.map