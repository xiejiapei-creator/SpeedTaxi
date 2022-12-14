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
          let state;

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
         * ????????????
         * @param {String} name ?????????????????????constants.AUDIO_MUSIC ??????
         * @param {Boolean} loop ??????????????????
         */


        playMusic(loop) {
          const audioSource = audioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          audioSource.loop = loop;

          if (!audioSource.playing) {
            audioSource.play();
          }
        }
        /**
         * ????????????
         * @param {String} name ?????????????????????constants.AUDIO_SOUND ??????
         */


        playSound(name) {
          const audioSource = audioManager._audioSource;
          assert(audioSource, 'AudioManager not inited!'); //?????????????????????????????????????????????

          let path = 'gamePackage/audio/sound/'; // if (name !== 'click') {
          //     path = 'gamePackage/' + path; //????????????????????????????????????????????????????????????????????????
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
          const audioSource = audioManager._audioSource;
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
//# sourceMappingURL=47e7a5848dced925da7e7efd962d1c9d235d54fd.js.map