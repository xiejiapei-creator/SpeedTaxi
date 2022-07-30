System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, configuration, constant, util, localConfig, _dec, _class, _class2, _crd, ccclass, property, playerData;

  function _reportPossibleCrUseOfconfiguration(extras) {
    _reporterNs.report("configuration", "./configuration", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstant(extras) {
    _reporterNs.report("constant", "./constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "./util", _context.meta, extras);
  }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../framework/localConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      configuration = _unresolved_2.configuration;
    }, function (_unresolved_3) {
      constant = _unresolved_3.constant;
    }, function (_unresolved_4) {
      util = _unresolved_4.util;
    }, function (_unresolved_5) {
      localConfig = _unresolved_5.localConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "985d59n5DNIrIcY9mIscZXN", "playerData", undefined);

      ({
        ccclass,
        property
      } = _decorator); // {
      //     level: number,
      //     gold: number,
      //     diamond: number,
      //     realLevel: number,
      //     passCheckPoint: boolean,
      //     createDate: any,
      //     currentCar: number,
      //     cars: number[],
      //     onlineRewardTime: number,
      //     dictBuyTask: { [name: string]: any },
      //     signInInfo: { [name: string]: any },
      //     dictGetCarTime: { [name: string]: any }
      // };

      _export("playerData", playerData = (_dec = ccclass("playerData"), _dec(_class = (_class2 = class playerData extends Component {
        constructor() {
          super(...arguments);
          this.serverTime = 0;
          this.localTime = 0;
          this.showCar = 0;
          this.isComeFromBalance = false;
          this.userId = '';
          this.playerInfo = {};
          this.history = null;
          this.settings = null;
          this.isNewBee = false;
          this.dataVersion = '';
          this.signInInfo = null;
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new playerData();
          return this._instance;
        }

        loadGlobalCache() {
          var userId = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getUserId();

          if (userId) {
            this.userId = userId;
          }
        }

        loadFromCache() {
          //读取玩家基础数据
          this.playerInfo = this.loadDataByKey((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.PLAYER);

          if (this.playerInfo.currentCar) {
            this.showCar = this.playerInfo.currentCar;
          } else {
            this.showCar = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).INITIAL_CAR;
          }

          this.history = this.loadDataByKey((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.HISTORY); // this.bag = this.loadDataByKey(constants.LOCAL_CACHE.BAG);

          this.settings = this.loadDataByKey((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.SETTINGS);
        }

        loadDataByKey(keyName) {
          var ret = {};
          var str = (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.getConfigData(keyName);

          if (str) {
            try {
              ret = JSON.parse(str);
            } catch (e) {
              ret = {};
            }
          }

          return ret;
        }

        createPlayerInfo(loginData) {
          this.playerInfo.level = 1; //默认初始关卡

          this.playerInfo.gold = 0;
          this.playerInfo.realLevel = 1; //真正关卡

          this.playerInfo.passCheckPoint = false; //是否已经通过20关

          this.playerInfo.createDate = new Date(); //记录创建时间

          this.playerInfo.currentCar = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).INITIAL_CAR; //初始车辆

          this.playerInfo.cars = [];
          this.playerInfo.cars.push((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).INITIAL_CAR); //拥有的车辆

          this.playerInfo.dictBuyTask = {};
          this.showCar = this.playerInfo.currentCar;
          this.isNewBee = true; //区分新老玩家

          this.playerInfo.signInInfo = {}; //七日签到

          this.playerInfo.dictGetCarTime = {}; //获得车辆的时间

          if (loginData) {
            for (var key in loginData) {
              this.playerInfo[key] = loginData[key];
            }
          } // if (!this.playerInfo.avatarUrl) {
          //     //随机个头像给他
          // }
          // this.playerInfo.dictTask = this.createRandTask();
          // this.playerInfo.taskDate = new Date(); //任务创建时间


          this.savePlayerInfoToLocalCache();
        }

        saveAccount(userId) {
          this.userId = userId;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setUserId(userId);
        }
        /**
         * 保存玩家数据
         */


        savePlayerInfoToLocalCache() {
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setConfigData((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.PLAYER, JSON.stringify(this.playerInfo));
        }
        /**
         * 当数据同步完毕，即被覆盖的情况下，需要将数据写入到本地缓存，以免数据丢失
         */


        saveAll() {
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setConfigDataWithoutSave((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.PLAYER, JSON.stringify(this.playerInfo));
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setConfigDataWithoutSave((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.HISTORY, JSON.stringify(this.history));
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setConfigDataWithoutSave((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.SETTINGS, JSON.stringify(this.settings)); // configuration.instance.setConfigDataWithoutSave(constant.LOCAL_CACHE.BAG, JSON.stringify(this.bag));

          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setConfigData((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.DATA_VERSION, this.dataVersion);
        }
        /**
         * 更新用户信息
         * 例如钻石，金币，道具
         * @param {String} key
         * @param {Number} value
         */


        updatePlayerInfo(key, value) {
          var isChanged = false;

          if (this.playerInfo.hasOwnProperty(key)) {
            if (typeof value === 'number') {
              isChanged = true;
              this.playerInfo[key] += value;

              if (this.playerInfo[key] < 0) {
                this.playerInfo[key] = 0;
              } //return;

            } else if (typeof value === 'boolean' || typeof value === 'string') {
              isChanged = true;
              this.playerInfo[key] = value;
            }
          } else if (key === 'gold') {
            // 容错处理，仅更新特定数据 gold。谨防用户数据在未知情况下丢失而无法存储到本地
            isChanged = true;
            this.playerInfo[key] = value;
          }

          if (isChanged) {
            //有修改就保存到localcache
            (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
              error: Error()
            }), configuration) : configuration).instance.setConfigData((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).LOCAL_CACHE.PLAYER, JSON.stringify(this.playerInfo));
          }
        }
        /*********************** 七日签到 ***********************/

        /**
         * 更新签到领取日期，补签状态，如果超过7天则轮回
         */


        updateSignInCurrentDay() {
          if (Object.keys(this.playerInfo.signInInfo).length === 0 || this.isNeedRecycleSignInInfo()) {
            this.createNewSignInInfo();
          } else {
            var offectDays = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).getDeltaDays(this.playerInfo.signInInfo.signInDate, Date.now()); //比较两个时间，为0则今天更新过

            if (offectDays === 0) {
              return;
            } //将昨天“补签后”但是没领取奖励重置为“补签”状态


            this.updateSignInFillSignInDays(0, true); //更新领取今日签到信息

            this.playerInfo.signInInfo.currentDay += offectDays; //当测试时间差异的时候将当前的时间设置为第一天

            if (this.playerInfo.signInInfo.currentDay <= 0) {
              this.createNewSignInInfo();
            }

            this.playerInfo.signInInfo.currentDay > (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MAX_SIGNIN_DAY ? (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MAX_SIGNIN_DAY : this.playerInfo.signInInfo.currentDay;
            this.playerInfo.signInInfo.signInDate = Date.now();
          }

          this.savePlayerInfoToLocalCache();
        }
        /**
         * 创建新的签到信息
         */


        createNewSignInInfo() {
          if (!this.playerInfo.hasOwnProperty('signInInfo')) {
            this.playerInfo.signInInfo = {};
            this.playerInfo.dictGetCarTime = {};
          }

          var signInInfo = this.playerInfo.signInInfo; //创建时间

          signInInfo.createDate = Date.now(); //签到时间

          signInInfo.signInDate = Date.now(); //当前天数

          signInInfo.currentDay = 1; //已经领取天数

          signInInfo.receivedDays = []; //补签后可以领取的天数

          signInInfo.afterFillSignInDays = [];
          this.savePlayerInfoToLocalCache();
        }
        /**
        * 是否需要重新开始一个新的签到周期
        */


        isNeedRecycleSignInInfo() {
          if (!this.playerInfo.signInInfo) {
            this.createNewSignInInfo();
          }

          var isNeedRecycled = false;
          var diffTime = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).getDeltaDays(this.playerInfo.signInInfo.createDate, Date.now()); //当前日期与创建日期超过七天，1号7号相差6天，第8天进行更新

          if (diffTime >= (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MAX_SIGNIN_DAY) {
            isNeedRecycled = true;
          }

          return isNeedRecycled;
        }
        /**
         * 更新领取奖励后已领取日期数组
         * @param {Number} day
        */


        updateSignInReceivedDays(day) {
          var receivedDays = this.playerInfo.signInInfo.receivedDays;

          if (Array.isArray(receivedDays) && receivedDays.includes(day)) {
            return;
          }

          receivedDays.push(Number(day));
          this.savePlayerInfoToLocalCache();
        }
        /**
         * 更新补签后变为可领取的日期数组
         * @param {number} day
         * @param {boolean} isClear 是否清空昨天补签完后还未领取的数组
         */


        updateSignInFillSignInDays(day, isClear) {
          var afterFillSignInDays = this.playerInfo.signInInfo.afterFillSignInDays;

          if (!isClear) {
            if (Array.isArray(afterFillSignInDays) && afterFillSignInDays.includes(day)) {
              return;
            }

            afterFillSignInDays.push(Number(day));
          } else {
            afterFillSignInDays.length = 0;
          }

          this.savePlayerInfoToLocalCache();
        }
        /**
         * 返回“当天”还有“全部”的签到奖励领取情况
         * 用来判断“显示领取按钮”，“登陆自动显示签到界面”和“红点提示”
         * @returns {boolean, boolean} isAllReceived是否全部领取， isTodayReceived是否当天已领取
         */


        getSignInReceivedInfo() {
          if (!this.playerInfo.signInInfo) {
            this.createNewSignInInfo();
          }

          var signInInfo = this.playerInfo.signInInfo;
          var isAllReceived = false;
          var isTodayReceived = false;

          if (signInInfo.receivedDays.length < signInInfo.currentDay) {
            isAllReceived = false;
          } else {
            isAllReceived = true;
          }

          if (signInInfo.receivedDays.includes(signInInfo.currentDay)) {
            isTodayReceived = true;
          } else {
            isTodayReceived = false;
          }

          return {
            isAllReceived,
            isTodayReceived
          };
        }
        /**
         * 判断如果已有该车,且还在第一次得到车的周期内则显示“车，领取, 暂不领取”，否则为“金币，双倍领取，普通领取”
         *
         * @param {number} ID 车的ID
         * @returns
         * @memberof playerData
         */


        isHadCarAndDuringPeriod(ID) {
          var createDate = this.playerInfo.signInInfo.createDate;

          if (!this.playerInfo.dictGetCarTime) {
            this.playerInfo.dictGetCarTime = {};
          }

          var getCarDate = this.playerInfo.dictGetCarTime[ID];
          var isHadCar = this.playerInfo.cars.indexOf(ID) !== -1;
          return isHadCar && getCarDate && getCarDate < createDate;
        }
        /**
         * 更新汽车的领取信息
         * @param ID 车的ID
         */


        updateDictGetCarTime(ID) {
          if (!this.playerInfo.dictGetCarTime) {
            this.playerInfo.dictGetCarTime = {};
          }

          this.playerInfo.dictGetCarTime[ID] = this.playerInfo.signInInfo.createDate;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setConfigData((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.PLAYER, JSON.stringify(this.playerInfo));
        }
        /**********************************************/


        getLastOnlineRewardTime() {
          if (this.playerInfo.onlineRewardTime) {
            return this.playerInfo.onlineRewardTime;
          }

          this.playerInfo.onlineRewardTime = this.getCurrentTime();
          this.savePlayerInfoToLocalCache();
          return this.playerInfo.onlineRewardTime;
        }
        /**
         * 更新最后一次领取时间
         *
         * @param {number} elapsedTime 已经度过的时间,单位秒
         * @memberof playerData
         */


        updateLastOnlineRewardTime(elapsedTime) {
          var time = this.getCurrentTime() - elapsedTime * 1000;
          this.playerInfo.onlineRewardTime = time;
          this.savePlayerInfoToLocalCache();
        }
        /**
         * 同步服务器时间
         */


        syncServerTime(serverTime) {
          this.serverTime = serverTime;
          this.localTime = Date.now();
        }
        /**
         * 获取当前时间
         */


        getCurrentTime() {
          var diffTime = Date.now() - this.localTime;
          return this.serverTime + diffTime;
        }
        /**
         * 检查玩家是否拥有对应车辆
         *
         * @param {number} carID
         * @memberof playerData
         */


        hasCar(carID) {
          if (carID === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).INITIAL_CAR) {
            return true;
          }

          if (!this.playerInfo.cars) {
            this.playerInfo.cars = [(_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).INITIAL_CAR];
          }

          return this.playerInfo.cars.indexOf(carID) !== -1;
        }

        hasCarCanReceived() {
          var arrCars = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCars();

          for (var idx = 0; idx < arrCars.length; idx++) {
            var carInfo = arrCars[idx];

            if (carInfo.type === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).BUY_CAR_TYPE.GOLD || carInfo.type === (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).BUY_CAR_TYPE.SIGNIN) {
              continue;
            }

            if (this.hasCar(carInfo.ID)) {
              continue;
            }

            if (!this.playerInfo.dictBuyTask || !this.playerInfo.dictBuyTask.hasOwnProperty(carInfo.type)) {
              continue;
            }

            if (this.playerInfo.dictBuyTask[carInfo.type] >= carInfo.num) {
              return true;
            }
          }

          return false;
        }

        finishBuyTask(type, value, isAdd) {
          if (!this.playerInfo.dictBuyTask) {
            this.playerInfo.dictBuyTask = {};
          }

          if (!this.playerInfo.dictBuyTask.hasOwnProperty(type) || !isAdd) {
            this.playerInfo.dictBuyTask[type] = value;
          } else {
            this.playerInfo.dictBuyTask[type] += value;
          }

          this.savePlayerInfoToLocalCache();
        }
        /**
         * 获取任务的进度
         *
         * @param {*} type
         * @memberof playerData
         */


        getBuyTypeProgress(type) {
          if (this.playerInfo.dictBuyTask && this.playerInfo.dictBuyTask.hasOwnProperty(type)) {
            return this.playerInfo.dictBuyTask[type];
          }

          return 0;
        }
        /**
         * 获取当前车辆
         *
         * @returns
         * @memberof playerData
         */


        getCurrentCar() {
          if (!this.playerInfo.currentCar) {
            this.playerInfo.currentCar = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).INITIAL_CAR;
          }

          return this.playerInfo.currentCar;
        }
        /**
         *
         * 使用某辆车
         * @param {*} carId
         * @returns
         * @memberof playerData
         */


        useCar(carId) {
          if (!this.hasCar(carId)) {
            return false;
          }

          this.playerInfo.currentCar = carId;
          this.savePlayerInfoToLocalCache();
          this.showCar = this.playerInfo.currentCar;
          return true;
        }

        buyCar(carId) {
          if (this.playerInfo.cars.indexOf(carId) !== -1) {
            return true;
          }

          this.playerInfo.cars.push(carId);
          this.savePlayerInfoToLocalCache();
          return true;
        }

        clear() {
          this.playerInfo = {};
          this.settings = {};
          this.saveAll();
        }
        /*********************** 战斗相关 ***********************/
        //关卡完成


        passLevel(rewardMoney) {
          this.playerInfo.level++;
          this.playerInfo.gold += rewardMoney;
          console.log("###1 this.playerInfo.level", this.playerInfo.level, 'this.playerInfo.realLevel', this.playerInfo.realLevel); //标记已经通过20关了

          if (!this.playerInfo.passCheckPoint) {
            if (this.playerInfo.level >= (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).MAX_LEVEL) {
              this.playerInfo.realLevel = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MAX_LEVEL;
              this.playerInfo.level = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
                error: Error()
              }), constant) : constant).MAX_LEVEL;
              this.playerInfo.passCheckPoint = true;
              console.log("###2 this.playerInfo.level", this.playerInfo.level, 'this.playerInfo.realLevel', this.playerInfo.realLevel);
            } else {
              this.playerInfo.realLevel = this.playerInfo.level;
            }
          } else {
            this.playerInfo.realLevel = this.getRandLevel();
            console.log("###3 this.playerInfo.level", this.playerInfo.level, 'this.playerInfo.realLevel', this.playerInfo.realLevel);
          }

          this.savePlayerInfoToLocalCache();
        }

        getRandLevel() {
          //随机16-20关中的一个,但不跟现在的一样
          var level = -1;

          while (level === -1) {
            var randLevel = 16 + Math.floor(Math.random() * 5);

            if (randLevel !== this.playerInfo.realLevel) {
              level = randLevel;
            }
          }

          return level;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=54a63f9b17a3ab7592a19158e71eb2f2aec8e7da.js.map