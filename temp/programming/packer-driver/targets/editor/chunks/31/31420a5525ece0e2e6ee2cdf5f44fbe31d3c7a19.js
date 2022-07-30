System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Label, Component, _dec, _dec2, _class, _crd, ccclass, property, requireComponent, updateValueLabel;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b7cfRS5bdP8qo8rorNgln5", "updateValueLabel", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("updateValueLabel", updateValueLabel = (_dec = ccclass("updateValueLabel"), _dec2 = requireComponent(Label), _dec(_class = _dec2(_class = class updateValueLabel extends Component {
        constructor(...args) {
          super(...args);
          this.isPlaying = false;
          this.startVal = 0;
          this.endVal = 0;
          this.diffVal = 0;
          this.currTime = 0;
          this.changingTime = 0;
          this.label = null;
        }

        start() {// Your initialization goes here.
        }

        playUpdateValue(startVal, endVal, changingTime) {
          this.startVal = startVal;
          this.endVal = endVal;
          this.diffVal = this.endVal - this.startVal;
          this.currTime = 0;
          this.changingTime = changingTime;
          this.label = this.node.getComponent(Label);
          this.label.string = startVal.toString();
          this.isPlaying = true;
        }

        update(dt) {
          if (!this.isPlaying) {
            return;
          }

          if (this.currTime < this.changingTime) {
            this.currTime += dt;
            var currVal = this.startVal + parseInt((this.currTime / this.changingTime * this.diffVal).toString());

            if (currVal < this.startVal) {
              currVal = this.startVal;
            } else if (currVal > this.endVal) {
              currVal = this.endVal;
            }

            this.label.string = `${currVal}`;
            return;
          }

          this.label.string = `${this.endVal}`;
          this.isPlaying = false;
        } // update (deltaTime) {
        //     // Your update function goes here.
        // }


      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=31420a5525ece0e2e6ee2cdf5f44fbe31d3c7a19.js.map