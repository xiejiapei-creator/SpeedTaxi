System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Vec3, tween, isValid, UITransform, poolManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, tips;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../../framework/poolManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      isValid = _cc.isValid;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      poolManager = _unresolved_2.poolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "60f49uw4/dA4rGh/C738U1T", "tips", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("tips", tips = (_dec = ccclass('tips'), _dec2 = property(Label), _dec(_class = (_class2 = class tips extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbTips", _descriptor, this);

          this.targetPos = void 0;
        }

        start() {// Your initialization goes here.
        }

        show(content, callback) {
          this.targetPos = new Vec3(0, 200, 0);
          this.node.setPosition(this.targetPos); // this.node.getComponent(Sprite).color = new Color(255, 255, 255, 255);
          // this.lbTips.maxWidth = 0;
          // this.lbTips.string = '<color=#001D34>'+ content +'</color>';
          // //修改底图大小
          // let width = this.lbTips._linesWidth;
          // if (width.length && width[0] < 500) {
          //     this.lbTips.maxWidth = width[0];
          // } else {
          //     this.lbTips.maxWidth = 500;
          //     this.lbTips.node.setContentSize(500, this.lbTips.node.getContentSize().height);
          // }

          this.lbTips.string = content;
          var lbTipTrans = this.lbTips.node.getComponent(UITransform);
          var size = lbTipTrans.contentSize;

          if (!isValid(size)) {
            //size不存在，自我销毁
            // tipsNode.destroy();
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(this.node);
            return;
          }

          var uiTrans = this.node.getComponent(UITransform);
          uiTrans.setContentSize(size.width + 100 < 240 ? 240 : size.width + 100, size.height + 30);
          this.scheduleOnce(() => {
            tween(this.targetPos).by(0.8, new Vec3(0, 150, 0)).call(() => {
              callback && callback();
              (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.putNode(this.node);
            }).start();
          }, 0.8);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbTips", [_dec2], {
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
//# sourceMappingURL=296485f417b62156b84a4a2ba0239ce5ac9e98e9.js.map