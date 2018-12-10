"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("./exceptions");
var is_1 = require("./utils/is");
/**
 * Represents the upcaster...
 */
var UpCaster = /** @class */ (function () {
    /**
     * Creates an instance of UpCaster
     * @param namespace '
     * @param model
     * @param str
     */
    function UpCaster(namespace, model, str) {
        this.namespace = namespace;
        this.model = model;
        /**
         * Holds the list of pointers
         */
        this.pointers = [];
        var downCaster = this.getDowncaster(str);
        this.instance = this.getInstanceFromDowncaster(downCaster);
    }
    /**
     * Get the "rough" instance of
     * Downcaster from JSON
     * @param str
     */
    UpCaster.prototype.getDowncaster = function (str) {
        try {
            return JSON.parse(str);
        }
        catch (err) {
            exceptions_1.default.blow(this.namespace, "Could not parse string.");
        }
    };
    /**
     * Once the downcaster is in place,
     * this method will recursively return
     * the pointers for the given graphs
     * @param downcaster
     */
    UpCaster.prototype.getInstanceFromDowncaster = function (downcaster) {
        if (!Array.isArray(downcaster.pointers)) {
            exceptions_1.default.invalidPointerSet(this.namespace);
        }
        this.pointers = downcaster.pointers;
        return this.ungraphData(downcaster.graph);
    };
    /**
     * Entry point for ungraphing
     * @param graph
     */
    UpCaster.prototype.ungraphData = function (graph) {
        //validations
        //---------------
        if (!is_1.default.obj(graph)) {
            exceptions_1.default.invalidGraph(this.namespace);
        }
        if (typeof graph.type !== "string") {
            exceptions_1.default.invalidGraph(this.namespace);
        }
        //-----------------
        if (graph.type === "array") {
            return this.unGraphArray(graph);
        }
        else if (graph.type === "date") {
            return this.unGraphDate(graph);
        }
        else if (graph.type === "object") {
            return this.unGraphObject(graph);
        }
        else {
            return this.unGraphPrimitives(graph);
        }
    };
    /**
     * Handles ungraphing arrays
     * @param graph
     */
    UpCaster.prototype.unGraphArray = function (graph) {
        //Validations
        //-------------
        if (typeof graph.references !== "number") {
            exceptions_1.default.invalidGraph(this.namespace);
        }
        if (!is_1.default.obj(graph.contents)) {
            exceptions_1.default.invalidGraph(this.namespace);
        }
        //-------------
        var pointer = this.pointers[graph.references];
        if (!Array.isArray(pointer)) {
            exceptions_1.default.invalidPointer(this.namespace);
        }
        //-------------
        for (var iterator in graph.contents) {
            pointer[iterator] = this.ungraphData(graph.contents[iterator]);
        }
        return pointer;
    };
    /**
     * Handles ungraphing dates
     * @param graph
     */
    UpCaster.prototype.unGraphDate = function (graph) {
        //Validations
        //-------------
        if (typeof graph.references !== "number") {
            exceptions_1.default.invalidGraph(this.namespace);
        }
        if (typeof graph.value !== "string") {
            exceptions_1.default.invalidGraph(this.namespace);
        }
        //-------------
        var pointer = this.pointers[graph.references];
        if (pointer === undefined) {
            exceptions_1.default.invalidGraph(this.namespace);
        }
        if (is_1.default.date(pointer)) {
            return pointer;
        }
        else {
            return this.pointers[graph.references] = new Date(graph.value);
        }
    };
    /**
     * Handles ungraphing objects
     * @param graph
     */
    UpCaster.prototype.unGraphObject = function (graph) {
        //Validations
        //-------------
        if (typeof graph.references !== "number") {
            exceptions_1.default.invalidGraph(this.namespace);
        }
        //-------------
        var pointer = this.pointers[graph.references];
        //when an object has context
        for (var iterator in this.model) {
            var model = this.model[iterator];
            if (model[this.namespace] === graph.context) {
                if (pointer instanceof model) {
                    return pointer;
                }
                else {
                    var instance_1 = this.pointers[graph.references] = new model;
                    for (var instanceIterator in graph.contents) {
                        instance_1[instanceIterator] = this.ungraphData(graph.contents[instanceIterator]);
                    }
                    return instance_1;
                }
            }
        }
        //when just a generic object
        var instance = this.pointers[graph.references];
        for (var instanceIterator in graph.contents) {
            instance[instanceIterator] = this.ungraphData(graph.contents[instanceIterator]);
        }
        return instance;
    };
    /**
     * Handles ungraphing primitives
     * @param graph
     */
    UpCaster.prototype.unGraphPrimitives = function (graph) {
        //Validations
        //-------------
        if (typeof graph.references !== "number") {
            exceptions_1.default.invalidGraph(this.namespace);
        }
        //-------------
        return this.pointers[graph.references];
    };
    /**
     * Returns the instance and handles
     * garbage collection
     */
    UpCaster.prototype.toInstance = function () {
        this.pointers = null;
        return this.instance;
    };
    return UpCaster;
}());
exports.UpCaster = UpCaster;
