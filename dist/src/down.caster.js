"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./utils/is");
/**
 * Represents the downcaster...
 */
var DownCaster = /** @class */ (function () {
    /**
     * Create an instance of Downcaster
     * @param namespace
     * @param models
     * @param data
     */
    function DownCaster(namespace, models, data) {
        this.namespace = namespace;
        this.models = models;
        /**
         * Holds all the pointers for whatever
         * is beings serialized, ensuring that
         * all references a correctly allocated.
         */
        this.pointers = [];
        this.graph = this.graphData(data);
        this.stripPointersOfResponsibility();
    }
    /**
     * This makes it more optimized in the
     * upcaster and doesn't hold on to pointers
     * of a developer's instance for garbage
     * collection purposes.
     */
    DownCaster.prototype.stripPointersOfResponsibility = function () {
        var index = 0;
        var genericArray = [];
        var genericObject = {};
        while (index < this.pointers.length) {
            var pointer = this.pointers[index];
            if (Array.isArray(pointer)) {
                this.pointers[index] = genericArray;
            }
            else if (is_1.default.obj(pointer)) {
                this.pointers[index] = genericObject;
            }
            index++;
        }
    };
    /**
     * Entry point to recursively
     * look through the data provide
     * and assign a graphable.
     * @param data
     */
    DownCaster.prototype.graphData = function (data) {
        if (Array.isArray(data)) {
            return this.graphArray(data);
        }
        else if (is_1.default.date(data)) {
            return this.graphDate(data);
        }
        else if (is_1.default.obj(data)) {
            return this.graphObject(data);
        }
        else {
            return this.graphPrimitives(data);
        }
    };
    /**
     * Holds graphing arrays
     * @param arr
     */
    DownCaster.prototype.graphArray = function (arr) {
        var _this = this;
        var arrayGraph = this.makeGraphable();
        var index = this.pointers.indexOf(arr);
        if (index < 0) {
            index = (this.pointers.push(arr)) - 1;
            arrayGraph.c = {};
            arr.forEach(function (item, idx) {
                return arrayGraph.c[idx] = _this.graphData(item);
            });
        }
        arrayGraph.t = "array";
        arrayGraph.r = index;
        return arrayGraph;
    };
    /**
     * Handles graphing dates
     * @param date
     */
    DownCaster.prototype.graphDate = function (date) {
        var dateGraph = this.makeGraphable();
        var index = this.pointers.indexOf(date);
        if (index < 0) {
            index = (this.pointers.push(date)) - 1;
        }
        dateGraph.t = "date";
        dateGraph.r = index;
        dateGraph.v = date;
        return dateGraph;
    };
    /**
     * Handles graphing objects
     * @param obj
     */
    DownCaster.prototype.graphObject = function (obj) {
        var objectGraph = this.makeGraphable();
        var index = this.pointers.indexOf(obj);
        if (index < 0) {
            index = (this.pointers.push(obj)) - 1;
            objectGraph.c = {};
            for (var iterator in obj) {
                if (obj.hasOwnProperty(iterator)) {
                    objectGraph.c[iterator] = this.graphData(obj[iterator]);
                }
            }
        }
        if (is_1.default.builtFromModel(this.namespace, this.models, obj)) {
            objectGraph.cx = obj.constructor[this.namespace];
        }
        objectGraph.t = "object";
        objectGraph.r = index;
        return objectGraph;
    };
    /**
     * Handles graphing primitives
     * @param value
     */
    DownCaster.prototype.graphPrimitives = function (value) {
        var primitiveGraph = this.makeGraphable();
        var index = this.pointers.indexOf(value);
        if (index < 0) {
            index = (this.pointers.push(value)) - 1;
        }
        primitiveGraph.t = typeof value;
        primitiveGraph.r = index;
        return primitiveGraph;
    };
    /**
     * Helper method to make as instance
     * of graphable
     */
    DownCaster.prototype.makeGraphable = function () {
        return { r: 0, t: "" };
    };
    /**
     * Stringifies the graph and pointers
     */
    DownCaster.prototype.toString = function (spaces) {
        if (spaces === void 0) { spaces = null; }
        return JSON.stringify({
            pointers: this.pointers,
            graph: this.graph
        }, null, typeof spaces === "number" ? spaces : void 0);
    };
    return DownCaster;
}());
exports.DownCaster = DownCaster;
