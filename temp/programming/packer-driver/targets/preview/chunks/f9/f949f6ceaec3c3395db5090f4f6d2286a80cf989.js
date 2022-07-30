System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, director, assetManager, localConfig, playerData, configuration, loading, i18n, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, main;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "./framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerData(extras) {
    _reporterNs.report("playerData", "./framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfiguration(extras) {
    _reporterNs.report("configuration", "./framework/configuration", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloading(extras) {
    _reporterNs.report("loading", "./ui/common/loading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfi18n(extras) {
    _reporterNs.report("i18n", "./i18nMaster/runtime-scripts/LanguageData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      director = _cc.director;
      assetManager = _cc.assetManager;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      playerData = _unresolved_3.playerData;
    }, function (_unresolved_4) {
      configuration = _unresolved_4.configuration;
    }, function (_unresolved_5) {
      loading = _unresolved_5.loading;
    }, function (_unresolved_6) {
      i18n = _unresolved_6.i18n;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5aa7IsWr5A4blPeFPanXM/", "main", undefined);

      ({
        ccclass,
        property
      } = _decorator); // cc.gameSpace = {};
      // cc.gameSpace.TIME_SCALE = 1;
      // cc.gameSpace.isStop = false;
      // cc.gameSpace.isConfigLoadFinished = false;

      (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
        error: Error()
      }), i18n) : i18n).init('zh');

      _export("main", main = (_dec = ccclass("main"), _dec2 = property(Label), _dec3 = property(_crd && loading === void 0 ? (_reportPossibleCrUseOfloading({
        error: Error()
      }), loading) : loading), _dec(_class = (_class2 = class main extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbVersion", _descriptor, this);

          _initializerDefineProperty(this, "loadingUI", _descriptor2, this);

          this.retryTimes = 0;
          this.uid = '';
          this.curProgress = 0;
          this.isLoginFinished = false;
          this.isSubPackageFinished = false;
          this.isConfigLoaded = false;
        }

        start() {
          // profiler.hideStats();
          this.loadingUI.show(); //TODO 后续将由服务器提供时间

          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.syncServerTime(Date.now()); // Your initialization goes here.

          this.curProgress = 5; //起始10%

          this.loadingUI.updateProgress(this.curProgress, (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).t("main.dataLoading"));
          (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.loadConfig(() => {
            // cc.gameSpace.isConfigLoadFinished = true;
            this.lbVersion.string = "Version. " + (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
              error: Error()
            }), localConfig) : localConfig).instance.getVersion();
            this.isConfigLoaded = true;
            this.loadMainScene();
          });
          this.curProgress += 5;

          if (this.loadingUI) {
            this.loadingUI.updateProgress(this.curProgress, (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
              error: Error()
            }), i18n) : i18n).t("main.dataLoadOver"));
          }

          this.curProgress += 5; // this.loadingUI.updateProgress(this.curProgress, '登录中...');
          //其他环境下，直接开始加载资源

          this.curProgress += 15;
          this.loadingUI.updateProgress(this.curProgress, (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).t("main.gameResourceLoading")); //普通用户登录

          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.loadGlobalCache();

          if (!(_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.userId) {
            //需要创建个账号
            this.uid = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
              error: Error()
            }), configuration) : configuration).generateGuestAccount();
          } else {
            this.uid = (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.userId;
          }

          this.startLogin();
          this.downloadGameRes(() => {
            console.log('subpackage download finished!');
            this.isSubPackageFinished = true;
            this.loadMainScene();
          });
        }

        startLogin() {
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setUserId(this.uid);
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.syncServerTime(Date.now());
          this.userLogin();
        }

        userLogin() {
          (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.loadFromCache();

          if ((_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
            error: Error()
          }), playerData) : playerData).instance.playerInfo.createDate === undefined) {
            //表示没有创建过
            (_crd && playerData === void 0 ? (_reportPossibleCrUseOfplayerData({
              error: Error()
            }), playerData) : playerData).instance.createPlayerInfo();
          }

          console.log('login finished!');
          this.isLoginFinished = true;
          this.loadMainScene();
        }

        downloadGameRes(cb) {
          //不用加载子包，直接+30
          this.curProgress += 15;
          this.loadingUI.updateProgress(this.curProgress);
          cb && cb();
        }

        showSubPackageError() {}

        loadGameSubPackage(cb) {
          this.loadingUI.updateProgress(this.curProgress, (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
            error: Error()
          }), i18n) : i18n).t("main.audioResourceLoading"));
          assetManager.loadBundle('resources', err => {
            this.curProgress += 5;
            this.loadingUI.updateProgress(this.curProgress, (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
              error: Error()
            }), i18n) : i18n).t("main.audioResourceLoading"));

            if (err) {
              this.showSubPackageError();
              return console.error(err);
            }

            assetManager.loadBundle('textures', err => {
              this.curProgress += 5;
              this.loadingUI.updateProgress(this.curProgress, (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                error: Error()
              }), i18n) : i18n).t("main.mappingResourceLoading"));

              if (err) {
                this.showSubPackageError();
                return console.error(err);
              }

              assetManager.loadBundle('model', err => {
                this.curProgress += 5;
                this.loadingUI.updateProgress(this.curProgress, (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                  error: Error()
                }), i18n) : i18n).t("main.modelResourceLoading"));

                if (err) {
                  this.showSubPackageError();
                  return console.error(err);
                }

                cb && cb();
              });
            });
          });
        }

        loadMainScene() {
          if (!this.isConfigLoaded || !this.isLoginFinished || !this.isSubPackageFinished) {
            //配置，子包，登录，三项没有加载成功的话要等下一项
            return;
          }

          director.preloadScene('main', err => {
            this.curProgress += 5;
            this.loadingUI.updateProgress(this.curProgress, (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
              error: Error()
            }), i18n) : i18n).t("main.entering"));

            if (!err) {
              director.loadScene('main', function () {});
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbVersion", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadingUI", [_dec3], {
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
//# sourceMappingURL=f949f6ceaec3c3395db5090f4f6d2286a80cf989.js.map