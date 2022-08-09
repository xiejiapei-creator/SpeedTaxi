System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, fightConstants, _crd;

  _export("fightConstants", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dbe36y+LwBGGIL8I87F3O+/", "fightConstants", undefined);

      _export("fightConstants", fightConstants = class fightConstants {});

      fightConstants.ROAD_POINT_TYPE = {
        NORMAL: 1,
        //普通节点
        START: 2,
        //开始节点
        GREETING: 3,
        //接客节点
        PLATFORM: 4,
        //送客节点（用于接客及送客）
        END: 5,
        //结束节点
        AI_START: 6 //机器人开始节点

      };
      fightConstants.ROAD_MOVE_TYPE = {
        LINE: 1,
        //直线行走
        BEND: 2 //曲线行走

      };
      fightConstants.CAR_GROUP = {
        NORMAL: 1,
        MAIN_CAR: 2,
        OTHER_CAR: 4
      };
      fightConstants.CUSTOMER_TALK_TIME = {
        INTO_THE_CAR: 1,
        //上车后
        NEW_ORDER: 2 //有新订单的时候

      };
      fightConstants.CLICK_BOX_REWARD = 300;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07e55032966b5330885c010cf4adb9ab54a47bf0.js.map