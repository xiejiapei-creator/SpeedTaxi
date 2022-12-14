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
          //????????????????????????
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
          this.playerInfo.level = 1; //??????????????????

          this.playerInfo.gold = 0;
          this.playerInfo.realLevel = 1; //????????????

          this.playerInfo.passCheckPoint = false; //??????????????????20???

          this.playerInfo.createDate = new Date(); //??????????????????

          this.playerInfo.currentCar = (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).INITIAL_CAR; //????????????

          this.playerInfo.cars = [];
          this.playerInfo.cars.push((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).INITIAL_CAR); //???????????????

          this.playerInfo.dictBuyTask = {};
          this.showCar = this.playerInfo.currentCar;
          this.isNewBee = true; //??????????????????

          this.playerInfo.signInInfo = {}; //????????????

          this.playerInfo.dictGetCarTime = {}; //?????????????????????

          if (loginData) {
            for (var key in loginData) {
              this.playerInfo[key] = loginData[key];
            }
          } // if (!this.playerInfo.avatarUrl) {
          //     //?????????????????????
          // }
          // this.playerInfo.dictTask = this.createRandTask();
          // this.playerInfo.taskDate = new Date(); //??????????????????


          this.savePlayerInfoToLocalCache();
        }

        saveAccount(userId) {
          this.userId = userId;
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setUserId(userId);
        }
        /**
         * ??????????????????
         */


        savePlayerInfoToLocalCache() {
          (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
            error: Error()
          }), configuration) : configuration).instance.setConfigData((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).LOCAL_CACHE.PLAYER, JSON.stringify(this.playerInfo));
        }
        /**
         * ????????????????????????????????????????????????????????????????????????????????????????????????????????????
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
         * ??????????????????
         * ??????????????????????????????
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
            // ???????????????????????????????????? gold?????????????????????????????????????????????????????????????????????
            isChanged = true;
            this.playerInfo[key] = value;
          }

          if (isChanged) {
            //?????????????????????localcache
            (_crd && configuration === void 0 ? (_reportPossibleCrUseOfconfiguration({
              error: Error()
            }), configuration) : configuration).instance.setConfigData((_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
              error: Error()
            }), constant) : constant).LOCAL_CACHE.PLAYER, JSON.stringify(this.playerInfo));
          }
        }
        /*********************** ???????????? ***********************/

        /**
         * ??????????????????????????????????????????????????????7????????????
         */


        updateSignInCurrentDay() {
          if (Object.keys(this.playerInfo.signInInfo).length === 0 || this.isNeedRecycleSignInInfo()) {
            this.createNewSignInInfo();
          } else {
            var offectDays = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).getDeltaDays(this.playerInfo.signInInfo.signInDate, Date.now()); //????????????????????????0??????????????????

            if (offectDays === 0) {
              return;
            } //????????????????????????????????????????????????????????????????????????


            this.updateSignInFillSignInDays(0, true); //??????????????????????????????

            this.playerInfo.signInInfo.currentDay += offectDays; //??????????????????????????????????????????????????????????????????

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
         * ????????????????????????
         */


        createNewSignInInfo() {
          if (!this.playerInfo.hasOwnProperty('signInInfo')) {
            this.playerInfo.signInInfo = {};
            this.playerInfo.dictGetCarTime = {};
          }

          var signInInfo = this.playerInfo.signInInfo; //????????????

          signInInfo.createDate = Date.now(); //????????????

          signInInfo.signInDate = Date.now(); //????????????

          signInInfo.currentDay = 1; //??????????????????

          signInInfo.receivedDays = []; //??????????????????????????????

          signInInfo.afterFillSignInDays = [];
          this.savePlayerInfoToLocalCache();
        }
        /**
        * ????????????????????????????????????????????????
        */


        isNeedRecycleSignInInfo() {
          if (!this.playerInfo.signInInfo) {
            this.createNewSignInInfo();
          }

          var isNeedRecycled = false;
          var diffTime = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).getDeltaDays(this.playerInfo.signInInfo.createDate, Date.now()); //??????????????????????????????????????????1???7?????????6?????????8???????????????

          if (diffTime >= (_crd && constant === void 0 ? (_reportPossibleCrUseOfconstant({
            error: Error()
          }), constant) : constant).MAX_SIGNIN_DAY) {
            isNeedRecycled = true;
          }

          return isNeedRecycled;
        }
        /**
         * ??????????????????????????????????????????
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
         * ?????????????????????????????????????????????
         * @param {number} day
         * @param {boolean} isClear ???????????????????????????????????????????????????
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
         * ???????????????????????????????????????????????????????????????
         * ????????????????????????????????????????????????????????????????????????????????????????????????
         * @returns {boolean, boolean} isAllReceived????????????????????? isTodayReceived?????????????????????
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
         * ????????????????????????,???????????????????????????????????????????????????????????????, ?????????????????????????????????????????????????????????????????????
         *
         * @param {number} ID ??????ID
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
         * ???????????????????????????
         * @param ID ??????ID
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
         * ??????????????????????????????
         *
         * @param {number} elapsedTime ?????????????????????,?????????
         * @memberof playerData
         */


        updateLastOnlineRewardTime(elapsedTime) {
          var time = this.getCurrentTime() - elapsedTime * 1000;
          this.playerInfo.onlineRewardTime = time;
          this.savePlayerInfoToLocalCache();
        }
        /**
         * ?????????????????????
         */


        syncServerTime(serverTime) {
          this.serverTime = serverTime;
          this.localTime = Date.now();
        }
        /**
         * ??????????????????
         */


        getCurrentTime() {
          var diffTime = Date.now() - this.localTime;
          return this.serverTime + diffTime;
        }
        /**
         * ????????????????????????????????????
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
         * ?????????????????????
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
         * ??????????????????
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
         * ???????????????
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
        /*********************** ???????????? ***********************/
        //????????????


        passLevel(rewardMoney) {
          this.playerInfo.level++;
          this.playerInfo.gold += rewardMoney;
          console.log("###1 this.playerInfo.level", this.playerInfo.level, 'this.playerInfo.realLevel', this.playerInfo.realLevel); //??????????????????20??????

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
          //??????16-20???????????????,????????????????????????
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