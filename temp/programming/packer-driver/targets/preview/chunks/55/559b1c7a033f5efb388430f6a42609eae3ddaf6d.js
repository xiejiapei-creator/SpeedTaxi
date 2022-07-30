System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, error, SpriteFrameSet, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, LocalizedSprite;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSpriteFrameSet(extras) {
    _reporterNs.report("SpriteFrameSet", "./SpriteFrameSet", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      error = _cc.error;
    }, function (_unresolved_2) {
      SpriteFrameSet = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "28bd9xEMv1GKLbTuAi4B4dI", "LocalizedSprite", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", LocalizedSprite = (_dec = ccclass("LocalizedSprite"), _dec2 = property({
        type: [_crd && SpriteFrameSet === void 0 ? (_reportPossibleCrUseOfSpriteFrameSet({
          error: Error()
        }), SpriteFrameSet) : SpriteFrameSet],
        displayOrder: 1
      }), _dec(_class = (_class2 = (_class3 = class LocalizedSprite extends Component {
        constructor() {
          super(...arguments);
          this.sprite = null;

          _initializerDefineProperty(this, "spriteFrameSet", _descriptor, this);
        }

        onLoad() {
          this.fetchRender();
        }

        fetchRender() {
          var sprite = this.getComponent(Sprite);

          if (sprite) {
            this.sprite = sprite;
            this.updateSprite(window.i18nConfig.curLang);
            return;
          }
        }

        getSpriteFrameByLang(lang) {
          for (var i = 0; i < this.spriteFrameSet.length; ++i) {
            if (this.spriteFrameSet[i].language === lang) {
              return this.spriteFrameSet[i].spriteFrame;
            }
          }
        }

        updateSprite(language) {
          if (!this.sprite) {
            error('Failed to update localized sprite, sprite component is invalid!');
            return;
          }

          var spriteFrame = this.getSpriteFrameByLang(language);

          if (!spriteFrame && this.spriteFrameSet[0]) {
            spriteFrame = this.spriteFrameSet[0].spriteFrame;
          }

          if (spriteFrame) {
            this.sprite.spriteFrame = spriteFrame;
          }
        }

      }, _class3.editor = {
        executeInEditMode: true,
        inspector: 'packages://i18n/inspector/localized-sprite.js',
        menu: 'i18n/LocalizedSprite'
      }, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameSet", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=559b1c7a033f5efb388430f6a42609eae3ddaf6d.js.map