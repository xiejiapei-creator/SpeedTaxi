System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, resourceUtil, csvManager, _dec, _class, _class2, _crd, ccclass, property, localConfig;

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "./resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcsvManager(extras) {
    _reporterNs.report("csvManager", "./csvManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICarInfo(extras) {
    _reporterNs.report("ICarInfo", "./constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      resourceUtil = _unresolved_2.resourceUtil;
    }, function (_unresolved_3) {
      csvManager = _unresolved_3.csvManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "acd0cVlaIhLurmAIUS/N+2B", "localConfig", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("localConfig", localConfig = (_dec = ccclass("localConfig"), _dec(_class = (_class2 = class localConfig {
        constructor() {
          this.csvManager = null;
          this.arrCars = [];
          this._callback = null;
          this._skills = {};
          this.currentLoad = 0;
          this.cntLoad = 0;
          this.servers = [];
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new localConfig();
          return this._instance;
        }

        loadConfig(cb) {
          this._callback = cb;
          this.csvManager = new (_crd && csvManager === void 0 ? (_reportPossibleCrUseOfcsvManager({
            error: Error()
          }), csvManager) : csvManager)();
          this.loadCSV();
        }

        loadCSV() {
          //新增数据表 请往该数组中添加....
          var arrTables = ['talk', 'car', 'signIn'];
          this.cntLoad = arrTables.length + 1; //+1主要是后续还有技能配置的加载，特殊处理
          //客户端加载

          arrTables.forEach((tableName, index, array) => {
            (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
              error: Error()
            }), resourceUtil) : resourceUtil).getData(tableName, (err, content) => {
              this.csvManager.addTable(tableName, content);
              this.tryToCallbackOnFinished();
            });
          }); //载入技能配置信息
          // resourceUtil.getData("skills", function (err, content) {
          //     _this._skills = JSON.parse(content);
          //     _this.tryToCallbackOnFinished();
          // });

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getJsonData("servers", (err, content) => {
            this.servers = content;
            this.tryToCallbackOnFinished();
          });
        }

        queryOne(tableName, key, value) {
          return this.csvManager.queryOne(tableName, key, value);
        }

        queryByID(tableName, ID) {
          return this.csvManager.queryByID(tableName, ID);
        }

        getTable(tableName) {
          return this.csvManager.getTable(tableName);
        }

        getTableArr(tableName) {
          return this.csvManager.getTableArr(tableName);
        }

        getCars() {
          if (this.arrCars.length > 0) {
            return this.arrCars;
          }

          let arr = localConfig.instance.getTableArr('car');
          this.arrCars = arr.sort((elementA, elementB) => {
            return elementA.sort - elementB.sort;
          });
          return this.arrCars;
        } // 选出指定表里面所有有 key=>value 键值对的数据


        queryAll(tableName, key, value) {
          return this.csvManager.queryAll(tableName, key, value);
        } // 选出指定表里所有 key 的值在 values 数组中的数据，返回 Object，key 为 ID


        queryIn(tableName, key, values) {
          return this.csvManager.queryIn(tableName, key, values);
        } // 选出符合条件的数据。condition key 为表格的key，value 为值的数组。返回的object，key 为数据在表格的ID，value为具体数据


        queryByCondition(tableName, condition) {
          return this.csvManager.queryByCondition(tableName, condition);
        }

        tryToCallbackOnFinished() {
          if (this._callback) {
            this.currentLoad++;

            if (this.currentLoad >= this.cntLoad) {
              this._callback();
            }
          }
        }

        getCurrentServer() {
          return this.servers[0];
        }

        getVersion() {
          let server = this.getCurrentServer();
          let version = server ? server.version : 'unknown';
          return version;
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b6f4492d6c0b8fae9d11d356b30af9f9fc293020.js.map