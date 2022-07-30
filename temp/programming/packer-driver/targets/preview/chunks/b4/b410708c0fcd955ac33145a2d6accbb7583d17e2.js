System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Animation, Vec3, isValid, clientEvent, fightConstants, audioManager, constant, resourceUtil, poolManager, _dec, _class, _class2, _descriptor, _crd, ccclass, property, customerManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightConstants(extras) {
    _reporterNs.report("fightConstants", "./fightConstants", _context.meta, extras);
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
      Animation = _cc.Animation;
      Vec3 = _cc.Vec3;
      isValid = _cc.isValid;
    }, function (_unresolved_2) {
      clientEvent = _unresolved_2.clientEvent;
    }, function (_unresolved_3) {
      fightConstants = _unresolved_3.fightConstants;
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

      _cclegacy._RF.push({}, "586a8tdaBhPQprl2rcvzztA", "customerManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("customerManager", customerManager = (_dec = ccclass("customerManager"), _dec(_class = (_class2 = class customerManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "moveSpeed", _descriptor, this);

          this.nodeCustomer = null;
          this._targetPos = null;
          this._callback = undefined;
          this._offset = null;
          this.customerId = -1;
          this.retryTimes = 0;
        }

        start() {// Your initialization goes here.
        }
        /**
         * 触发新订单
         *
         * @memberof customerManager
         */


        newOrder() {
          //随机个乘客给他
          this.customerId = Math.floor(Math.random() * (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).CUSTOMER_MAX_CNT) + 1;
          (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
            error: Error()
          }), clientEvent) : clientEvent).dispatchEvent('showTalk', this.customerId, (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).CUSTOMER_TALK_TIME.NEW_ORDER);
        }
        /**
         * 接客
         * @param {Vec3} carWorldPos 车辆当前位置
         * @param direction 乘客的方向
         * @param callback 乘客上车后的回调函数
         */


        greeting(carWorldPos, direction, callback) {
          if (this.customerId === -1) {
            //还没有产生过乘客
            //随机个乘客给他
            this.customerId = Math.floor(Math.random() * (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).CUSTOMER_MAX_CNT) + 1;
          } //使用订单时产生的乘客


          if (this.nodeCustomer) {
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(this.nodeCustomer);
            this.nodeCustomer = null;
          }

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getCustomer(this.customerId.toString(), (err, prefab) => {
            if (err) {
              console.error(err); //尝试重新加载一次

              if (this.retryTimes < 3) {
                this.greeting(carWorldPos, direction, callback);
              }

              return;
            }

            this.retryTimes = 0;
            this.nodeCustomer = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(prefab, this.node);
            this.nodeCustomer.active = true; // direction = new Vec3(direction.x, direction.y, direction.z);

            var tmpVec3 = new Vec3();
            Vec3.multiplyScalar(tmpVec3, direction, 1.3);
            Vec3.add(tmpVec3, carWorldPos, tmpVec3);
            var customerPos = tmpVec3.clone();
            Vec3.multiplyScalar(tmpVec3, direction, 0.25);
            Vec3.add(tmpVec3, carWorldPos, tmpVec3);
            var targetPos = tmpVec3.clone();
            this.nodeCustomer.setWorldPosition(customerPos);

            if (direction.x !== 0) {
              if (direction.x > 0) {
                this.nodeCustomer.eulerAngles = new Vec3(0, 270, 0);
              } else {
                this.nodeCustomer.eulerAngles = new Vec3(0, 90, 0);
              }
            } else {
              if (direction.z > 0) {
                this.nodeCustomer.eulerAngles = new Vec3(0, 180, 0);
              } else {
                this.nodeCustomer.eulerAngles = new Vec3(0, 0, 0);
              }
            }

            (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).AUDIO_SOUND.NEW_ORDER);
            this.customerMove(targetPos, () => {
              (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
                error: Error()
              }), audioManager) : audioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).AUDIO_SOUND.IN_CAR); //接完客后

              callback && callback(); //触发乘客问候

              this.scheduleOnce(() => {
                (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
                  error: Error()
                }), clientEvent) : clientEvent).dispatchEvent('showTalk', this.customerId, (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
                  error: Error()
                }), fightConstants) : fightConstants).CUSTOMER_TALK_TIME.INTO_THE_CAR);
              }, 1);
            });
          });
        }
        /**
         * 送客
         * @param carWorldPos 车辆当前位置
         * @param direction 乘客前往的方向
         * @param isLastCustomer 是否最后一位乘客
         * @param callback 乘客上车后的回调函数
         */


        takeCustomer(carWorldPos, direction, isLastCustomer, callback) {
          if (!this.nodeCustomer) {
            //没有顾客可能有异常直接过
            if (callback) {
              callback();
            }

            return;
          }

          direction = new Vec3(direction.x, direction.y, direction.z);
          var tmpVec3 = new Vec3();
          Vec3.multiplyScalar(tmpVec3, direction, 0.25);
          Vec3.add(tmpVec3, carWorldPos, tmpVec3);
          var posCur = tmpVec3.clone();
          this.nodeCustomer.active = true;
          this.nodeCustomer.setWorldPosition(posCur);

          if (direction.x !== 0) {
            if (direction.x > 0) {
              this.nodeCustomer.eulerAngles = new Vec3(0, 90, 0);
            } else {
              this.nodeCustomer.eulerAngles = new Vec3(0, 270, 0);
            }
          } else {
            if (direction.z > 0) {
              this.nodeCustomer.eulerAngles = new Vec3(0, 0, 0);
            } else {
              this.nodeCustomer.eulerAngles = new Vec3(0, 180, 0);
            }
          }

          Vec3.multiplyScalar(tmpVec3, direction, 1.3);
          Vec3.add(tmpVec3, carWorldPos, tmpVec3);
          var targetPos = tmpVec3.clone();
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).instance.playSound((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).AUDIO_SOUND.GET_MONEY);
          this.customerMove(targetPos, () => {
            //送完客后
            if (callback) {
              callback();
            } //2秒后触发新订单
            //需要检测是否已经结束


            if (!isLastCustomer) {
              //触发新订单
              this.scheduleOnce(() => {
                this.newOrder();
              }, 2);
            }
          });
        }

        customerMove(targetPos, callback) {
          this._targetPos = targetPos;
          this._callback = callback;
          var ani = this.nodeCustomer.getComponent(Animation);
          ani.play('walk');
          this._offset = Vec3.subtract(new Vec3(), this._targetPos, this.nodeCustomer.worldPosition);

          this._offset.multiplyScalar(this.moveSpeed);
        }

        update(deltaTime) {
          // Your update function goes here.
          if (this._targetPos && this.nodeCustomer) {
            var posWorld = this.nodeCustomer.getWorldPosition();
            var offset = new Vec3();
            Vec3.multiplyScalar(offset, this._offset, deltaTime);
            posWorld.add(offset);

            if (Vec3.subtract(offset, posWorld, this._targetPos).lengthSqr() < 0.01) {
              //到达目标
              this.onMoveOver();
            } else {
              this.nodeCustomer.setWorldPosition(posWorld);
            }
          }
        }

        onMoveOver() {
          this.nodeCustomer.setWorldPosition(this._targetPos);
          this.nodeCustomer.active = false;
          this._targetPos = null;
          this._callback && this._callback();
        }

        reset() {
          if (this.nodeCustomer && isValid(this.nodeCustomer)) {
            var ani = this.nodeCustomer.getComponent(Animation); // ani.stop();

            ani.getState('walk').stop();
            this.nodeCustomer.destroy();
            this.nodeCustomer = null;
          }

          this.customerId = -1;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b410708c0fcd955ac33145a2d6accbb7583d17e2.js.map