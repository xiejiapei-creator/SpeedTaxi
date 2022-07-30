System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Animation, SpriteFrame, find, Vec3, clientEvent, flyRewardItem, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, MAX_REWARD_COUNT, flyReward;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfflyRewardItem(extras) {
    _reporterNs.report("flyRewardItem", "./flyRewardItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Animation = _cc.Animation;
      SpriteFrame = _cc.SpriteFrame;
      find = _cc.find;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      clientEvent = _unresolved_2.clientEvent;
    }, function (_unresolved_3) {
      flyRewardItem = _unresolved_3.flyRewardItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d14d4EewSBFtIn6B/rRUvjM", "flyReward", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      MAX_REWARD_COUNT = 10;

      _export("flyReward", flyReward = (_dec = ccclass("flyReward"), _dec2 = property(SpriteFrame), _dec3 = property(Node), _dec4 = property(Animation), _dec(_class = (_class2 = class flyReward extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "imgGold", _descriptor, this);

          _initializerDefineProperty(this, "ndRewardParent", _descriptor2, this);

          _initializerDefineProperty(this, "aniBoom", _descriptor3, this);

          this.finishIdx = 0;
          this._callback = undefined;
          this.isGoldOrDiamond = true;
        }

        start() {
          // Your initialization goes here.
          this.aniBoom.play();
          this.createReward();
        }

        getTargetPos() {
          var nodeGold = find('Canvas/goldPos');

          if (!nodeGold) {
            this.node.destroy();

            if (this._callback) {
              this._callback();
            }

            return Vec3.ZERO;
          }

          return nodeGold.position;
        }

        createReward() {
          var imgReward = this.imgGold; // if (!this.isGoldOrDiamond) {
          //     imgReward = this.imgDiamond;
          // }

          var targetPos = this.getTargetPos();

          for (var idx = 0; idx < MAX_REWARD_COUNT; idx++) {
            var rewardNode = new Node('flyRewardItem');
            var flyItem = rewardNode.addComponent(_crd && flyRewardItem === void 0 ? (_reportPossibleCrUseOfflyRewardItem({
              error: Error()
            }), flyRewardItem) : flyRewardItem);
            rewardNode.parent = this.ndRewardParent;
            rewardNode.layer = this.ndRewardParent.layer;
            flyItem.show(imgReward, targetPos, node => {
              this.onFlyOver(node);
            });
          }
        }

        setInfo(isGoldOrDiamond) {
          this.isGoldOrDiamond = isGoldOrDiamond;
        }

        onFlyOver(node) {
          if (this.isGoldOrDiamond) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent('receiveGold');
          } else {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent('receiveDiamond');
          } // cc.gameSpace.audioManager.playSound('sell', false);


          node.active = false;
          this.finishIdx++;

          if (this.finishIdx === MAX_REWARD_COUNT) {
            if (this._callback) {
              this._callback();
            }

            this.node.destroy();
          }
        }
        /**
         * 设置播放回调
         * @param {Function} callback
         * @param {Object} target
         */


        setEndListener(callback) {
          this._callback = callback;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "imgGold", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ndRewardParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "aniBoom", [_dec4], {
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
//# sourceMappingURL=c4680f204f832953e6d202fb56af555d8c06055b.js.map