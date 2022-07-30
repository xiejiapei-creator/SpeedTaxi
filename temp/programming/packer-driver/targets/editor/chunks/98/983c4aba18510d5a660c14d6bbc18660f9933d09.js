System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Button, audioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, menu, requireComponent, disallowMultiple, btnAdapter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "../../framework/audioManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      audioManager = _unresolved_2.audioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f130br9GwZGkJEkRGonhXxR", "btnAdapter", undefined);

      ({
        ccclass,
        property,
        menu,
        requireComponent,
        disallowMultiple
      } = _decorator);

      _export("btnAdapter", btnAdapter = (_dec = ccclass("btnAdapter"), _dec2 = menu('自定义组件/btnAdapter'), _dec3 = requireComponent(Button), _dec4 = property({
        tooltip: '点击后是否播放点击音效'
      }), _dec5 = property({
        tooltip: '点击音效名'
      }), _dec6 = property({
        tooltip: '是否禁止快速二次点击'
      }), _dec7 = property({
        tooltip: '点击后多久才能再次点击,仅isPreventSecondClick为true生效'
      }), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = (_class2 = class btnAdapter extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "isPlaySound", _descriptor, this);

          _initializerDefineProperty(this, "clickSoundName", _descriptor2, this);

          _initializerDefineProperty(this, "isPreventSecondClick", _descriptor3, this);

          _initializerDefineProperty(this, "preventTime", _descriptor4, this);
        }

        start() {
          const button = this.node.getComponent(Button);
          this.node.on('click', () => {
            if (this.isPreventSecondClick) {
              button.interactable = false;
              this.scheduleOnce(() => {
                if (button.node) button.interactable = true;
              }, this.preventTime);
            } //


            if (this.isPlaySound) (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
              error: Error()
            }), audioManager) : audioManager).instance.playSound(this.clickSoundName, false);
          });
        } // update (dt) {},


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isPlaySound", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clickSoundName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 'click';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isPreventSecondClick", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "preventTime", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      })), _class2)) || _class) || _class) || _class) || _class));

      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=983c4aba18510d5a660c14d6bbc18660f9933d09.js.map