System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, find, isValid, resourceUtil, poolManager, tips, _dec, _class, _class2, _crd, ccclass, property, SHOW_STR_INTERVAL_TIME, uiManager;

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "./resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftips(extras) {
    _reporterNs.report("tips", "../ui/common/tips", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      find = _cc.find;
      isValid = _cc.isValid;
    }, function (_unresolved_2) {
      resourceUtil = _unresolved_2.resourceUtil;
    }, function (_unresolved_3) {
      poolManager = _unresolved_3.poolManager;
    }, function (_unresolved_4) {
      tips = _unresolved_4.tips;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae98dhzQlZL2p1SbDgvNdoJ", "uiManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      SHOW_STR_INTERVAL_TIME = 800;

      _export("uiManager", uiManager = (_dec = ccclass("uiManager"), _dec(_class = (_class2 = class uiManager {
        constructor() {
          this.dictSharedPanel = {};
          this.dictLoading = {};
          this.arrPopupDialog = [];
          this.showTipsTime = 0;
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new uiManager();
          return this._instance;
        }
        /**
         * 显示单例界面
         * @param {String} panelPath
         * @param {Array} args
         * @param {Function} cb 回调函数，创建完毕后回调
         */


        showDialog(panelPath, args, cb) {
          if (this.dictLoading[panelPath]) {
            return;
          }

          var idxSplit = panelPath.lastIndexOf('/');
          var scriptName = panelPath.slice(idxSplit + 1);

          if (!args) {
            args = [];
          }

          if (this.dictSharedPanel.hasOwnProperty(panelPath)) {
            var panel = this.dictSharedPanel[panelPath];

            if (isValid(panel)) {
              panel.parent = find("Canvas");
              panel.active = true;
              var script = panel.getComponent(scriptName);

              if (script.show) {
                script.show.apply(script, args);
              }

              cb && cb(script);
              return;
            }
          }

          this.dictLoading[panelPath] = true;
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).createUI(panelPath, (err, node) => {
            //判断是否有可能在显示前已经被关掉了？
            var isCloseBeforeShow = false;

            if (!this.dictLoading[panelPath]) {
              //已经被关掉
              isCloseBeforeShow = true;
            }

            this.dictLoading[panelPath] = false;

            if (err) {
              console.error(err);
              return;
            } // node.zIndex = 100;


            this.dictSharedPanel[panelPath] = node;
            var script = node.getComponent(scriptName);

            if (script.show) {
              script.show.apply(script, args);
            }

            cb && cb(script);

            if (isCloseBeforeShow) {
              //如果在显示前又被关闭，则直接触发关闭掉
              this.hideDialog(panelPath);
            }
          });
        }
        /**
         * 隐藏单例界面
         * @param {String} panelPath
         * @param {fn} callback
         */


        hideDialog(panelPath, callback) {
          if (this.dictSharedPanel.hasOwnProperty(panelPath)) {
            var panel = this.dictSharedPanel[panelPath];

            if (panel && isValid(panel)) {
              // let ani = panel.getComponent('animationUI');
              // if (ani) {
              //     ani.close(() => {
              //         panel.parent = null;
              //         if (callback && typeof callback === 'function') {
              //             callback();
              //         }
              //     });
              // } else {
              panel.parent = null;

              if (callback && typeof callback === 'function') {
                callback();
              } // }

            } else if (callback && typeof callback === 'function') {
              callback();
            }
          }

          this.dictLoading[panelPath] = false;
        }
        /**
         * 将弹窗加入弹出窗队列
         * @param {string} panelPath
         * @param {string} scriptName
         * @param {*} param
         */


        pushToPopupSeq(panelPath, scriptName, param) {
          var popupDialog = {
            panelPath: panelPath,
            scriptName: scriptName,
            param: param,
            isShow: false
          };
          this.arrPopupDialog.push(popupDialog);
          this.checkPopupSeq();
        }
        /**
         * 将弹窗加入弹出窗队列
         * @param {number} index
         * @param {string} panelPath
         * @param {string} scriptName
         * @param {*} param
         */


        insertToPopupSeq(index, panelPath, param) {
          var popupDialog = {
            panelPath: panelPath,
            param: param,
            isShow: false
          };
          this.arrPopupDialog.splice(index, 0, popupDialog); //this.checkPopupSeq();
        }
        /**
         * 将弹窗从弹出窗队列中移除
         * @param {string} panelPath
         */


        shiftFromPopupSeq(panelPath) {
          this.hideDialog(panelPath, () => {
            if (this.arrPopupDialog[0] && this.arrPopupDialog[0].panelPath === panelPath) {
              this.arrPopupDialog.shift();
              this.checkPopupSeq();
            }
          });
        }
        /**
         * 检查当前是否需要弹窗
         */


        checkPopupSeq() {
          if (this.arrPopupDialog.length > 0) {
            var first = this.arrPopupDialog[0];

            if (!first.isShow) {
              this.showDialog(first.panelPath, first.param);
              this.arrPopupDialog[0].isShow = true;
            }
          }
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }

        /**
         * 显示提示
         * @param {String} content
         * @param {Function} cb
         */


        showTips(content, cb) {
          var now = Date.now();

          if (now - this.showTipsTime < SHOW_STR_INTERVAL_TIME) {
            var spareTime = SHOW_STR_INTERVAL_TIME - (now - this.showTipsTime);
            var self = this;
            setTimeout(function (tipsLabel, callback) {
              self._showTipsAni(tipsLabel, callback);
            }.bind(this, content, cb), spareTime);
            this.showTipsTime = now + spareTime;
          } else {
            this._showTipsAni(content, cb);

            this.showTipsTime = now;
          }
        }
        /**
         * 内部函数
         * @param {String} content
         * @param {Function} cb
         */


        _showTipsAni(content, cb) {
          //todo 临时添加方案，后期需要将这些代码移到具体界面
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getUIPrefabRes('common/tips', (err, prefab) => {
            if (err) {
              return;
            }

            var tipsNode = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.getNode(prefab, find("Canvas"));
            var tipScript = tipsNode.getComponent(_crd && tips === void 0 ? (_reportPossibleCrUseOftips({
              error: Error()
            }), tips) : tips);
            tipScript.show(content, cb);
          });
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bc3b86fecbfe800e614b3e3152118d835e14b80e.js.map