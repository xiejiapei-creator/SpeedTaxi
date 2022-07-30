System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Sprite, Vec3, tween, _dec, _class, _crd, ccclass, property, flyRewardItem;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62dd66o/TBEyqhX8gZkE8/G", "flyRewardItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("flyRewardItem", flyRewardItem = (_dec = ccclass("flyRewardItem"), _dec(_class = class flyRewardItem extends Component {
        constructor(...args) {
          super(...args);
          this.targetPos = new Vec3();
          this.targetRotation = new Vec3(0, 0, 0);
          this.targetScale = new Vec3(1, 1, 1);
          this.posLast = new Vec3();
          this._callback = null;
        }

        start() {// Your initialization goes here.
        }

        show(imgItem, posLast, callback) {
          this.posLast.set(posLast);
          this._callback = callback;
          let sprite = this.node.addComponent(Sprite);
          sprite.trim = false;
          sprite.sizeMode = Sprite.SizeMode.RAW;
          sprite.spriteFrame = imgItem;
          this.node.eulerAngles = new Vec3(0, 0, Math.floor(Math.random() * 360));
          this.targetRotation = new Vec3(this.node.eulerAngles); //每个去配个动作
          // let randDegree = Math.floor(Math.random()*360);

          let randTargetPos = new Vec3(Math.floor(Math.random() * 300) - 150, Math.floor(Math.random() * 300) - 150, 0);
          let costTime = Vec3.distance(randTargetPos, new Vec3(0, 0, 0)) / 400;
          tween(this.targetPos) //    .to(costTime, randTargetPos, {easing: 'Circular-InOut'})
          .to(costTime, randTargetPos, {
            easing: 'cubicInOut'
          }).start();
          let randRotation = 120 + Math.floor(Math.random() * 60);
          randRotation = this.targetRotation.z + Math.floor(Math.random() * 2) === 1 ? randRotation : -randRotation;
          tween(this.targetRotation).to(costTime, new Vec3(0, 0, randRotation)).start();
          tween(this.targetScale).to(costTime * 2 / 3, new Vec3(1.4, 1.4, 1.4)).to(costTime / 3, new Vec3(1, 1, 1)).call(() => {
            this.move2Target();
          }).start();
        }

        move2Target() {
          let move2TargetTime = Vec3.distance(this.node.position, this.posLast) / 1500;
          let delayTime = Math.floor(Math.random() * 10) / 10; //0~1s

          tween(this.targetScale).to(0.3, new Vec3(1.4, 1.4, 1.4)).to(0.7, new Vec3(1, 1, 1)).union().repeat(50).start();
          this.scheduleOnce(() => {
            tween(this.targetPos).to(move2TargetTime, this.posLast).call(() => {
              //飞行结束
              this._callback && this._callback(this.node);
            }).start();
          }, delayTime);
        }

        update(deltaTime) {
          // Your update function goes here.
          this.node.position = this.targetPos;
          this.node.eulerAngles = this.targetRotation;
          this.node.setScale(this.targetScale);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a090f462fe32a5ec06f9a8da8bfe9b87178837f3.js.map