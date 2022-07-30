System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, instantiate, localConfig, shopItem, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, MAX_PAGE_SIZE, shopPage;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOflocalConfig(extras) {
    _reporterNs.report("localConfig", "../../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshopItem(extras) {
    _reporterNs.report("shopItem", "./shopItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      localConfig = _unresolved_2.localConfig;
    }, function (_unresolved_3) {
      shopItem = _unresolved_3.shopItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35980PVGZdO6o5scEE8kciy", "shopPage", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      MAX_PAGE_SIZE = 9; //一页最多9个

      _export("shopPage", shopPage = (_dec = ccclass("shopPage"), _dec2 = property(Prefab), _dec(_class = (_class2 = class shopPage extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfShopItem", _descriptor, this);

          this.page = 0;
        }

        // objShopItems: any = {};
        start() {// Your initialization goes here.
        }

        setPage(iPage) {
          this.page = iPage;
        }

        show() {
          var arrCars = (_crd && localConfig === void 0 ? (_reportPossibleCrUseOflocalConfig({
            error: Error()
          }), localConfig) : localConfig).instance.getCars();
          var start = this.page * MAX_PAGE_SIZE;
          var end = (this.page + 1) * MAX_PAGE_SIZE;
          var idxCnt = 0;

          for (var idx = start; idx < end; idx++, idxCnt++) {
            var item = null;

            if (idxCnt < this.node.children.length) {
              item = this.node.children[idxCnt];
            } else {
              item = instantiate(this.pfShopItem);
              item.parent = this.node;
            }

            item.getComponent(_crd && shopItem === void 0 ? (_reportPossibleCrUseOfshopItem({
              error: Error()
            }), shopItem) : shopItem).show(arrCars[idx]);
          }
        }

        unSelectAll() {
          this.node.children.forEach(nodeItem => {
            nodeItem.getComponent(_crd && shopItem === void 0 ? (_reportPossibleCrUseOfshopItem({
              error: Error()
            }), shopItem) : shopItem).select = false;
          });
        }

        unUseAll() {
          this.node.children.forEach(nodeItem => {
            nodeItem.getComponent(_crd && shopItem === void 0 ? (_reportPossibleCrUseOfshopItem({
              error: Error()
            }), shopItem) : shopItem).used = false;
          });
        }

        refreshUse(carId) {
          this.node.children.forEach(nodeItem => {
            var item = nodeItem.getComponent(_crd && shopItem === void 0 ? (_reportPossibleCrUseOfshopItem({
              error: Error()
            }), shopItem) : shopItem);

            if (item.carInfo.ID === carId) {
              item.onItemClick();
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfShopItem", [_dec2], {
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
//# sourceMappingURL=25f88c2f4534fb44bafecbf08a700c488fb82625.js.map