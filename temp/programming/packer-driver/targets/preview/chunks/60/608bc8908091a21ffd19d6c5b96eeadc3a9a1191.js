System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, Node, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, follow;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff8ee6OQldPNLrgLpXROotm", "follow", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("follow", follow = (_dec = ccclass("follow"), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = class follow extends Component {
        // Property.
        // yourProperty = "some what";
        // Add `property` decorator if your want the property to be serializable.
        // @property
        // yourSerializableProperty = "some what";
        constructor() {
          super();

          _initializerDefineProperty(this, "followTarget", _descriptor, this);

          _initializerDefineProperty(this, "isFollowRotation", _descriptor2, this);

          _initializerDefineProperty(this, "offset", _descriptor3, this);

          this.moveSpeed = 3;
          this.isPlayingStart = false;
        }

        start() {// Your initialization goes here.
          // this.showStart();
        }

        showStart() {//TODO 原先有个展示动画，现直接修改为玩家下
          // this.isPlayingStart = true;
          // this.scheduleOnce(()=>{
          //     this.isPlayingStart = false;
          // }, 1.5);
        }

        lateUpdate(deltaTime) {
          if (!this.followTarget) {
            return;
          }

          var posOrigin = this.node.worldPosition;

          if (!this.isPlayingStart) {
            var offset = this.offset;

            if (this.isFollowRotation) {
              offset = Vec3.transformQuat(new Vec3(), this.offset, this.followTarget.rotation);
            }

            var posTarget = new Vec3(this.followTarget.worldPosition.x + offset.x, this.followTarget.worldPosition.y + offset.y, this.followTarget.worldPosition.z + offset.z); // let dis = Vec3.subtract(new Vec3(), posOrigin, posTarget).length();

            this.node.setWorldPosition(posTarget);
            this.node.lookAt(this.followTarget.worldPosition, new Vec3(0, 1, 0));

            if (this.isFollowRotation) {
              var angle = new Vec3(this.node.eulerAngles);
              angle.y = this.followTarget.eulerAngles.y;
              this.node.eulerAngles = angle;
            }
          } else {
            var _posTarget = new Vec3(this.followTarget.worldPosition.x + this.offset.x, this.followTarget.worldPosition.y + this.offset.y, this.followTarget.worldPosition.z + this.offset.z);

            var dis = Vec3.subtract(new Vec3(), posOrigin, _posTarget).length();

            if (dis > 0.001) {
              Vec3.lerp(_posTarget, posOrigin, _posTarget, this.moveSpeed * deltaTime);
            }

            this.node.setWorldPosition(_posTarget);
            this.node.lookAt(this.followTarget.worldPosition, new Vec3(0, 1, 0));
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "followTarget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isFollowRotation", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "offset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=608bc8908091a21ffd19d6c5b96eeadc3a9a1191.js.map