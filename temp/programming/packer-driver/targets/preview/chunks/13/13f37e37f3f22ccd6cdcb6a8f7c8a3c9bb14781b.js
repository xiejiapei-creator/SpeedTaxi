System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AudioClip, assert, clamp01, warn, configuration, resourceUtil, audioManager, _crd;

  function _reportPossibleCrUseOfconfiguration(extras) {
    _reporterNs.report("configuration", "./configuration", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "./resourceUtil", _context.meta, extras);
  }

  _export("audioManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      AudioClip = _cc.AudioClip;
      assert = _cc.assert;
      clamp01 = _cc.clamp01;
      warn = _cc.warn;
    }, function (_unresolved_2) {
      configuration = _unresolved_2.configuration;
    }, function (_unresolved_3) {
      resourceUtil = _unresolved_3.resourceUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e478cuMHJdIHa5fP3m5UZ7S", "audioManager", undefined);

      _export("audioManager", audioManager = class audioManager {
        constructor() {
          this.soundVolume = 1;
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new audioManager();
          return this._instance;
        }

        // init AudioManager in GameRoot.
        init(audioSource) {
          this.soundVolume = this.getConfiguration(false) ? 1 : 0;
          audioManager._audioSource = audioSource;
        }

        getConfiguration(isMusic) {
          var state;

          if (isMusic) {
            state = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
              error: Error()
            }), configuration) : configuration).instance.getGlobalData('music');
          } else {
            state = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
              error: Error()
            }), configuration) : configuration).instance.getGlobalData('sound');
          } // console.log('Config for [' + (isMusic ? 'Music' : 'Sound') + '] is ' + state);


          return state === undefined || state === 'true' ? true : false;
        }
        /**
         * 播放音乐
         * @param {String} name 音乐名称可通过constants.AUDIO_MUSIC 获取
         * @param {Boolean} loop 是否循环播放
         */


        playMusic(loop) {
          var audioSource = audioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          audioSource.loop = loop;

          if (!audioSource.playing) {
            audioSource.play();
          }
        }
        /**
         * 播放音效
         * @param {String} name 音效名称可通过constants.AUDIO_SOUND 获取
         */


        playSound(name) {
          var audioSource = audioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!'); //音效一般是多个的，不会只有一个

          var path = 'gamePackage/audio/sound/'; // if (name !== 'click') {
          //     path = 'gamePackage/' + path; //微信特殊处理，除一开场的音乐，其余的放在子包里头
          // }

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).loadRes(path + name, AudioClip, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err);
              return;
            } // NOTE: the second parameter is volume scale.


            audioSource.playOneShot(clip, audioSource.volume ? this.soundVolume / audioSource.volume : 0);
          });
        }

        setMusicVolume(flag) {
          var audioSource = audioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          flag = clamp01(flag);
          audioSource.volume = flag;
        }

        setSoundVolume(flag) {
          this.soundVolume = flag;
        }

        openMusic() {
          this.setMusicVolume(0.8);
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setGlobalData('music', 'true');
        }

        closeMusic() {
          this.setMusicVolume(0);
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setGlobalData('music', 'false');
        }

        openSound() {
          this.setSoundVolume(1);
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setGlobalData('sound', 'true');
        }

        closeSound() {
          this.setSoundVolume(0);
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setGlobalData('sound', 'false');
        }

      });

      audioManager._instance = void 0;
      audioManager._audioSource = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=13f37e37f3f22ccd6cdcb6a8f7c8a3c9bb14781b.js.map