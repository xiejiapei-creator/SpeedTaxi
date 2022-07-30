System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, Enum, macro, fightConstants, resourceUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, ROAD_POINT_TYPE, ROAD_MOVE_TYPE, roadPoint;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOffightConstants(extras) {
    _reporterNs.report("fightConstants", "./fightConstants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  _export({
    ROAD_POINT_TYPE: void 0,
    ROAD_MOVE_TYPE: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Enum = _cc.Enum;
      macro = _cc.macro;
    }, function (_unresolved_2) {
      fightConstants = _unresolved_2.fightConstants;
    }, function (_unresolved_3) {
      resourceUtil = _unresolved_3.resourceUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "953fazcJb1LuJlDQlkFCkFG", "roadPoint", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      (function (ROAD_POINT_TYPE) {
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["\u666E\u901A\u8282\u70B9"] = (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
          error: Error()
        }), fightConstants) : fightConstants).ROAD_POINT_TYPE.NORMAL] = "\u666E\u901A\u8282\u70B9";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["\u5F00\u59CB\u8282\u70B9"] = (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
          error: Error()
        }), fightConstants) : fightConstants).ROAD_POINT_TYPE.START] = "\u5F00\u59CB\u8282\u70B9";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["\u63A5\u5BA2\u8282\u70B9"] = (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
          error: Error()
        }), fightConstants) : fightConstants).ROAD_POINT_TYPE.GREETING] = "\u63A5\u5BA2\u8282\u70B9";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["\u9001\u5BA2\u8282\u70B9"] = (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
          error: Error()
        }), fightConstants) : fightConstants).ROAD_POINT_TYPE.PLATFORM] = "\u9001\u5BA2\u8282\u70B9";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["\u7ED3\u675F\u8282\u70B9"] = (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
          error: Error()
        }), fightConstants) : fightConstants).ROAD_POINT_TYPE.END] = "\u7ED3\u675F\u8282\u70B9";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["AI\u5F00\u59CB\u8282\u70B9"] = (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
          error: Error()
        }), fightConstants) : fightConstants).ROAD_POINT_TYPE.AI_START] = "AI\u5F00\u59CB\u8282\u70B9";
      })(ROAD_POINT_TYPE || _export("ROAD_POINT_TYPE", ROAD_POINT_TYPE = {}));

      Enum(ROAD_POINT_TYPE);

      (function (ROAD_MOVE_TYPE) {
        ROAD_MOVE_TYPE[ROAD_MOVE_TYPE["\u76F4\u7EBF\u884C\u8D70"] = (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
          error: Error()
        }), fightConstants) : fightConstants).ROAD_MOVE_TYPE.LINE] = "\u76F4\u7EBF\u884C\u8D70";
        ROAD_MOVE_TYPE[ROAD_MOVE_TYPE["\u66F2\u7EBF\u884C\u8D70"] = (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
          error: Error()
        }), fightConstants) : fightConstants).ROAD_MOVE_TYPE.BEND] = "\u66F2\u7EBF\u884C\u8D70";
      })(ROAD_MOVE_TYPE || _export("ROAD_MOVE_TYPE", ROAD_MOVE_TYPE = {}));

      Enum(ROAD_MOVE_TYPE);

      _export("roadPoint", roadPoint = (_dec = ccclass("roadPoint"), _dec2 = property({
        displayName: '类型',
        type: ROAD_POINT_TYPE,
        displayOrder: 1
      }), _dec3 = property({
        displayName: '下一站',
        type: Node,
        displayOrder: 2
      }), _dec4 = property({
        displayName: '行走方式',
        type: ROAD_MOVE_TYPE,
        displayOrder: 3
      }), _dec5 = property({
        displayName: '顺时针',
        displayOrder: 4,
        visible: function visible() {
          return this.moveType === (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).ROAD_MOVE_TYPE.BEND;
        }
      }), _dec6 = property({
        displayName: '顾客方向',
        displayOrder: 4,
        visible: function visible() {
          return this.type === (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).ROAD_POINT_TYPE.GREETING || this.type === (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).ROAD_POINT_TYPE.PLATFORM;
        }
      }), _dec7 = property({
        displayName: '延迟生成/秒',
        displayOrder: 5,
        visible: function visible() {
          return this.type === (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).ROAD_POINT_TYPE.AI_START;
        }
      }), _dec8 = property({
        displayName: '生成频率/秒',
        displayOrder: 5,
        visible: function visible() {
          return this.type === (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).ROAD_POINT_TYPE.AI_START;
        }
      }), _dec9 = property({
        displayName: '车辆行驶速度',
        displayOrder: 5,
        visible: function visible() {
          return this.type === (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).ROAD_POINT_TYPE.AI_START;
        }
      }), _dec10 = property({
        displayName: '产生车辆(,分隔)',
        displayOrder: 5,
        visible: function visible() {
          return this.type === (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).ROAD_POINT_TYPE.AI_START;
        }
      }), _dec(_class = (_class2 = class roadPoint extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "type", _descriptor, this);

          _initializerDefineProperty(this, "next", _descriptor2, this);

          _initializerDefineProperty(this, "moveType", _descriptor3, this);

          _initializerDefineProperty(this, "clockwise", _descriptor4, this);

          _initializerDefineProperty(this, "direction", _descriptor5, this);

          _initializerDefineProperty(this, "delayTime", _descriptor6, this);

          _initializerDefineProperty(this, "genInterval", _descriptor7, this);

          _initializerDefineProperty(this, "carSpeed", _descriptor8, this);

          _initializerDefineProperty(this, "cars", _descriptor9, this);

          this.arrCars = [];
          this._generateCb = null;
        }

        start() {
          // Your initialization goes here.
          this.arrCars = this.cars.split(',');
        }

        startGenerateCar(generateCb) {
          if (this.type !== (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).ROAD_POINT_TYPE.AI_START) {
            return;
          }

          this._generateCb = generateCb;
          this.stopGenerateCar();
          this.scheduleOnce(this.delayStartGen, this.delayTime); //触发资源预加载

          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getCarsBatch(this.arrCars, () => {}, () => {});
        }

        delayStartGen() {
          this.scheduleGen(); //时间到了先生成，然后再过一段时间再生成

          this.schedule(this.scheduleGen, this.genInterval, macro.REPEAT_FOREVER);
        }

        scheduleGen() {
          //随机生成车辆
          var rand = Math.floor(Math.random() * this.arrCars.length);

          if (this._generateCb) {
            this._generateCb(this, this.arrCars[rand]);
          }
        }

        stopGenerateCar() {
          this.unschedule(this.delayStartGen);
          this.unschedule(this.scheduleGen);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ROAD_POINT_TYPE.普通节点;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "next", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moveType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ROAD_MOVE_TYPE.直线行走;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "clockwise", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "delayTime", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "genInterval", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "carSpeed", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.05;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "cars", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '201';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1fd3d41da894f2a6fe21a25188947d53f4923c2e.js.map