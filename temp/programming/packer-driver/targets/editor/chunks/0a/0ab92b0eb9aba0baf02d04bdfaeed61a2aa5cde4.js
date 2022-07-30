System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Prefab, SpriteFrame, Texture2D, error, instantiate, find, resources, isValid, assetManager, _dec, _class, _crd, ccclass, resourceUtil;

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "./configuration", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      error = _cc.error;
      instantiate = _cc.instantiate;
      find = _cc.find;
      resources = _cc.resources;
      isValid = _cc.isValid;
      assetManager = _cc.assetManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aebeeEGJRZGbK315QTzsoll", "resourceUtil", undefined);

      ({
        ccclass
      } = _decorator);

      _export("resourceUtil", resourceUtil = (_dec = ccclass("resourceUtil"), _dec(_class = class resourceUtil {
        static loadRes(url, type, cb) {
          if (type) {
            resources.load(url, type, (err, res) => {
              if (err) {
                error(err.message || err);

                if (cb) {
                  cb(err, res);
                }

                return;
              }

              if (cb) {
                cb(err, res);
              }
            });
          } else {
            resources.load(url, (err, res) => {
              if (err) {
                error(err.message || err);

                if (cb) {
                  cb(err, res);
                }

                return;
              }

              if (cb) {
                cb(err, res);
              }
            });
          }
        }

        static getMap(level, cb) {
          let levelStr = 'map'; //前面补0

          if (level >= 100) {
            levelStr += level;
          } else if (level >= 10) {
            levelStr += '0' + level;
          } else {
            levelStr += '00' + level;
          }

          this.loadRes(`gamePackage/map/config/${levelStr}`, null, (err, txtAsset) => {
            if (err) {
              cb(err, txtAsset);
              return;
            }

            const txt = txtAsset;
            let content = '';

            if (txt._file) {
              if (window['LZString']) {
                content = window['LZString'].decompressFromEncodedURIComponent(txt._file);
              }

              const objJson = JSON.parse(content);
              cb(null, objJson);
            } else if (txt.text) {
              if (window['LZString']) {
                content = window['LZString'].decompressFromEncodedURIComponent(txt.text);
              }

              const objJson = JSON.parse(content);
              cb(null, objJson);
            } else if (txt.json) {
              cb(null, txt.json);
            } else {
              const errObj = new Error('failed');
              cb(errObj, null);
            }
          });
        }

        static getMapObjs(type, arrName, progressCb, completeCb) {
          let arrUrls = [];

          for (let idx = 0; idx < arrName.length; idx++) {
            arrUrls.push(`gamePackage/map/${type}/${arrName[idx]}`);
          }

          resources.load(arrUrls, Prefab, progressCb, completeCb);
        }

        static getUIPrefabRes(prefabPath, cb) {
          this.loadRes("prefab/ui/" + prefabPath, Prefab, cb);
        }

        static createUI(path, cb, parent) {
          this.getUIPrefabRes(path, (err, prefab) => {
            if (err) return;
            const node = instantiate(prefab);
            node.setPosition(0, 0, 0);

            if (!parent) {
              parent = find("Canvas");
            }

            parent.addChild(node);

            if (cb) {
              cb(null, node);
            }
          });
        }

        static getCarsBatch(arrName, progressCb, completeCb) {
          let arrUrls = [];

          for (let idx = 0; idx < arrName.length; idx++) {
            arrUrls.push(`prefab/car/car${arrName[idx]}`);
          }

          for (let i = 0; i < arrUrls.length; i++) {
            const url = arrUrls[i];

            if (!progressCb) {
              resources.load(url, Prefab, completeCb);
            } else {
              resources.load(url, Prefab, progressCb, completeCb);
            }
          }
        }

        static getUICar(name, cb) {
          this.loadRes(`prefab/ui/car/uiCar${name}`, Prefab, cb);
        }

        static getCar(name, cb) {
          this.loadRes(`prefab/car/car${name}`, Prefab, cb);
        }

        static setCarIcon(name, sprite, isBlack, cb) {
          let path = `gamePackage/texture/car/car${name}`;

          if (isBlack) {
            path += 'Black';
          }

          this.setSpriteFrame(path, sprite, cb);
        }

        static getJsonData(fileName, cb) {
          resources.load("datas/" + fileName, (err, content) => {
            if (err) {
              error(err.message || err);
              return;
            }

            const txt = content;

            if (txt.json) {
              cb(err, txt.json);
            } else {
              const errObj = new Error('failed!!!');
              cb(errObj, null);
            }
          });
        }

        static getData(fileName, cb) {
          resources.load("datas/" + fileName, function (err, content) {
            if (err) {
              error(err.message || err);
              return;
            }

            const txt = content;
            let text = txt.text;

            if (!text) {
              resources.load(content.nativeUrl, (err, content) => {
                text = content;
                cb(err, text);
              });
              return;
            }

            cb(err, text);
          });
        }

        static setSpriteFrame(path, sprite, cb) {
          this.loadRes(path + '/spriteFrame', SpriteFrame, (err, spriteFrame) => {
            if (err) {
              console.error('set sprite frame failed! err:', path, err);
              cb(err, spriteFrame);
              return;
            }

            if (sprite && isValid(sprite)) {
              sprite.spriteFrame = spriteFrame;
              cb(null, spriteFrame);
            }
          });
        }
        /**
         * 根据英雄的文件名获取头像
         */


        static setRemoteImage(url, sprite, cb) {
          if (!url || !url.startsWith('http')) {
            return;
          }

          let suffix = "png";
          assetManager.loadAny([{
            url: url,
            type: suffix
          }], null, (err, image) => {
            if (err) {
              console.error('set avatar failed! err:', url, err);
              cb(err, image);
              return;
            }

            let texture = new Texture2D();
            texture.image = image;
            let spriteFrame = new SpriteFrame();
            spriteFrame.texture = texture;
            cb && cb(null, spriteFrame);
          });
        }
        /**
         * 设置更多游戏的游戏图标
         */


        static setGameIcon(game, sprite, cb) {
          if (game.startsWith('http')) {
            this.setRemoteImage(game, sprite, cb);
          } else {
            this.setSpriteFrame('gamePackage/textures/icons/games/' + game, sprite, cb);
          }
        }
        /**
         * 获取顾客预制体
         *
         * @static
         * @param {string} name
         * @param {Function} cb
         * @memberof resourceUtil
         */


        static getCustomer(name, cb) {
          this.loadRes(`gamePackage/map/customer/customer${name}`, Prefab, cb);
        }

        static setCustomerIcon(name, sprite, cb) {
          let path = `gamePackage/texture/head/head${name}`;
          this.setSpriteFrame(path, sprite, cb);
        }

        static getEffect(name, cb) {
          this.loadRes(`prefab/effect/${name}`, Prefab, cb);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ab92b0eb9aba0baf02d04bdfaeed61a2aa5cde4.js.map