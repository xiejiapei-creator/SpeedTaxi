System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, director, Polyglot, i18n, _crd, polyInst;

  // if (CC_EDITOR) {
  //     Editor.Profile.load('profile://project/i18n.json', (err, profile) => {
  //         window.i18nConfig.curLang = profile.data['default_language'];
  //         if (polyInst) {
  //             let data = loadLanguageData(window.i18nConfig.curLang) || {};
  //             initPolyglot(data);
  //         }
  //     });
  // }
  function loadLanguageData(language) {
    //@ts-ignore
    return window.i18nConfig.languages[language];
  }

  function initPolyglot(data) {
    if (data) {
      if (polyInst) {
        polyInst.replace(data);
      } else {
        polyInst = new (_crd && Polyglot === void 0 ? (_reportPossibleCrUseOfPolyglot({
          error: Error()
        }), Polyglot) : Polyglot)({
          phrases: data,
          allowMissing: true
        });
      }
    }
  } // module.exports = {


  function _reportPossibleCrUseOfPolyglot(extras) {
    _reporterNs.report("Polyglot", "./polyglot.min", _context.meta, extras);
  }

  _export("i18n", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      director = _cc.director;
    }, function (_unresolved_2) {
      Polyglot = _unresolved_2.Polyglot;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6597NeRz5OuZ6kceJkHWc3", "LanguageData", undefined);

      if (!window.i18nConfig) {
        window.i18nConfig = {
          languages: {},
          curLang: ''
        };
      }

      _export("i18n", i18n = class i18n {
        /**
         * This method allow you to switch language during runtime, language argument should be the same as your data file name
         * such as when language is 'zh', it will load your 'zh.js' data source.
         * @method init
         * @param language - the language specific data file name, such as 'zh' to load 'zh.js'
         */
        static init(language) {
          if (!language || language === window.i18nConfig.curLang) {
            return;
          }

          let data = loadLanguageData(language) || {};
          window.i18nConfig.curLang = language;
          initPolyglot(data);
          this.inst = polyInst;
        }
        /**
         * this method takes a text key as input, and return the localized string
         * Please read https://github.com/airbnb/polyglot.js for details
         * @method t
         * @return {String} localized string
         * @example
         *
         * var myText = i18n.t('MY_TEXT_KEY');
         *
         * // if your data source is defined as
         * // {"hello_name": "Hello, %{name}"}
         * // you can use the following to interpolate the text
         * var greetingText = i18n.t('hello_name', {name: 'nantas'}); // Hello, nantas
         */


        static t(key, opt) {
          if (Object.keys(polyInst.phrases).length === 0) {
            let data = loadLanguageData(window.i18nConfig.curLang) || {};
            initPolyglot(data);
            console.warn('###防止出现parses数据丢失，重新替换数据');
          }

          if (polyInst) {
            return polyInst.t(key, opt);
          }
        } // inst: polyInst


        updateSceneRenderers() {
          // very costly iterations
          let rootNodes = director.getScene().children; // walk all nodes with localize label and update

          let allLocalizedLabels = [];

          for (let i = 0; i < rootNodes.length; ++i) {
            let labels = rootNodes[i].getComponentsInChildren('LocalizedLabel');
            Array.prototype.push.apply(allLocalizedLabels, labels);
          }

          for (let i = 0; i < allLocalizedLabels.length; ++i) {
            let label = allLocalizedLabels[i];
            if (!label.node.active) continue;
            label.updateLabel();
          } // walk all nodes with localize sprite and update


          let allLocalizedSprites = [];

          for (let i = 0; i < rootNodes.length; ++i) {
            let sprites = rootNodes[i].getComponentsInChildren('LocalizedSprite');
            Array.prototype.push.apply(allLocalizedSprites, sprites);
          }

          for (let i = 0; i < allLocalizedSprites.length; ++i) {
            let sprite = allLocalizedSprites[i];
            if (!sprite.node.active) continue;
            sprite.updateSprite(window.i18nConfig.curLang);
          }
        }

      });

      i18n.inst = null;
      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f2914120340dbd86ec98948c312b8992c325f5ee.js.map