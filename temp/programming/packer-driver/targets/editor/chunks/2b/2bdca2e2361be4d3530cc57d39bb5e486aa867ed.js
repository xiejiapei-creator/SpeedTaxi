System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _crd, ccclass, CELL_DELIMITERS, LINE_DELIMITERS, getter, getterCast, CSV, csvManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64d5aR01mZIArZ14oqSxdz0", "csvManager", undefined);

      ({
        ccclass
      } = _decorator);
      CELL_DELIMITERS = [",", ";", "\t", "|", "^"];
      LINE_DELIMITERS = ["\r\n", "\r", "\n"];

      getter = function (index) {
        return "d[" + index + "]";
      };

      getterCast = function (value, index, cast, d) {
        if (cast instanceof Array) {
          if (cast[index] === "number") {
            return Number(d[index]);
          } else if (cast[index] === "boolean") {
            return d[index] === "true" || d[index] === "t" || d[index] === "1";
          } else {
            return d[index];
          }
        } else {
          if (!isNaN(Number(value))) {
            return Number(d[index]);
          } else if (value == "false" || value == "true" || value == "t" || value == "f") {
            return d[index] === "true" || d[index] === "t" || d[index] === "1";
          } else {
            return d[index];
          }
        }
      };

      CSV = {
        //

        /* =========================================
            * Constants ===============================
            * ========================================= */
        STANDARD_DECODE_OPTS: {
          skip: 0,
          limit: false,
          header: false,
          cast: false,
          comment: ""
        },
        STANDARD_ENCODE_OPTS: {
          delimiter: CELL_DELIMITERS[0],
          newline: LINE_DELIMITERS[0],
          skip: 0,
          limit: false,
          header: false
        },
        quoteMark: '"',
        doubleQuoteMark: '""',
        quoteRegex: /"/g,
        opts: {},

        /* =========================================
            * Utility Functions =======================
            * ========================================= */
        assign: function (...args) {
          const params = Array.prototype.slice.call(arguments);
          const base = args[0];
          const rest = args.slice(1);

          for (let i = 0, len = rest.length; i < len; i++) {
            for (const attr in rest[i]) {
              base[attr] = rest[i][attr];
            }
          }

          return base;
        },
        map: function (collection, fn) {
          const results = [];

          for (let i = 0, len = collection.length; i < len; i++) {
            results[i] = fn(collection[i], i);
          }

          return results;
        },
        getType: function (obj) {
          return Object.prototype.toString.call(obj).slice(8, -1);
        },
        getLimit: function (limit, len) {
          return limit === false ? len : 1;
        },
        buildObjectConstructor: function (fields, sample, cast) {
          return function (d) {
            const object = {};

            const setter = function (attr, value) {
              return object[attr] = value;
            };

            if (cast) {
              fields.forEach((attr, idx) => {
                setter(attr, getterCast(sample[idx], idx, cast, d));
              });
            } else {
              fields.forEach((attr, idx) => {
                setter(attr, getterCast(sample[idx], idx, null, d));
              });
            } // body.push("return object;");
            // body.join(";\n");


            return object;
          };
        },
        buildArrayConstructor: function (fields, sample, cast) {
          return function (d) {
            const row = new Array(sample.length);

            const setter = function (idx, value) {
              return row[idx] = value;
            };

            if (cast) {
              fields.forEach(function (attr, idx) {
                setter(attr, getterCast(sample[idx], idx, cast, d));
              });
            } else {
              fields.forEach(function (attr, idx) {
                setter(attr, getterCast(sample[idx], idx, null, d));
              });
            }

            return row;
          };
        },
        frequency: function (coll, needle, limit) {
          if (limit === void 0) limit = false;
          let count = 0;
          let lastIndex = 0;
          const maxIndex = this.getLimit(limit, coll.length);

          while (lastIndex < maxIndex) {
            lastIndex = coll.indexOf(needle, lastIndex);
            if (lastIndex === -1) break;
            lastIndex += 1;
            count++;
          }

          return count;
        },
        mostFrequent: function (coll, needles, limit) {
          const max = 0;
          let detected = '';

          for (let cur = needles.length - 1; cur >= 0; cur--) {
            if (this.frequency(coll, needles[cur], limit) > max) {
              detected = needles[cur];
            }
          }

          return detected || needles[0];
        },
        unsafeParse: function (text, opts, fn) {
          const lines = text.split(opts.newline);

          if (opts.skip > 0) {
            lines.splice(opts.skip);
          }

          let fields;
          let constructor;

          function cells(lines) {
            let line = lines.shift();

            if (line.indexOf('"') >= 0) {
              // ?????????
              // ???????????????????????????, ????????????????????????
              let lastIndex = 0;
              let findIndex = 0;
              let count = 0;

              while (lines.length > 0) {
                lastIndex = line.indexOf('"', findIndex);
                if (lastIndex === -1 && count % 2 === 0) break;

                if (lastIndex !== -1) {
                  findIndex = lastIndex + 1;
                  count++;
                } else {
                  line = line + opts.newline + lines.shift();
                }
              }

              const list = [];
              let item;
              let quoteCount = 0;
              let start = 0;
              let end = 0;
              const length = line.length;

              for (let key in line) {
                if (!line.hasOwnProperty(key)) {
                  continue;
                }

                let numKey = parseInt(key);
                const value = line[key];

                if (numKey === 0 && value === '"') {
                  quoteCount++;
                  start = 1;
                }

                if (value === '"') {
                  quoteCount++;

                  if (line[numKey - 1] === opts.delimiter && start === numKey) {
                    start++;
                  }
                }

                if (value === '"' && quoteCount % 2 === 0) {
                  if (line[numKey + 1] === opts.delimiter || numKey + 1 === length) {
                    end = numKey;
                    item = line.substring(start, end);
                    list.push(item);
                    start = end + 2;
                    end = start;
                  }
                }

                if (value === opts.delimiter && quoteCount % 2 === 0) {
                  end = numKey;

                  if (end > start) {
                    item = line.substring(start, end);
                    list.push(item);
                    start = end + 1;
                    end = start;
                  } else if (end === start) {
                    list.push("");
                    start = end + 1;
                    end = start;
                  }
                }
              }

              end = length;

              if (end >= start) {
                item = line.substring(start, end);
                list.push(item);
              }

              return list;
            } else {
              return line.split(opts.delimiter);
            }
          }

          if (opts.header) {
            if (opts.header === true) {
              opts.comment = cells(lines); // ??????????????????

              opts.cast = cells(lines); // ????????????????????????

              fields = cells(lines);
            } else if (this.getType(opts.header) === "Array") {
              fields = opts.header;
            }

            constructor = this.buildObjectConstructor(fields, lines[0].split(opts.delimiter), opts.cast);
          } else {
            constructor = this.buildArrayConstructor(fields, lines[0].split(opts.delimiter), opts.cast);
          }

          while (lines.length > 0) {
            const row = cells(lines);

            if (row.length > 1) {
              fn(constructor(row), fields[0]);
            }
          }

          return true;
        },
        safeParse: function (text, opts) {
          const newline = opts.newline;
          const lines = text.split(newline);

          if (opts.skip > 0) {
            lines.splice(opts.skip);
          }

          return true;
        },
        encodeCells: function (line, delimiter, newline) {
          const row = line.slice(0);

          for (let i = 0, len = row.length; i < len; i++) {
            if (row[i].indexOf(this.quoteMark) !== -1) {
              row[i] = row[i].replace(this.quoteRegex, this.doubleQuoteMark);
            }

            if (row[i].indexOf(delimiter) !== -1 || row[i].indexOf(newline) !== -1) {
              row[i] = this.quoteMark + row[i] + this.quoteMark;
            }
          }

          return row.join(delimiter);
        },
        encodeArrays: function (coll, opts, fn) {
          const delimiter = opts.delimiter;
          const newline = opts.newline;

          if (opts.header && this.getType(opts.header) === "Array") {
            fn(this.encodeCells(opts.header, delimiter, newline));
          }

          for (let cur = 0, lim = this.getLimit(opts.limit, coll.length); cur < lim; cur++) {
            fn(this.encodeCells(coll[cur], delimiter, newline));
          }

          return true;
        },
        encodeObjects: function (coll, opts, fn) {
          const delimiter = opts.delimiter;
          const newline = opts.newline;
          let header = [];
          let row = [];

          for (const key in coll[0]) {
            header.push(key);
            row.push(coll[0][key]);
          }

          if (opts.header === true) {
            fn(this.encodeCells(header, delimiter, newline));
          } else if (this.getType(opts.header) === "Array") {
            fn(this.encodeCells(opts.header, delimiter, newline));
          }

          fn(this.encodeCells(row, delimiter, '\n'));

          for (let cur = 1, lim = this.getLimit(opts.limit, coll.length); cur < lim; cur++) {
            row = [];

            for (let i = 0, len = header.length; i < len; i++) {
              row.push(coll[cur][header[i]]);
            }

            fn(this.encodeCells(row, delimiter, newline));
          }

          return true;
        },
        parse: function (text, opts, fn) {
          let rows = [];

          if (this.getType(opts) === "Function") {
            fn = opts;
            opts = {};
          } else if (this.getType(fn) !== "Function") {
            fn = rows.push.bind(rows);
          }

          opts = this.assign({}, this.STANDARD_DECODE_OPTS, opts);
          this.opts = opts;

          if (!opts.delimiter || !opts.newline) {
            const limit = Math.min(48, Math.floor(text.length / 20), text.length);
            opts.delimiter = opts.delimiter || this.mostFrequent(text, CELL_DELIMITERS, limit !== 0);
            opts.newline = opts.newline || this.mostFrequent(text, LINE_DELIMITERS, limit !== 0);
          } // modify by jl ???????????????????????????????????????.??????????????????


          return this.unsafeParse(text, opts, fn) && (rows.length > 0 ? rows : true);
        },
        encode: function (coll, opts, fn) {
          let lines = [];

          if (this.getType(opts) === "Function") {
            fn = opts; // opts = {};
          } else if (this.getType(fn) !== "Function") {
            lines = [];
            fn = lines.push.bind(lines);
          }

          opts = this.assign({}, this.STANDARD_ENCODE_OPTS, opts);

          if (opts.skip > 0) {
            coll = coll.slice(opts.skip);
          }

          return (this.getType(coll[0]) === "Array" ? this.encodeArrays : this.encodeObjects)(coll, opts, fn) && (lines.length > 0 ? lines.join(opts.newline) : true);
        }
      };

      // type ObjData<T> =
      _export("csvManager", csvManager = (_dec = ccclass("csvManager"), _dec(_class = class csvManager {
        constructor() {
          this.csvTables = {};
          this.csvTableForArr = {};
          this.tableCast = {};
          this.tableComment = {};
        }

        addTable(tableName, tableContent, force) {
          if (this.csvTables[tableName] && !force) {
            return;
          }

          const tableData = {};
          const tableArr = [];
          const opts = {
            header: true
          };
          CSV.parse(tableContent, opts, (row, keyName) => {
            tableData[row[keyName]] = row;
            tableArr.push(row);
          });
          this.tableCast[tableName] = CSV.opts.cast;
          this.tableComment[tableName] = CSV.opts.comment;
          this.csvTables[tableName] = tableData;
          this.csvTableForArr[tableName] = tableArr; //this.csvTables[tableName].initFromText(tableContent);
        }

        getTableArr(tableName) {
          return this.csvTableForArr[tableName];
        }

        getTable(tableName) {
          return this.csvTables[tableName];
        }

        queryOne(tableName, key, value) {
          const table = this.getTable(tableName);

          if (!table) {
            return null;
          }

          if (key) {
            for (const tbItem in table) {
              if (!table.hasOwnProperty(tbItem)) {
                continue;
              }

              if (table[tbItem][key] === value) {
                return table[tbItem];
              }
            }
          } else {
            return table[value];
          }
        }

        queryByID(tableName, ID) {
          return this.queryOne(tableName, null, ID);
        }

        queryAll(tableName, key, value) {
          const table = this.getTable(tableName);

          if (!table || !key) {
            return null;
          }

          const ret = {};

          for (const tbItem in table) {
            if (!table.hasOwnProperty(tbItem)) {
              continue;
            }

            if (table[tbItem][key] === value) {
              ret[tbItem] = table[tbItem];
            }
          }

          return ret;
        }

        queryIn(tableName, key, values) {
          const table = this.getTable(tableName);

          if (!table || !key) {
            return null;
          }

          const ret = {};
          const keys = Object.keys(table);
          const length = keys.length;

          for (let i = 0; i < length; i++) {
            const item = table[keys[i]];

            if (values.indexOf(item[key]) > -1) {
              ret[keys[i]] = item;
            }
          }

          return ret;
        }

        queryByCondition(tableName, condition) {
          if (condition.constructor !== Object) {
            return null;
          }

          const table = this.getTable(tableName);

          if (!table) {
            return null;
          }

          const ret = {};
          const tableKeys = Object.keys(table);
          const tableKeysLength = tableKeys.length;
          const keys = Object.keys(condition);
          const keysLength = keys.length;

          for (let i = 0; i < tableKeysLength; i++) {
            const item = table[tableKeys[i]];
            let fit = true;

            for (let j = 0; j < keysLength; j++) {
              const key = keys[j];
              fit = fit && condition[key].indexOf(item[key]) > -1 && !ret[tableKeys[i]];
            }

            if (fit) {
              ret[tableKeys[i]] = item;
            }
          }

          return ret;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2bdca2e2361be4d3530cc57d39bb5e486aa867ed.js.map