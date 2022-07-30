System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, blockInputEvent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "968ba6c9F9AupY/AbKjAj++", "blockInputEvent", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("blockInputEvent", blockInputEvent = (_dec = ccclass("blockInputEvent"), _dec(_class = class blockInputEvent extends Component {
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;
        start() {// Your initialization goes here.
        }

        onEnable() {
          this.node.on(Node.EventType.TOUCH_START, this.stopPropagation, this);
          this.node.on(Node.EventType.TOUCH_END, this.stopPropagation, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.stopPropagation, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.stopPropagation, this);
          this.node.on(Node.EventType.MOUSE_DOWN, this.stopPropagation, this);
          this.node.on(Node.EventType.MOUSE_ENTER, this.stopPropagation, this);
          this.node.on(Node.EventType.MOUSE_MOVE, this.stopPropagation, this);
          this.node.on(Node.EventType.MOUSE_LEAVE, this.stopPropagation, this);
          this.node.on(Node.EventType.MOUSE_UP, this.stopPropagation, this);
          this.node.on(Node.EventType.MOUSE_WHEEL, this.stopPropagation, this);
        }

        onDisable() {
          this.node.off(Node.EventType.TOUCH_START, this.stopPropagation, this);
          this.node.off(Node.EventType.TOUCH_END, this.stopPropagation, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this.stopPropagation, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this.stopPropagation, this);
          this.node.off(Node.EventType.MOUSE_DOWN, this.stopPropagation, this);
          this.node.off(Node.EventType.MOUSE_ENTER, this.stopPropagation, this);
          this.node.off(Node.EventType.MOUSE_MOVE, this.stopPropagation, this);
          this.node.off(Node.EventType.MOUSE_LEAVE, this.stopPropagation, this);
          this.node.off(Node.EventType.MOUSE_UP, this.stopPropagation, this);
          this.node.off(Node.EventType.MOUSE_WHEEL, this.stopPropagation, this);
        }

        stopPropagation(event) {
          event.propagationImmediateStopped = true;
          event.propagationStopped = true;
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e828237ee2ec4597305912681545f374b43e5812.js.map