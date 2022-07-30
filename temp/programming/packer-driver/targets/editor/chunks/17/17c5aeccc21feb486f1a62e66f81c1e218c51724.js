System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Vec3, updateValueLabel, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, loading;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfupdateValueLabel(extras) {
    _reporterNs.report("updateValueLabel", "./updateValueLabel", _context.meta, extras);
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
    }, function (_unresolved_2) {
      updateValueLabel = _unresolved_2.updateValueLabel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99c5fx0klFHq52oGPdZL7Z5", "loading", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("loading", loading = (_dec = ccclass("loading"), _dec2 = property(_crd && updateValueLabel === void 0 ? (_reportPossibleCrUseOfupdateValueLabel({
        error: Error()
      }), updateValueLabel) : updateValueLabel), _dec3 = property(Label), _dec(_class = (_class2 = class loading extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lbProgress", _descriptor, this);

          _initializerDefineProperty(this, "lbTips", _descriptor2, this);

          this.targetProgress = 0;
          this.oriPos = new Vec3();
        }

        start() {
          this.show(0);
        }

        show(start) {
          if (start) {
            this.targetProgress = start;
          } else {
            this.targetProgress = 0;
          }

          this.lbProgress.playUpdateValue(this.targetProgress, this.targetProgress, 0);
          this.lbProgress.isPlaying = false;
          this.lbTips.string = '';
          this.oriPos.set(this.lbProgress.node.position);
        }

        updateProgress(progress, tips) {
          this.targetProgress = progress;
          let curProgress = Number(this.lbProgress.label.string); //当前进度

          this.lbProgress.playUpdateValue(curProgress, this.targetProgress, (this.targetProgress - curProgress) / 20);

          if (tips) {
            this.lbTips.string = tips;
          }

          if (this.oriPos) {
            this.lbProgress.node.setPosition(new Vec3(this.oriPos.x - 10, this.oriPos.y, this.oriPos.z));
          }
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbProgress", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbTips", [_dec3], {
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
//# sourceMappingURL=17c5aeccc21feb486f1a62e66f81c1e218c51724.js.map