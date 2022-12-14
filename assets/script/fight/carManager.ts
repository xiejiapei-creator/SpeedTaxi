import { Vec3 } from 'cc';
import { _decorator, Component, Prefab, Node, instantiate, macro } from "cc";
import { fightMap } from "./fightMap";
import { car } from "./car";
import { customerManager } from "./customerManager";
import { follow } from "./follow";
import { roadPoint } from "./roadPoint";
import { clientEvent } from "../framework/clientEvent";
import { resourceUtil } from "../framework/resourceUtil";
import { poolManager } from "../framework/poolManager";
import { playerData } from "../framework/playerData";
import { constant } from "../framework/constant";
import { localConfig } from "../framework/localConfig";
import { fightConstants } from "./fightConstants";
const { ccclass, property } = _decorator;

@ccclass("carManager")
export class carManager extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    _fightMap!: fightMap;
    _customerManager!: customerManager;

    mainCar!: car;

    @property({type: follow})
    followCamera: follow = null!;

    start () {
        // Your initialization goes here.
    }

    onEnable() {
        clientEvent.on('showInvincible', this.showInvincible, this);
    }

    onDisable() {
        clientEvent.off('showInvincible', this.showInvincible, this);
    }

    showInvincible () {
        if (this.mainCar) {
            this.mainCar.isInvincible = true;
        }
    }

    init (fightMap: fightMap, customerManager: customerManager) {
        this._fightMap = fightMap;
        this._customerManager = customerManager;

        this.creatMainCar();
    }

    creatMainCar () {
        let car = playerData.instance.showCar ? playerData.instance.showCar: constant.INITIAL_CAR;
        let carInfo = localConfig.instance.queryByID('car', car.toString());
        let skin = carInfo ? carInfo.model: constant.MIN_CAR_ID;

        resourceUtil.getCar(skin, (err, pfCar)=>{
            if (err) {
                console.error(err);
                return;
            }

            if (this.mainCar) {
                poolManager.instance.putNode(this.mainCar.node);
            }

            let nodeCar = poolManager.instance.getNode(pfCar, this.node);
            this.mainCar = nodeCar.getComponent('car') as car;
            this.mainCar.markMainCar(true);
            this.mainCar.setEntry(this._fightMap.path[0]);
            this.mainCar.manager = this._customerManager;
            this.mainCar.maxProgress = this._fightMap.levelProgressCnt;
            this.mainCar.setMoveOverListener(()=>{

            });

            this.followCamera.followTarget = nodeCar;
            this.followCamera.showStart();
        })

        // this.nodeTailLine = instantiate(this.pfTailLine);
        // this.nodeTailLine.parent = this.node;
        // this.nodeTailLine.active = false;
    }

    //???????????????ai??????
    preloadAICar (callback: Function) {
        let arrPreload = [];
        for (let idx = 1; idx < this._fightMap.path.length; idx++) {
            let nodeRoadPoint = this._fightMap.path[idx];
            let point = nodeRoadPoint.getComponent(roadPoint)!;

            if (point.type !== fightConstants.ROAD_POINT_TYPE.AI_START) {
                return;
            }

            let arrCars = point.cars.split(',');
            for (let idx = 0; idx < arrCars.length; idx++) {
                if (arrPreload.indexOf(arrCars[idx]) === -1) {
                    arrPreload.push(arrCars[idx]);
                }
            }
        }

        let cur = 0;
        resourceUtil.getCarsBatch(arrPreload, (arg)=>{
            //????????????????????????????????????2%
            cur++;
            if (cur <= 15) {
                clientEvent.dispatchEvent('updateLoading', 2);
            }
        }, ()=>{
            if (cur <= 15) {
                clientEvent.dispatchEvent('updateLoading', 30 - cur * 2);
            }
            callback && callback();
        });
    }

    startGenerateEnemy () {
        this.genAICar = this.genAICar.bind(this);
        for (let idx = 1; idx < this._fightMap.path.length; idx++) {
            let nodeRoadPoint = this._fightMap.path[idx];
            let point = nodeRoadPoint.getComponent(roadPoint)!;
            point.startGenerateCar(this.genAICar);
        }
    }

    stopGenerateEnemy () {
        for (let idx = 1; idx < this._fightMap.path.length; idx++) {
            let nodeRoadPoint = this._fightMap.path[idx];
            let point = nodeRoadPoint.getComponent(roadPoint)!;
            point.stopGenerateCar();
        }
    }

    genAICar (road: roadPoint, randCar: string) {
        //??????????????????
        resourceUtil.getCar(randCar, (err, pfCar)=>{
            if (err) {
                console.error(err);
                return;
            }

            let otherCar = poolManager.instance.getNode(pfCar, this.node);

            let car = otherCar.getComponent('car') as car;
            car.setEntry(road.node);
            car.minSpeed = road.carSpeed;
            car.maxSpeed = road.carSpeed;
            car.startRunning();
            car.markMainCar(false);
            car.setMoveOverListener((car: car)=>{
                poolManager.instance.putNode(car.node);
            });
        });
    }

    reset () {
        this.mainCar.setEntry(this._fightMap.path[0]);
        this.mainCar.maxProgress = this._fightMap.levelProgressCnt;

        this.followCamera.followTarget = this.mainCar.node;

        this.stopGenerateEnemy();

        this.recycleAllAICar();
    }

    /**
     *????????????????????????
     *
     * @memberof carManager
     */
    recycleAllAICar () {
        let arrCars: Node[] = [];
        let children = this.node.children;
        children.forEach((nodeCar)=>{
            arrCars.push(nodeCar);
        }, this);

        arrCars.forEach((nodeCar)=>{
            let car = nodeCar.getComponent('car') as car;
            if (car && !car.isMain) {
                //????????????
                poolManager.instance.putNode(nodeCar);
            }
        });
    }

    /**
     *??????????????????????????????
     *
     * @memberof carManager
     */
    recycleLimitAICar () {
        let arrCars: Node[] = [];
        let children = this.node.children;
        children.forEach((nodeCar)=>{
            arrCars.push(nodeCar);
        }, this);

        arrCars.forEach((nodeCar)=>{
            let car = nodeCar.getComponent('car') as car;
            let distance = Vec3.distance(nodeCar.worldPosition, this.mainCar.node.worldPosition);
            if (car && !car.isMain && Math.abs(distance) <= 5) {
                //????????????
                poolManager.instance.putNode(nodeCar);
            } else {
                car.isOver = false;
                car.startRunning();
            }
        });
    }

    /**
     * ???UI??????????????????????????????
     * @param isRunning
     */
    controlMainCar (isRunning: boolean) {
        if (isRunning) {
            clientEvent.dispatchEvent('showGuide', false);
            this.mainCar.startRunning();
        } else {
            this.mainCar.stopRunning();
        }
    }

    startGame () {
        clientEvent.dispatchEvent('showGuide', true);
        this.mainCar.startWithMinSpeed();
        this.startGenerateEnemy();

        //???????????????????????????AI??????????????????
        this.schedule(this.checkCarIsCloser, 0.2, macro.REPEAT_FOREVER); //???0.2s????????????
    }

    gameOver () {
        this.followCamera.followTarget = null; //???????????????????????????????????????
        this.stopGenerateEnemy();

        //???????????????????????????
        this.unschedule(this.checkCarIsCloser);

        //????????????????????????
        this.node.children.forEach((nodeCar)=>{
            let carScript = nodeCar.getComponent(car)!;
            carScript.stopImmediately();
        });
    }

    changeCameraFollowRotation () {
        //??????????????????
        this.followCamera.isFollowRotation = !this.followCamera.isFollowRotation;
    }

    /**
     * ????????????????????????
     *
     * @memberof carManager
     */
    getCurrentProgress () {

        return {cur: this.mainCar.curProgress, isOver: !this.mainCar.hasCustomer};
    }

    revive () {
        this.recycleLimitAICar();
        this.mainCar.revive();
        this.followCamera.followTarget = this.mainCar.node;
        this.startGenerateEnemy();
    }

    checkCarIsCloser () {
        if (!this.mainCar.isCarMoving) {
            return;//???????????????????????????????????????
        }

        let nodeMainCar = this.mainCar.node;
        let posMainCar = nodeMainCar.getWorldPosition();
        this.node.children.forEach((nodeCar)=>{
            if (nodeCar !== nodeMainCar) {
                let posCar = nodeCar.getWorldPosition();
                let forward = nodeCar.forward;
                posCar.x -= forward.x;
                posCar.z -= forward.z;

                if (Math.abs(posCar.x - posMainCar.x) < 2 && Math.abs(posCar.z - posMainCar.z) < 2) {
                    nodeCar.getComponent(car)!.tooting();
                }
            }
        });
    }
}
