System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _crd, ccclass, property, util;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1bcdp9t1BPdo0rL87xRyba", "util", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("util", util = (_dec = ccclass("util"), _dec(_class = class util {
        /**
         * !#zh 拷贝object。
         */
        static clone(sObj) {
          if (sObj === null || typeof sObj !== "object") {
            return sObj;
          }

          var s = {};

          if (sObj.constructor === Array) {
            s = [];
          }

          for (var i in sObj) {
            if (sObj.hasOwnProperty(i)) {
              s[i] = this.clone(sObj[i]);
            }
          }

          return s;
        }
        /**
         * 将object转化为数组。
         */


        static objectToArray(srcObj) {
          var resultArr = []; // to array

          for (var key in srcObj) {
            if (!srcObj.hasOwnProperty(key)) {
              continue;
            }

            resultArr.push(srcObj[key]);
          }

          return resultArr;
        }
        /**
         * !#zh 将数组转化为object。
         */


        static arrayToObject(srcObj, objectKey) {
          var resultObj = {}; // to object

          for (var key in srcObj) {
            if (!srcObj.hasOwnProperty(key) || !srcObj[key][objectKey]) {
              continue;
            }

            resultObj[srcObj[key][objectKey]] = srcObj[key];
          }

          return resultObj;
        } // 根据权重,计算随机内容


        static getWeightRandIndex(weightArr, totalWeight) {
          var randWeight = Math.floor(Math.random() * totalWeight);
          var sum = 0;
          var weightIndex = 0;

          for (weightIndex; weightIndex < weightArr.length; weightIndex++) {
            sum += weightArr[weightIndex];

            if (randWeight < sum) {
              break;
            }
          }

          return weightIndex;
        }
        /**
         * 从n个数中获取m个随机数
         * @param {Number} n   总数
         * @param {Number} m    获取数
         * @returns {Array} array   获取数列
         */


        static getRandomNFromM(n, m) {
          var array = [];
          var intRd = 0;
          var count = 0;

          while (count < m) {
            if (count >= n + 1) {
              break;
            }

            intRd = this.getRandomInt(0, n);
            var flag = 0;

            for (var i = 0; i < count; i++) {
              if (array[i] === intRd) {
                flag = 1;
                break;
              }
            }

            if (flag === 0) {
              array[count] = intRd;
              count++;
            }
          }

          return array;
        }

        static getRandomInt(min, max) {
          var r = Math.random();
          var rr = r * (max - min + 1) + min;
          return Math.floor(rr);
        }

        static getStringLength(render) {
          var strArr = render;
          var len = 0;

          for (var i = 0, n = strArr.length; i < n; i++) {
            var val = strArr.charCodeAt(i);

            if (val <= 255) {
              len = len + 1;
            } else {
              len = len + 2;
            }
          }

          return Math.ceil(len / 2);
        }
        /**
         * 判断传入的参数是否为空的Object。数组或undefined会返回false
         * @param obj
         */


        static isEmptyObject(obj) {
          var result = true;

          if (obj && obj.constructor === Object) {
            for (var key in obj) {
              if (obj.hasOwnProperty(key)) {
                result = false;
                break;
              }
            }
          } else {
            result = false;
          }

          return result;
        }

        static formatNum(num) {
          // 0 和负数均返回 NaN。特殊处理。
          if (num <= 0) {
            return '0';
          }

          var k = 1000;
          var sizes = ['', '', 'K', 'M', 'B'];
          var i = Math.round(Math.log(num) / Math.log(k));
          return parseInt((num / Math.pow(k, i - 1 < 0 ? 0 : i - 1)).toString(), 10) + sizes[i];
        }
        /**
         * 判断是否是新的一天
         * @param {Object|Number} dateValue 时间对象 todo MessageCenter 与 pve 相关的时间存储建议改为 Date 类型
         * @returns {boolean}
         */


        static isNewDay(dateValue) {
          // todo：是否需要判断时区？
          var oldDate = new Date(dateValue);
          var curDate = new Date();
          var oldYear = oldDate.getFullYear();
          var oldMonth = oldDate.getMonth();
          var oldDay = oldDate.getDate();
          var curYear = curDate.getFullYear();
          var curMonth = curDate.getMonth();
          var curDay = curDate.getDate();

          if (curYear > oldYear) {
            return true;
          } else {
            if (curMonth > oldMonth) {
              return true;
            } else {
              if (curDay > oldDay) {
                return true;
              }
            }
          }

          return false;
        }

        static getPropertyCount(o) {
          var n,
              count = 0;

          for (n in o) {
            if (o.hasOwnProperty(n)) {
              count++;
            }
          }

          return count;
        }
        /**
         * 返回一个差异化数组（将array中diff里的值去掉）
         * @param array
         * @param diff
         */


        static difference(array, diff) {
          var result = [];

          if (array.constructor !== Array || diff.constructor !== Array) {
            return result;
          }

          var length = array.length;

          for (var i = 0; i < length; i++) {
            if (diff.indexOf(array[i]) === -1) {
              result.push(array[i]);
            }
          }

          return result;
        } // 模拟传msg的uuid


        static simulationUUID() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          }

          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }

        static trim(str) {
          return str.replace(/(^\s*)|(\s*$)/g, "");
        }
        /**
         * 判断当前时间是否在有效时间内
         * @param {String|Number} start 起始时间。带有时区信息
         * @param {String|Number} end 结束时间。带有时区信息
         */


        static isNowValid(start, end) {
          var startTime = new Date(start);
          var endTime = new Date(end);
          var result = false;

          if (startTime.getDate() + '' !== 'NaN' && endTime.getDate() + '' !== 'NaN') {
            var curDate = new Date();
            result = curDate < endTime && curDate > startTime;
          }

          return result;
        }

        static getDeltaDays(start, end) {
          var startData = new Date(start);
          var endData = new Date(end);
          var startYear = startData.getFullYear();
          var startMonth = startData.getMonth() + 1;
          var startDate = startData.getDate();
          var endYear = endData.getFullYear();
          var endMonth = endData.getMonth() + 1;
          var endDate = endData.getDate();
          start = new Date(startYear + '/' + startMonth + '/' + startDate + ' GMT+0800').getTime();
          end = new Date(endYear + '/' + endMonth + '/' + endDate + ' GMT+0800').getTime();
          var deltaTime = end - start;
          return Math.floor(deltaTime / (24 * 60 * 60 * 1000));
        }

        static getMin(array) {
          var result = 0;

          if (array.constructor === Array) {
            var length = array.length;

            for (var i = 0; i < length; i++) {
              if (i === 0) {
                result = Number(array[0]);
              } else {
                result = result > Number(array[i]) ? Number(array[i]) : result;
              }
            }
          }

          return result;
        }

        static formatTwoDigits(time) {
          return (Array(2).join('0') + time).slice(-2);
        }

        static formatDate(date, fmt) {
          var o = {
            "M+": date.getMonth() + 1,
            //月份
            "d+": date.getDate(),
            //日
            "h+": date.getHours(),
            //小时
            "m+": date.getMinutes(),
            //分
            "s+": date.getSeconds(),
            //秒
            "q+": Math.floor((date.getMonth() + 3) / 3),
            //季度
            "S": date.getMilliseconds() //毫秒

          };
          if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));

          for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? "" + o[k] : ("00" + o[k]).substr(("" + o[k]).length));
          }

          return fmt;
        }
        /**
         * 获取格式化后的日期（不含小时分秒）
         */


        static getDay() {
          var date = new Date();
          return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        }
        /**
         * 格式化钱数，超过10000 转换位 10K   10000K 转换为 10M
         */


        static formatMoney(money) {
          var arrUnit = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B', 'N', 'D'];
          var strValue = '';

          for (var idx = 0; idx < arrUnit.length; idx++) {
            if (money >= 10000) {
              money /= 1000;
            } else {
              strValue = Math.floor(money) + arrUnit[idx];
              break;
            }
          }

          if (strValue === '') {
            strValue = Math.floor(money) + 'U'; //超过最大值就加个U
          }

          return strValue;
        }
        /**
         * 根据剩余秒数格式化剩余时间 返回 HH:MM:SS
         * @param {Number} leftSec
         */


        static formatTimeForSecond(leftSec) {
          var timeStr = '';
          var sec = leftSec % 60;
          var leftMin = Math.floor(leftSec / 60);
          leftMin = leftMin < 0 ? 0 : leftMin;
          var hour = Math.floor(leftMin / 60);
          var min = leftMin % 60;

          if (hour > 0) {
            timeStr += hour > 9 ? hour.toString() : '0' + hour;
            timeStr += ':';
          }

          timeStr += min > 9 ? min.toString() : '0' + min;
          timeStr += ':';
          timeStr += sec > 9 ? sec.toString() : '0' + sec;
          return timeStr;
        }
        /**
         *  根据剩余毫秒数格式化剩余时间 返回 HH:MM:SS
         *
         * @param {Number} ms
         */


        static formatTimeForMillisecond(ms) {
          var second = Math.floor(ms / 1000 % 60);
          var minute = Math.floor(ms / 1000 / 60 % 60);
          var hour = Math.floor(ms / 1000 / 60 / 60);
          var strSecond = second < 10 ? '0' + second : second;
          var strMinute = minute < 10 ? '0' + minute : minute;
          var strHour = hour < 10 ? '0' + hour : hour;
          return strSecond + ":" + strMinute + ":" + strHour;
        }
        /**
         * TODO 需要将pako进行引入，目前已经去除了压缩算法的需要，如需要使用需引入库文件
         * 将字符串进行压缩
         * @param {String} str
         */


        static zip(str) {
          var binaryString = pako.gzip(encodeURIComponent(str), {
            to: 'string'
          }); // @ts-ignore

          return this.base64encode(binaryString);
        }

        static rand(arr) {
          var arrClone = this.clone(arr); // 首先从最大的数开始遍历，之后递减

          for (var i = arrClone.length - 1; i >= 0; i--) {
            // 随机索引值randomIndex是从0-arrClone.length中随机抽取的
            var randomIndex = Math.floor(Math.random() * (i + 1)); // 下面三句相当于把从数组中随机抽取到的值与当前遍历的值互换位置

            var itemIndex = arrClone[randomIndex];
            arrClone[randomIndex] = arrClone[i];
            arrClone[i] = itemIndex;
          } // 每一次的遍历都相当于把从数组中随机抽取（不重复）的一个元素放到数组的最后面（索引顺序为：len-1,len-2,len-3......0）


          return arrClone;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6a11f97ff869f724325a4672381f0ea890f2016c.js.map