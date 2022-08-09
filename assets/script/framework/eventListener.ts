import { error, log, _decorator } from "cc";
const { ccclass, property } = _decorator;

interface IEvent{
    handler: Function;
    target?: Node
}

type EventList = { [name: string]: IEvent};

@ccclass("oneToOneListener")
class oneToOneListener {
    handle: EventList = {};

    // 注册监听事件
    on (eventName: string, handler: Function, target: Node) {
        this.handle[eventName] = { handler: handler, target: target };
    }

    // 取消监听事件
    off (eventName: string, handler: Function) {
        const oldObj = this.handle[eventName];
        if (oldObj && oldObj.handler && oldObj.handler === handler) {
            delete this.handle[eventName];
        }
    }

    // 派发事件
    dispatchEvent (eventName: string) {
        const objHandler = this.handle[eventName];

        if (objHandler.handler) {
            objHandler.handler.apply(objHandler.target);
        } else {
            log("not register " + eventName + "    callback func");
        }
    }
};


@ccclass("eventListener")
export class eventListener {
    public static getBaseClass (type:string) {
        return oneToOneListener;
    }
}