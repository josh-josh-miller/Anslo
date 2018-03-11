"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Anslo = /** @class */ (function () {
    function Anslo(constructors) {
        var _this = this;
        this.constructors = {};
        if (constructors) {
            constructors.forEach(function (c) {
                _this.constructors[c.name] = c;
            });
        }
    }
    Anslo.prototype.split = function (constructors) {
        if (constructors === void 0) { constructors = []; }
        var passables = [];
        for (var iterator in this.constructors) {
            passables.push(this.constructors[iterator]);
        }
        constructors.forEach(function (c) { return passables.push(c); });
        return new Anslo(passables);
    };
    Anslo.prototype.forget = function (constructor) {
        var name = typeof constructor === "string" ? constructor : constructor.name;
        if (this.constructors[name]) {
            delete this.constructors[name];
        }
    };
    Anslo.prototype.stringify = function (obj) {
        var _this = this;
        var write = function (obj) {
            if (typeof obj === "object" && obj !== null) {
                for (var iterator in obj) {
                    write(obj[iterator]);
                }
                if (_this.constructors[obj.constructor.name]) {
                    if (obj.constructor.name !== "Date") {
                        obj["#type"] = obj.constructor.name;
                    }
                }
            }
            else if (Array.isArray(obj)) {
                obj.forEach(function (item) { return write(item); });
            }
        };
        write(obj);
        return JSON.stringify(obj);
    };
    Anslo.prototype.parse = function (str, reviver) {
        var _this = this;
        return JSON.parse(str, function (key, value) {
            if (_this.constructors["Date"]) {
                var a;
                if (typeof value === 'string') {
                    a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)(Z|([+\-])(\d{2}):(\d{2}))$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
                    }
                }
            }
            if (typeof value === "object" && value !== null && value !== undefined) {
                if (typeof value["#type"] === "string") {
                    if (typeof _this.constructors[value["#type"]] === "function") {
                        var context = new _this.constructors[value["#type"]];
                        delete context["#type"];
                        for (var iterator in value) {
                            if (iterator !== "#type") {
                                context[iterator] = value[iterator];
                            }
                        }
                        return context;
                    }
                    else {
                        throw new Error("[Anslo][Exception][" + new Date().toISOString() + "] Could not find \"class " + value["#type"] + " {}\". Make sure that you installed it.");
                    }
                }
            }
            if (typeof reviver === "function") {
                return reviver(key, value);
            }
            else {
                return value;
            }
        });
    };
    return Anslo;
}());
exports.Anslo = Anslo;
