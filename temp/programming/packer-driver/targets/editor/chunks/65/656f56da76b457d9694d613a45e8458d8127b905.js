System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, roadPoint, fightConstants, resourceUtil, poolManager, clientEvent, i18n, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, fightMap;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfroadPoint(extras) {
    _reporterNs.report("roadPoint", "./roadPoint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfROAD_MOVE_TYPE(extras) {
    _reporterNs.report("ROAD_MOVE_TYPE", "./roadPoint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfROAD_POINT_TYPE(extras) {
    _reporterNs.report("ROAD_POINT_TYPE", "./roadPoint", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightConstants(extras) {
    _reporterNs.report("fightConstants", "./fightConstants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresourceUtil(extras) {
    _reporterNs.report("resourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclientEvent(extras) {
    _reporterNs.report("clientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfi18n(extras) {
    _reporterNs.report("i18n", "../i18nMaster/runtime-scripts/LanguageData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      roadPoint = _unresolved_2.roadPoint;
    }, function (_unresolved_3) {
      fightConstants = _unresolved_3.fightConstants;
    }, function (_unresolved_4) {
      resourceUtil = _unresolved_4.resourceUtil;
    }, function (_unresolved_5) {
      poolManager = _unresolved_5.poolManager;
    }, function (_unresolved_6) {
      clientEvent = _unresolved_6.clientEvent;
    }, function (_unresolved_7) {
      i18n = _unresolved_7.i18n;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "273adkVLRhECoDje+nCdBuE", "fightMap", undefined);

      ({
        ccclass,
        property
      } = _decorator); // import {writeFile} from 'fs';

      _export("fightMap", fightMap = (_dec = ccclass("fightMap"), _dec2 = property({
        type: Node,
        displayName: "各路线起点"
      }), _dec(_class = (_class2 = class fightMap extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "path", _descriptor, this);

          this._progressListener = undefined;
          this._completeListener = undefined;
          this.curProgress = 0;
          this.maxProgress = 0;
          this.levelProgressCnt = 0;
        }

        //关卡总进度
        //构建地图
        buildMap(jsonInfo, progressCb, completeCb) {
          this._progressListener = progressCb;
          this._completeListener = completeCb;
          this.objMap = jsonInfo; //构建地面

          this.curProgress = 0;
          this.maxProgress = 6;
          this.buildModel('plane');
          this.buildModel('road');
          this.buildModel('tree');
          this.buildModel('house');
          this.buildModel('sign');
          this.buildPath();
        }

        buildModel(type) {
          if (!this.objMap.hasOwnProperty(type)) {
            //继续
            this.triggerFinished(type);
            return;
          } //搜索所需资源


          let arrName = [];
          let objPlane = this.objMap[type];

          for (let idx = 0; idx < objPlane.children.length; idx++) {
            let name = objPlane.children[idx].name;

            if (arrName.indexOf(name) === -1) {
              arrName.push(name);
            }
          }

          let dictPrefab = {};
          (_crd && resourceUtil === void 0 ? (_reportPossibleCrUseOfresourceUtil({
            error: Error()
          }), resourceUtil) : resourceUtil).getMapObjs(type, arrName, () => {}, (err, arrPrefabs) => {
            if (err) {
              console.error(err);
              return;
            }

            for (let idx = 0; idx < arrPrefabs.length; idx++) {
              let prefab = arrPrefabs[idx];
              dictPrefab[prefab.data.name] = prefab;
            } //开始创建
            //先创建父节点


            let nodeParent = new Node(type);
            nodeParent.parent = this.node;
            nodeParent.setPosition(new Vec3(objPlane.pX, objPlane.pY, objPlane.pZ)); //开始创建子节点

            for (let idx = 0; idx < objPlane.children.length; idx++) {
              let child = objPlane.children[idx];
              let prefab = dictPrefab[child.name];
              let node = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
                error: Error()
              }), poolManager) : poolManager).instance.getNode(prefab, nodeParent);
              node.setPosition(child.pX, child.pY, child.pZ);
              node.eulerAngles = new Vec3(child.rX, child.rY, child.rZ);
              node.setScale(child.sX, child.sY, child.sZ);
            }

            this.triggerFinished(type);
          });
        }

        buildPath() {
          if (!this.objMap.hasOwnProperty('path')) {
            //继续
            return;
          }

          this.path = [];
          this.levelProgressCnt = 0;
          let objPathRoot = this.objMap.path;
          let nodePathRoot = new Node('path');
          nodePathRoot.parent = this.node;
          nodePathRoot.setPosition(objPathRoot.pX, objPathRoot.pY, objPathRoot.pZ); //开始创建各条路径

          for (let idx = 0; idx < objPathRoot.children.length; idx++) {
            let objPath = objPathRoot.children[idx];
            let nodePath = new Node(objPath.name);
            nodePath.parent = nodePathRoot;
            nodePath.setPosition(objPath.pX, objPath.pY, objPath.pZ); //开始递归创建路径

            let start = this.createRoadPoint(objPath.path, nodePath);

            if (start) {
              this.path.push(start);
            }
          }

          this.triggerFinished('path');
        }

        createRoadPoint(objPoint, parent) {
          if (!objPoint) {
            return null;
          }

          let nodeRoadPoint = new Node(objPoint.name);
          nodeRoadPoint.parent = parent;
          nodeRoadPoint.setPosition(objPoint.pX, objPoint.pY, objPoint.pZ);
          nodeRoadPoint.setScale(objPoint.sX, objPoint.sY, objPoint.sZ);
          nodeRoadPoint.eulerAngles = new Vec3(objPoint.rX, objPoint.rY, objPoint.rZ);
          let point = nodeRoadPoint.addComponent(_crd && roadPoint === void 0 ? (_reportPossibleCrUseOfroadPoint({
            error: Error()
          }), roadPoint) : roadPoint);
          point.type = objPoint.type;
          point.moveType = objPoint.moveType;
          point.clockwise = objPoint.clockwise;
          point.direction = objPoint.direction;
          point.delayTime = objPoint.delayTime;
          point.genInterval = objPoint.genInterval;
          point.carSpeed = objPoint.carSpeed;
          point.cars = objPoint.cars;

          if (point.type === (_crd && fightConstants === void 0 ? (_reportPossibleCrUseOffightConstants({
            error: Error()
          }), fightConstants) : fightConstants).ROAD_POINT_TYPE.PLATFORM) {
            this.levelProgressCnt++;
          }

          if (objPoint.next) {
            point.next = this.createRoadPoint(objPoint.next, parent);
          }

          return nodeRoadPoint;
        }

        triggerFinished(type) {
          console.log(`build ${type} finished!`);
          let tips = '';

          switch (type) {
            case 'plane':
              tips = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                error: Error()
              }), i18n) : i18n).t('fightMap.trimTheGround');
              break;

            case 'road':
              tips = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                error: Error()
              }), i18n) : i18n).t('fightMap.pavingTheRoad');
              break;

            case 'tree':
              tips = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                error: Error()
              }), i18n) : i18n).t('fightMap.plantingTree');
              break;

            case 'house':
              tips = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                error: Error()
              }), i18n) : i18n).t('fightMap.decorateHouse');
              break;

            case 'sign':
              tips = (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
                error: Error()
              }), i18n) : i18n).t('fightMap.paintLandmarks');
              break;
          }

          if (tips) {
            (_crd && clientEvent === void 0 ? (_reportPossibleCrUseOfclientEvent({
              error: Error()
            }), clientEvent) : clientEvent).dispatchEvent('updateLoading', 10, tips);
          }

          this.curProgress++;

          if (this._progressListener) {
            this._progressListener(this.curProgress, this.maxProgress);
          }

          if (this.curProgress >= this.maxProgress && this._completeListener) {
            this._completeListener();
          }
        }

        recycle() {
          console.log('recycle map elements...');
          this.recycleModel('plane');
          this.recycleModel('road');
          this.recycleModel('tree');
          this.recycleModel('house');
          this.recycleModel('sign'); //路径属于空节点挂脚本，直接做清除操作

          this.node.removeAllChildren();
        }

        recycleModel(type) {
          let nodeParent = this.node.getChildByName(type);

          if (!nodeParent) {
            return;
          }

          for (let idx = 0; idx < nodeParent.children.length; idx++) {
            let child = nodeParent.children[idx];
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(child);
          }
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "path", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=656f56da76b457d9694d613a45e8458d8127b905.js.map