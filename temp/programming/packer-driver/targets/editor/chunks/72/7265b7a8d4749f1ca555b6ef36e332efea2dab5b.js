'use strict'; // var forEach = require('for-each');
// var warning = require('warning');
// var has = require('has');
// var trim = require('string.prototype.trim');

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Polyglot, _crd, forEach, warning, has, warn, replace, split, delimiter, russianPluralGroups, defaultPluralRules, defaultTokenRegex;

  function trim(x) {
    return x.replace(/^\s+|\s+$/gm, '');
  }

  function langToTypeMap(mapping) {
    var ret = {};
    forEach(mapping, function (langs, type) {
      forEach(langs, function (lang) {
        ret[lang] = type;
      }, this);
    }, this);
    return ret;
  }

  function pluralTypeName(pluralRules, locale) {
    var langToPluralType = langToTypeMap(pluralRules.pluralTypeToLanguages); //@ts-ignore

    return langToPluralType[locale] || langToPluralType[split.call(locale, /-/, 1)[0]] || langToPluralType.en;
  }

  function pluralTypeIndex(pluralRules, locale, count) {
    return pluralRules.pluralTypes[pluralTypeName(pluralRules, locale)](count);
  }

  function escape(token) {
    return token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function constructTokenRegex(opts) {
    var prefix = opts && opts.prefix || '%{';
    var suffix = opts && opts.suffix || '}';

    if (prefix === delimiter || suffix === delimiter) {
      throw new RangeError('"' + delimiter + '" token is reserved for pluralization');
    }

    return new RegExp(escape(prefix) + '(.*?)' + escape(suffix), 'g');
  }

  // ### transformPhrase(phrase, substitutions, locale)
  //
  // Takes a phrase string and transforms it by choosing the correct
  // plural form and interpolating it.
  //
  //     transformPhrase('Hello, %{name}!', {name: 'Spike'});
  //     // "Hello, Spike!"
  //
  // The correct plural form is selected if substitutions.smart_count
  // is set. You can pass in a number instead of an Object as `substitutions`
  // as a shortcut for `smart_count`.
  //
  //     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 1}, 'en');
  //     // "1 new message"
  //
  //     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 2}, 'en');
  //     // "2 new messages"
  //
  //     transformPhrase('%{smart_count} new messages |||| 1 new message', 5, 'en');
  //     // "5 new messages"
  //
  // You should pass in a third argument, the locale, to specify the correct plural type.
  // It defaults to `'en'` with 2 plural forms.
  function transformPhrase(phrase, substitutions, locale, tokenRegex, pluralRules) {
    if (typeof phrase !== 'string') {
      throw new TypeError('Polyglot.transformPhrase expects argument #1 to be string');
    }

    if (substitutions == null) {
      return phrase;
    }

    var result = phrase;
    var interpolationRegex = tokenRegex || defaultTokenRegex;
    var pluralRulesOrDefault = pluralRules || defaultPluralRules; // allow number as a pluralization shortcut

    var options = typeof substitutions === 'number' ? {
      smart_count: substitutions
    } : substitutions; // Select plural form: based on a phrase text that contains `n`
    // plural forms separated by `delimiter`, a `locale`, and a `substitutions.smart_count`,
    // choose the correct plural form. This is only done if `count` is set.

    if (options.smart_count != null && result) {
      var texts = split.call(result, delimiter);
      result = trim(texts[pluralTypeIndex(pluralRulesOrDefault, locale || 'en', options.smart_count)] || texts[0]);
    } // Interpolate: Creates a `RegExp` object for each interpolation placeholder.


    result = replace.call(result, interpolationRegex, function (expression, argument) {
      if (!has(options, argument) || options[argument] == null) {
        return expression;
      }

      return options[argument];
    });
    return result;
  } // ### Polyglot class constructor


  function polyglot(options) {
    return new Polyglot(options);
  }

  _export({
    Polyglot: void 0,
    polyglot: polyglot
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "26839JcVWpGabE9xA7/uWJw", "polyglot.min", undefined);

      forEach = function (arr, fn, target) {
        // var arr = Array.isArray(arguments[0]) ? arguments[0] : new Array;
        arr = arguments[0];
        fn = typeof arguments[1] === 'function' ? arguments[1] : new Function();

        if (Array.isArray(arr)) {
          arr.forEach((item, idx, array) => {
            fn(item, idx);
          });
        } else {
          for (const key in arr) {
            if (arr.hasOwnProperty(key)) {
              const element = arr[key];
              fn(element, key);
            }
          }
        }
      };

      warning = function (message) {
        console.warn(message);
      };

      has = function (obj, key) {
        return obj.hasOwnProperty(key);
      };

      warn = function warn(message) {
        warning(message);
      };

      replace = String.prototype.replace;
      split = String.prototype.split; // #### Pluralization methods
      // The string that separates the different phrase possibilities.

      delimiter = '||||';

      russianPluralGroups = function (n) {
        var lastTwo = n % 100;
        var end = lastTwo % 10;

        if (lastTwo !== 11 && end === 1) {
          return 0;
        }

        if (2 <= end && end <= 4 && !(lastTwo >= 12 && lastTwo <= 14)) {
          return 1;
        }

        return 2;
      };

      defaultPluralRules = {
        // Mapping from pluralization group plural logic.
        pluralTypes: {
          arabic: function (n) {
            // http://www.arabeyes.org/Plural_Forms
            if (n < 3) {
              return n;
            }

            var lastTwo = n % 100;
            if (lastTwo >= 3 && lastTwo <= 10) return 3;
            return lastTwo >= 11 ? 4 : 5;
          },
          bosnian_serbian: russianPluralGroups,
          chinese: function () {
            return 0;
          },
          croatian: russianPluralGroups,
          french: function (n) {
            return n > 1 ? 1 : 0;
          },
          german: function (n) {
            return n !== 1 ? 1 : 0;
          },
          russian: russianPluralGroups,
          lithuanian: function (n) {
            if (n % 10 === 1 && n % 100 !== 11) {
              return 0;
            }

            return n % 10 >= 2 && n % 10 <= 9 && (n % 100 < 11 || n % 100 > 19) ? 1 : 2;
          },
          czech: function (n) {
            if (n === 1) {
              return 0;
            }

            return n >= 2 && n <= 4 ? 1 : 2;
          },
          polish: function (n) {
            if (n === 1) {
              return 0;
            }

            var end = n % 10;
            return 2 <= end && end <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
          },
          icelandic: function (n) {
            return n % 10 !== 1 || n % 100 === 11 ? 1 : 0;
          },
          slovenian: function (n) {
            var lastTwo = n % 100;

            if (lastTwo === 1) {
              return 0;
            }

            if (lastTwo === 2) {
              return 1;
            }

            if (lastTwo === 3 || lastTwo === 4) {
              return 2;
            }

            return 3;
          }
        },
        // Mapping from pluralization group to individual language codes/locales.
        // Will look up based on exact match, if not found and it's a locale will parse the locale
        // for language code, and if that does not exist will default to 'en'
        pluralTypeToLanguages: {
          arabic: ['ar'],
          bosnian_serbian: ['bs-Latn-BA', 'bs-Cyrl-BA', 'srl-RS', 'sr-RS'],
          chinese: ['id', 'id-ID', 'ja', 'ko', 'ko-KR', 'lo', 'ms', 'th', 'th-TH', 'zh'],
          croatian: ['hr', 'hr-HR'],
          german: ['fa', 'da', 'de', 'en', 'es', 'fi', 'el', 'he', 'hi-IN', 'hu', 'hu-HU', 'it', 'nl', 'no', 'pt', 'sv', 'tr'],
          french: ['fr', 'tl', 'pt-br'],
          russian: ['ru', 'ru-RU'],
          lithuanian: ['lt'],
          czech: ['cs', 'cs-CZ', 'sk'],
          polish: ['pl'],
          icelandic: ['is'],
          slovenian: ['sl-SL']
        }
      };
      defaultTokenRegex = /%\{(.*?)\}/g;

      _export("Polyglot", Polyglot = class Polyglot {
        static transformPhrase(phrase, substitutions, locale) {
          //@ts-ignore
          return transformPhrase(phrase, substitutions, locale);
        }

        constructor(options) {
          this.phrases = {};
          this.pluralRules = {};
          this.currentLocale = '';
          this.onMissingKey = null;
          this.warn = null;
          this.tokenRegex = void 0;
          var opts = options || {};
          this.extend(opts.phrases || {});
          this.currentLocale = opts.locale || 'en';
          var allowMissing = opts.allowMissing ? transformPhrase : null;
          this.onMissingKey = typeof opts.onMissingKey === 'function' ? opts.onMissingKey : allowMissing;
          this.warn = opts.warn || warn;
          this.tokenRegex = constructTokenRegex(opts.interpolation);
          this.pluralRules = opts.pluralRules || defaultPluralRules;
        } // ### polyglot.has(key)
        //
        // Check if polyglot has a translation for given key


        has(key) {
          return has(this.phrases, key);
        } // ### polyglot.t(key, options)
        //
        // The most-used method. Provide a key, and `t` will return the
        // phrase.
        //
        //     polyglot.t("hello");
        //     => "Hello"
        //
        // The phrase value is provided first by a call to `polyglot.extend()` or
        // `polyglot.replace()`.
        //
        // Pass in an object as the second argument to perform interpolation.
        //
        //     polyglot.t("hello_name", {name: "Spike"});
        //     => "Hello, Spike"
        //
        // If you like, you can provide a default value in case the phrase is missing.
        // Use the special option key "_" to specify a default.
        //
        //     polyglot.t("i_like_to_write_in_language", {
        //       _: "I like to write in %{language}.",
        //       language: "JavaScript"
        //     });
        //     => "I like to write in JavaScript."
        //


        t(key, options) {
          var phrase, result;
          var opts = options == null ? {} : options;

          if (typeof this.phrases[key] === 'string') {
            phrase = this.phrases[key];
          } else if (typeof opts._ === 'string') {
            phrase = opts._;
          } else if (this.onMissingKey) {
            var onMissingKey = this.onMissingKey;
            result = onMissingKey(key, opts, this.currentLocale, this.tokenRegex, this.pluralRules);
          } else {
            this.warn('Missing translation for key: "' + key + '"');
            result = key;
          }

          if (typeof phrase === 'string') {
            result = transformPhrase(phrase, opts, this.currentLocale, this.tokenRegex, this.pluralRules);
          }

          return result;
        } // ### polyglot.replace(phrases)
        //
        // Completely replace the existing phrases with a new set of phrases.
        // Normally, just use `extend` to add more phrases, but under certain
        // circumstances, you may want to make sure no old phrases are lying around.


        replace(newPhrases) {
          this.clear();
          this.extend(newPhrases);
        } // ### polyglot.clear()
        //
        // Clears all phrases. Useful for special cases, such as freeing
        // up memory if you have lots of phrases but no longer need to
        // perform any translation. Also used internally by `replace`.


        clear() {
          this.phrases = {};
        } // ### polyglot.locale([locale])
        //
        // Get or set locale. Internally, Polyglot only uses locale for pluralization.


        locale(newLocale) {
          if (newLocale) this.currentLocale = newLocale;
          return this.currentLocale;
        } // ### polyglot.extend(phrases)
        //
        // Use `extend` to tell Polyglot how to translate a given key.
        //
        //     polyglot.extend({
        //       "hello": "Hello",
        //       "hello_name": "Hello, %{name}"
        //     });
        //
        // The key can be any string.  Feel free to call `extend` multiple times;
        // it will override any phrases with the same key, but leave existing phrases
        // untouched.
        //
        // It is also possible to pass nested phrase objects, which get flattened
        // into an object with the nested keys concatenated using dot notation.
        //
        //     polyglot.extend({
        //       "nav": {
        //         "hello": "Hello",
        //         "hello_name": "Hello, %{name}",
        //         "sidebar": {
        //           "welcome": "Welcome"
        //         }
        //       }
        //     });
        //
        //     console.log(polyglot.phrases);
        //     // {
        //     //   'nav.hello': 'Hello',
        //     //   'nav.hello_name': 'Hello, %{name}',
        //     //   'nav.sidebar.welcome': 'Welcome'
        //     // }
        //
        // `extend` accepts an optional second argument, `prefix`, which can be used
        // to prefix every key in the phrases object with some string, using dot
        // notation.
        //
        //     polyglot.extend({
        //       "hello": "Hello",
        //       "hello_name": "Hello, %{name}"
        //     }, "nav");
        //
        //     console.log(polyglot.phrases);
        //     // {
        //     //   'nav.hello': 'Hello',
        //     //   'nav.hello_name': 'Hello, %{name}'
        //     // }
        //
        // This feature is used internally to support nested phrase objects.


        extend(morePhrases, prefix) {
          var _this = this;

          forEach(morePhrases, function (phrase, key) {
            var prefixedKey = prefix ? prefix + '.' + key : key;

            if (typeof phrase === 'object') {
              _this.extend(phrase, prefixedKey);
            } else {
              _this.phrases[prefixedKey] = phrase;
            }
          }, this);
        } // ### polyglot.unset(phrases)
        // Use `unset` to selectively remove keys from a polyglot instance.
        //
        //     polyglot.unset("some_key");
        //     polyglot.unset({
        //       "hello": "Hello",
        //       "hello_name": "Hello, %{name}"
        //     });
        //
        // The unset method can take either a string (for the key), or an object hash with
        // the keys that you would like to unset.


        unset(morePhrases, prefix) {
          if (typeof morePhrases === 'string') {
            delete this.phrases[morePhrases];
          } else {
            forEach(morePhrases, function (phrase, key) {
              var prefixedKey = prefix ? prefix + '.' + key : key;

              if (typeof phrase === 'object') {
                this.unset(phrase, prefixedKey);
              } else {
                delete this.phrases[prefixedKey];
              }
            }, this);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7265b7a8d4749f1ca555b6ef36e332efea2dab5b.js.map