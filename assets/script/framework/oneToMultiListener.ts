import { error, _decorator } from "cc";
const { ccclass } = _decorator;

@ccclass("oneToMultiListener")
export class oneToMultiListener {
    static handlers: { [name: string]: { handler: Function, target: any }[] };

    // 注册监听事件
    public static on (eventName: string, handler: Function, target?: any) {
        const objHandler = {handler: handler, target: target};
        let handlerList = this.handlers[eventName];
        if (!handlerList) {
            handlerList = [];
            this.handlers[eventName] = handlerList;
        }

        for (var i = 0; i < handlerList.length; i++) {
            if (!handlerList[i]) {
                handlerList[i] = objHandler;
                return i;
            }
        }

        handlerList.push(objHandler);

        return handlerList.length;
    };

    // 取消监听事件
    public static off (eventName: string, handler: Function, target?: any) {
        const handlerList = this.handlers[eventName];

        if (!handlerList) {
            return;
        }

        for (let i = 0; i < handlerList.length; i++) {
            const oldObj = handlerList[i];
            if (oldObj.handler === handler && (!target || target === oldObj.target)) {
                handlerList.splice(i, 1);
                break;
            }
        }
    };

    // 派发事件
    public static dispatchEvent (eventName: string, ...args: any) {
        const handlerList = this.handlers[eventName];
        if (!handlerList) {
            return;
        }

        for (let i = 0; i < handlerList.length; i++) {
            const objHandler = handlerList[i];
            if (objHandler.handler) {
                objHandler.handler.apply(objHandler.target, args);
            }
        }
    };
};