System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, constant, _crd;

  _export("constant", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ad87mpTDFDV7de0xMwTCq4", "constant", undefined);

      _export("constant", constant = class constant {});

      constant.GAME_NAME = 'car';
      constant.LOCAL_CACHE = {
        PLAYER: 'player',
        //玩家基础数据缓存，如金币砖石等信息，暂时由客户端存储，后续改由服务端管理
        SETTINGS: 'settings',
        //设置相关，所有杂项都丢里面进去
        DATA_VERSION: 'dataVersion',
        //数据版本
        ACCOUNT: 'account',
        //玩家账号
        // TMP_DATA: 'tmpData',             //临时数据，不会存储到云盘
        HISTORY: "history",
        //关卡通关数据
        BAG: "bag" //玩家背包，即道具列表，字典类型

      };
      constant.MAX_LEVEL = 20;
      constant.MIN_CAR_ID = 101;
      constant.MAX_CAR_ID = 109;
      constant.AUDIO_SOUND = {
        BACKGROUND: 'background',
        //背景音乐
        CRASH: "crash",
        //撞车
        GET_MONEY: "getMoney",
        //赚钱
        IN_CAR: "inCar",
        //上车
        NEW_ORDER: "newOrder",
        //新订单
        CAR_START: "carStart",
        //车辆启动
        WIN: "win",
        //胜利
        STOP: "stop",
        //刹车
        TOOTING1: "tooting1",
        //鸣笛声1
        TOOTING2: "tooting2" //鸣笛声2

      };
      constant.SIGNIN_REWARD_STATUS = {
        RECEIVED: 0,
        //已经领取的
        RECEIVABLE: 1,
        //可以领取的
        UNRECEIVABLE: 2,
        //已经领取的
        FILL_SIGNIN: 3,
        //补签的
        AFTER_FILL_SIGNIN: 4 //已经补签的

      };
      constant.MAX_SIGNIN_DAY = 7;
      constant.NORMAL_SHOW_TIME = 3;
      constant.NEWBEE_LEVEL = 2;
      constant.REWARD_TYPE = {
        DIAMOND: 1,
        //钻石
        GOLD: 2,
        //金币
        CAR: 3 //车辆

      };
      constant.ONLINE = {
        MAX_TIME: 60,
        //30分钟
        // MAX_TIME: 60,            //4个小时
        PROFIT_PER_SECOND: 0.3,
        //每秒收益
        TIME_PER_CIRCLE: 10 //转一圈所需时间

      };
      constant.SHARE_FUNCTION = {
        BALANCE: 'balance',
        //结算分享 
        RELIVE: 'relive',
        //复活
        OFFLINE: 'offline',
        //离线奖励
        RANK: 'rank',
        //排行榜
        LOTTERY: 'lottery',
        //抽奖
        LOTTERY_REWARD: 'lotteryReward',
        //抽奖奖励，用于双倍分享
        TRIAL: 'trial',
        //试用
        CLICK_BOX: 'clickBox',
        //点开宝箱
        ONLINE: 'online',
        //在线奖励
        SIGNIN: 'signIn',
        //签到
        FILL_SIGNIN: 'fillSignIn',
        //补签
        INVINCIBLE: 'invincible',
        //无敌
        SHOP_SHARE: 'shopShare',
        //商店里头的分享触发的
        SHOP_VIDEO: 'shopVideo' //商店里头的视频触发的

      };
      constant.INITIAL_CAR = 1;
      constant.BUY_CAR_TYPE = {
        GOLD: 1,
        //金币 
        LOGIN: 2,
        //2登录
        CONTINUOUS_LOGIN: 3,
        //3连续登录 
        SHARE: 4,
        //4分享
        VIDEO: 5,
        //5看视频
        GAME: 6,
        //6进行游戏
        INVITE: 7,
        //7邀请好友
        SIGNIN: 8,
        //8签到
        PASS_LEVEL: 9 //9通关获得

      };
      constant.OPEN_REWARD_TYPE = {
        AD: 0,
        SHARE: 1,
        NULL: 2
      };
      constant.GOLD_REWARD = {
        SECOND: 500,
        //第二天
        SEVENT: 500 //第七天

      };
      constant.LOTTERY = {
        MONEY: 2000,
        //1000块钱抽1次
        EXCHANGE: 500 //抽到已有的车自动转换成钱数

      };
      constant.CUSTOMER_MAX_CNT = 2;
      constant.MENU_INIT_BOTTOM = 40;
      constant.MENU_BOTTOM = 250;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1fa660675089e9d527546a0f7c8a68ce3cd6f573.js.map