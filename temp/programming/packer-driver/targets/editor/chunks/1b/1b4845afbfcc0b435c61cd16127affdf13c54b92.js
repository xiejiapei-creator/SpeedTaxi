System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, log, sys, _decorator, _dec, _class, _class2, _crd, ccclass, configuration;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      log = _cc.log;
      sys = _cc.sys;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05c37maoztIcqYQxP8Afj1j", "configuration", undefined);

      ({
        ccclass
      } = _decorator);

      _export("configuration", configuration = (_dec = ccclass("configuration"), _dec(_class = (_class2 = class configuration {
        constructor() {
          this.jsonData = null;
          this.path = null;
          this.KEY_CONFIG = 'CarConfig';
          this.markSave = false;
          this.saveTimer = -1;
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new configuration();

          this._instance.start();

          return this._instance;
        }

        start() {
          this.jsonData = {
            "userId": ""
          };
          this.path = this.getConfigPath();
          let content;

          if (sys.isNative) {
            const valueObject = jsb.fileUtils.getValueMapFromFile(this.path);
            content = valueObject[this.KEY_CONFIG];
          } else {
            content = sys.localStorage.getItem(this.KEY_CONFIG);
          }

          if (content && content.length) {
            if (content.startsWith('@')) {
              content = content.substring(1);
            }

            try {
              //初始化操作
              const jsonData = JSON.parse(content);
              this.jsonData = jsonData;
            } catch (excepaiton) {}
          } //启动无限定时器，每1秒保存一次数据，而不是无限保存数据


          this.saveTimer = setInterval(() => {
            this.scheduleSave();
          }, 500);
        }

        setConfigDataWithoutSave(key, value) {
          const account = this.jsonData.userId;

          if (this.jsonData[account]) {
            this.jsonData[account][key] = value;
          } else {
            console.error("no account can not save");
          }
        }

        setConfigData(key, value) {
          this.setConfigDataWithoutSave(key, value); // this.save();

          this.markSave = true; //标记为需要存储，避免一直在写入，而是每隔一段时间进行写入
        }

        getConfigData(key) {
          const account = this.jsonData.userId;

          if (this.jsonData[account]) {
            const value = this.jsonData[account][key];
            return value ? value : "";
          } else {
            log("no account can not load");
            return "";
          }
        }

        setGlobalData(key, value) {
          this.jsonData[key] = value;
          this.save();
        }

        getGlobalData(key) {
          return this.jsonData[key];
        }

        setUserId(userId) {
          this.jsonData.userId = userId;

          if (!this.jsonData[userId]) {
            this.jsonData[userId] = {};
          }

          this.save();
        }

        getUserId() {
          return this.jsonData.userId;
        }

        scheduleSave() {
          if (!this.markSave) {
            return;
          }

          this.save();
        }
        /**
         * 标记为已修改
         */


        markModified() {
          this.markSave = true;
        }

        save() {
          // 写入文件
          const str = JSON.stringify(this.jsonData);
          let zipStr = str;
          this.markSave = false;

          if (!sys.isNative) {
            const ls = sys.localStorage;
            ls.setItem(this.KEY_CONFIG, zipStr);
            return;
          }

          const valueObj = {};
          valueObj[this.KEY_CONFIG] = zipStr;
          jsb.fileUtils.writeToFile(valueObj, this.path);
        }

        getConfigPath() {
          const platform = sys.platform;
          let path = "";

          if (platform === sys.OS_WINDOWS) {
            path = "src/conf";
          } else if (platform === sys.OS_LINUX) {
            path = "./conf";
          } else {
            if (sys.isNative) {
              path = jsb.fileUtils.getWritablePath();
              path = path + "conf";
            } else {
              path = "src/conf";
            }
          }

          return path;
        }

        parseUrl(paramStr) {
          if (!paramStr || typeof paramStr === 'string' && paramStr.length <= 0) {
            // 没有带参数，直接忽略
            return;
          }

          let dictParam = {};

          if (typeof paramStr === 'string') {
            paramStr = paramStr.split('?')[1]; // 去除掉 ？号

            const arrParam = paramStr.split("&");
            arrParam.forEach(function (paramValue) {
              const idxEqual = paramValue.indexOf("=");

              if (idxEqual !== -1) {
                const key = paramValue.substring(0, idxEqual);
                dictParam[key] = paramValue.substring(idxEqual + 1);
              }
            });
          } else {
            dictParam = paramStr;
          }

          if (dictParam.action) {
            this.setGlobalData('urlParams', dictParam);
          } // todo：记录来源，以后用到


          if (dictParam.source) {
            this.setGlobalData('source', dictParam.source);
          }

          if (dictParam.adchannelid) {
            this.setGlobalData('adchannelid', dictParam.adchannelid);
          }
        }
        /**
         * 生成随机账户
         * @returns
         */


        static generateGuestAccount() {
          return `${Date.now()}${0 | (Math.random() * 1000, 10)}`;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1b4845afbfcc0b435c61cd16127affdf13c54b92.js.map