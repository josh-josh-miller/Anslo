"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Anslo is a wrapper around JSON.stringify and JSON.parse designed to remember original state.
 */
var Anslo = /** @class */ (function () {
    /**
     * Create a new instance
     * @param constructors List of all constructors you want to remember
     */
    function Anslo(constructors) {
        var _this = this;
        /**
         * List of the constructors to check for when parsing
         */
        this.constructors = {};
        if (constructors) {
            constructors.forEach(function (c) {
                _this.constructors[c.name] = c;
            });
        }
    }
    /**
     * Create a new instance of Anslo remembering all install constructors, but with the ability overwrite
     * previously installed constructors with the same name.
     * @param constructors
     */
    Anslo.prototype.split = function (constructors) {
        if (constructors === void 0) { constructors = []; }
        var passables = [];
        for (var iterator in this.constructors) {
            passables.push(this.constructors[iterator]);
        }
        constructors.forEach(function (c) { return passables.push(c); });
        return new Anslo(passables);
    };
    /**
     * Remove a constructor from the list to check for
     * @param constructor
     */
    Anslo.prototype.forget = function (constructor) {
        var name = typeof constructor === "string" ? constructor : constructor.name;
        if (this.constructors[name]) {
            delete this.constructors[name];
        }
    };
    /**
     * convert javascript data to string
     * @param obj
     */
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
    /**
     * convert a string to javascript data remembering original state
     * @param str
     * @param reviver
     */
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
exports.default = Anslo;
