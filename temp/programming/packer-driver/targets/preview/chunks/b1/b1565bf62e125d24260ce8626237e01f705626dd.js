System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, AudioSource, assert, game, setting, audioManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GameRoot;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsetting(extras) {
    _reporterNs.report("setting", "../ui/main/setting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioManager(extras) {
    _reporterNs.report("audioManager", "./audioManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioSource = _cc.AudioSource;
      assert = _cc.assert;
      game = _cc.game;
    }, function (_unresolved_2) {
      setting = _unresolved_2.setting;
    }, function (_unresolved_3) {
      audioManager = _unresolved_3.audioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98dcdQl8GhEYLJRG8ap+Eh+", "GameRoot", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameRoot", GameRoot = (_dec = ccclass('GameRoot'), _dec2 = property(AudioSource), _dec(_class = (_class2 = class GameRoot extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_audioSource", _descriptor, this);
        }

        onLoad() {
          var audioSource = this.getComponent(AudioSource);
          assert(audioSource);
          this._audioSource = audioSource;
          game.addPersistRootNode(this.node); // init AudioManager

          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).instance.init(this._audioSource);
        }

        onEnable() {
          // NOTE: 常驻节点在切场景时会暂停音乐，需要在 onEnable 继续播放
          // 之后需要在引擎侧解决这个问题
          (_crd && audioManager === void 0 ? (_reportPossibleCrUseOfaudioManager({
            error: Error()
          }), audioManager) : audioManager).instance.playMusic(true);
          (_crd && setting === void 0 ? (_reportPossibleCrUseOfsetting({
            error: Error()
          }), setting) : setting).checkState();
        }

        start() {
          if (typeof cocosAnalytics !== 'undefined') {
            cocosAnalytics.enableDebug(true);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_audioSource", [_dec2], {
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
//# sourceMappingURL=b1565bf62e125d24260ce8626237e01f705626dd.js.map