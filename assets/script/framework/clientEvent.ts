import { _decorator } from "cc";
import { oneToMultiListener } from "./oneToMultiListener";
const { ccclass, property } = _decorator;

@ccclass("clientEvent")
export class clientEvent extends oneToMultiListener {
    static handlers = {};
}
