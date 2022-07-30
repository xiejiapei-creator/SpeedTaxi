System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _class2, _crd, ccclass, lodash;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8cbacDdVTBOgZQMyvQzOeAz", "lodash", undefined);

      ({
        ccclass
      } = _decorator);

      _export("lodash", lodash = (_dec = ccclass("lodash"), _dec(_class = (_class2 = class lodash {
        /* class member could be defined like this */
        // dummy = '';
        static find(collection, predicate) {
          var result;

          if (!Array.isArray(collection)) {
            collection = this.toArray(collection);
          }

          result = collection.filter(predicate);

          if (result.length) {
            return result[0];
          }

          return undefined;
        }

        static forEach(collection, iteratee) {
          if (!Array.isArray(collection)) {
            var _array = this.toArrayKey(collection);

            _array.forEach(function (value, index, arr) {
              var key1 = value['key'];
              var value1 = value['value'];
              iteratee(value1, key1, collection);
            });
          } else {
            collection.forEach(iteratee);
          }
        }

        static cloneDeep(sObj) {
          if (sObj === null || typeof sObj !== "object") {
            return sObj;
          }

          var s = {};

          if (sObj.constructor === Array) {
            s = [];
          }

          for (var i in sObj) {
            if (sObj.hasOwnProperty(i)) {
              s[i] = this.cloneDeep(sObj[i]);
            }
          }

          return s;
        }

        static map(collection, iteratee) {
          if (!Array.isArray(collection)) {
            collection = this.toArray(collection);
          }

          var arr = [];
          collection.forEach(function (value, index, array) {
            arr.push(iteratee(value, index, array));
          });
          return arr;
        }

        static random(min, max) {
          var r = Math.random();
          var rr = r * (max - min + 1) + min;
          return Math.floor(rr);
        }

        static toArrayKey(srcObj) {
          var resultArr = []; // to array

          for (var _key in srcObj) {
            if (!srcObj.hasOwnProperty(_key)) {
              continue;
            }

            resultArr.push({
              key: _key,
              value: srcObj[_key]
            });
          }

          return resultArr;
        }

        static toArray(srcObj) {
          var resultArr = []; // to array

          for (var _key2 in srcObj) {
            if (!srcObj.hasOwnProperty(_key2)) {
              continue;
            }

            resultArr.push(srcObj[_key2]);
          }

          return resultArr;
        }

        static filter(collection, iteratees) {
          if (!Array.isArray(collection)) {
            collection = this.toArray(collection);
          }

          return collection.filter(iteratees);
        }

        static isEqual(x, y) {
          var in1 = x instanceof Object;
          var in2 = y instanceof Object;

          if (!in1 || !in2) {
            return x === y;
          }

          if (Object.keys(x).length !== Object.keys(y).length) {
            return false;
          }

          for (var p in x) {
            var a = x[p] instanceof Object;
            var b = y[p] instanceof Object;

            if (a && b) {
              return this.isEqual(x[p], y[p]);
            } else if (x[p] !== y[p]) {
              return false;
            }
          }

          return true;
        }

        static pullAllWith(array, value, comparator) {
          value.forEach(function (item) {
            var res = array.filter(function (n) {
              return comparator(n, item);
            });
            res.forEach(function (item) {
              var index = array.indexOf(item);

              if (array.indexOf(item) !== -1) {
                array.splice(index, 1);
              }
            });
          });
          return array;
        }

        static now() {
          return Date.now();
        }

        static pullAll(array, value) {
          value.forEach(function (item) {
            var index = array.indexOf(item);

            if (array.indexOf(item) !== -1) {
              array.splice(index, 1);
            }
          });
          return array;
        }

        static forEachRight(collection, iteratee) {
          if (!Array.isArray(collection)) {
            collection = this.toArray(collection);
          }

          for (var i = collection.length - 1; i >= 0; i--) {
            var ret = iteratee(collection[i]);
            if (!ret) break;
          }
        }

        static startsWith(str, target, position) {
          str = str.substr(position);
          return str.startsWith(target);
        }

        static endsWith(str, target, position) {
          str = str.substr(position);
          return str.endsWith(target);
        }

        static remove(array, predicate) {
          var result = [];
          var indexes = [];
          array.forEach(function (item, index) {
            if (predicate(item)) {
              result.push(item);
              indexes.push(index);
            }
          });
          this.basePullAt(array, indexes);
          return result;
        }

        static basePullAt(array, indexes) {
          var length = array ? indexes.length : 0;
          var lastIndex = length - 1;
          var previous;

          while (length--) {
            var index = indexes[length];

            if (length === lastIndex || index !== previous) {
              previous = index;
              Array.prototype.splice.call(array, index, 1);
            }
          }

          return array;
        }

        static findIndex(array, predicate, fromIndex) {
          array = array.slice(fromIndex);
          var i;

          if (typeof predicate === "function") {
            for (i = 0; i < array.length; i++) {
              if (predicate(array[i])) {
                return i;
              }
            }
          } else if (Array.isArray(predicate)) {
            for (i = 0; i < array.length; i++) {
              var key = predicate[0];
              var vaule = true;

              if (predicate.length > 1) {
                vaule = predicate[1];
              }

              if (array[i][key] === vaule) {
                return i;
              }
            }
          } else {
            for (i = 0; i < array.length; i++) {
              if (array[i] === predicate) {
                return i;
              }
            }
          }

          return -1;
        }

        static concat() {
          var length = arguments.length;

          if (!length) {
            return [];
          }

          var array = arguments[0];
          var index = 1;

          while (index < length) {
            array = array.concat(arguments[index]);
            index++;
          }

          return array;
        }

        static isNumber(value) {
          return typeof value === 'number';
        }

        static indexOf(array, value, fromIndex) {
          array = array.slice(fromIndex);
          return array.indexOf(value);
        }

        static join(array, separator) {
          if (array === null) return '';
          var result = '';
          array.forEach(function (item) {
            result += item + separator;
          });
          return result.substr(0, result.length - 1);
        }

        static split(str, separator, limit) {
          return str.split(separator, limit);
        }

        static max(array) {
          if (array && array.length) {
            var result;

            for (var i = 0; i < array.length; i++) {
              if (i === 0) {
                result = array[0];
              } else if (result < array[i]) {
                result = array[i];
              }
            }

            return result;
          }

          return undefined;
        }

        static drop(array, n) {
          var length = array === null ? 0 : array.length;

          if (!length) {
            return [];
          }

          return array.slice(n);
        }

        static flattenDeep(arr) {
          return arr.reduce((prev, cur) => {
            return prev.concat(
            /*Array.isArray(cur) ? this.flattenDeep(cur) :*/
            cur);
          });
        }

        static uniq(array) {
          var result = [];
          array.forEach(function (item) {
            if (result.indexOf(item) === -1) {
              result.push(item);
            }
          });
          return result;
        }

        static isNaN(value) {
          // An `NaN` primitive is the only value that is not equal to itself.
          // Perform the `toStringTag` check first to avoid errors with some
          // ActiveX objects in IE.
          return this.isNumber(value) && value !== +value;
        }

        static chunk(array, size) {
          var length = array === null ? 0 : array.length;

          if (!length || size < 1) {
            return [];
          }

          var result = [];

          while (array.length > size) {
            result.push(array.slice(0, size));
            array = array.slice(size);
          }

          result.push(array);
          return result;
        }

        static toFinite(value) {
          var INFINITY = 1 / 0;
          var MAX_INTEGER = 1.7976931348623157e+308;

          if (!value) {
            return value === 0 ? value : 0;
          }

          value = Number(value);

          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }

          return value === value ? value : 0;
        }

        static baseRange(start, end, step, fromRight) {
          var nativeMax = Math.max;
          var nativeCeil = Math.ceil;
          var index = -1,
              length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
              result = Array(length);

          while (length--) {
            result[fromRight ? length : ++index] = start;
            start += step;
          }

          return result;
        }

        static isObject(value) {
          var type = typeof value;
          return value !== null && (type === 'object' || type === 'function');
        }

        static isLength(value) {
          return typeof value === 'number' && value > -1 && value % 1 === 0 && value <= lodash.MAX_SAFE_INTEGER;
        }

        static isArrayLike(value) {
          return value !== null && this.isLength(value.length)
          /*&& !isFunction(value)*/
          ;
        }

        static eq(value, other) {
          return value === other || value !== value && other !== other;
        }

        static isIndex(value, length) {
          var type = typeof value;
          length = length === null ? lodash.MAX_SAFE_INTEGER : length;
          var reIsUint = /^(?:0|[1-9]\d*)$/;
          return !!length && (type === 'number' || type !== 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 === 0 && value < length;
        }

        static isIterateeCall(value, index, object) {
          if (!this.isObject(object)) {
            return false;
          }

          var type = typeof index;

          if (type === 'number' ? this.isArrayLike(object) && this.isIndex(index, object.length) : type === 'string' && index in object) {
            return this.eq(object[index], value);
          }

          return false;
        }

        static createRange(fromRight) {
          return ((start, end, step) => {
            if (step && typeof step !== 'number' && this.isIterateeCall(start, end, step)) {
              end = step = undefined;
            } // Ensure the sign of `-0` is preserved.


            start = this.toFinite(start);

            if (end === undefined) {
              end = start;
              start = 0;
            } else {
              end = this.toFinite(end);
            }

            step = step === undefined ? start < end ? 1 : -1 : this.toFinite(step);
            return this.baseRange(start, end, step, fromRight);
          }).bind(this);
        }

        static maxBy(array, predicate) {
          if (array && array.length) {
            var result = -1;
            var objResult = -1;

            for (var i = 0; i < array.length; i++) {
              if (i === 0) {
                result = predicate(array[0]);
                objResult = array[0];
              } else if (result < array[i]) {
                result = array[i];
                objResult = array[i];
              }
            }

            return objResult;
          }

          return undefined;
        }

        static minBy(array, predicate) {
          if (array && array.length) {
            var result = -1;
            var objResult = -1;

            for (var i = 0; i < array.length; i++) {
              if (i === 0) {
                result = predicate(array[0]);
                objResult = array[0];
              } else if (result > array[i]) {
                result = predicate(array[i]);
                objResult = array[i];
              }
            }

            return objResult;
          }

          return undefined;
        }

        static sumBy(collection, predicate) {
          var sum = 0;

          for (var _key3 in collection) {
            sum += predicate(collection[_key3]);
          }

          return sum;
        }

        static countBy(collection) {
          var objRet = {};

          for (var _key4 in collection) {
            var _value = collection[_key4];

            if (objRet.hasOwnProperty(_value)) {
              objRet[_value] += 1;
            } else {
              objRet[_value] = 1;
            }
          }

          return objRet;
        }

      }, _class2.MAX_SAFE_INTEGER = 9007199254740991, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f523d53ee81fbed91d95257fb473002a58b99e4.js.map