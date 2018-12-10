"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../exceptions");
/**
 * Handles assertions and a few
 * standstills
 */
var Is;
(function (Is) {
    /**
     * Determines whether or not a variable
     * is an object or not.
     * @param obj
     */
    function obj(obj) {
        if (obj === undefined) {
            return false;
        }
        return typeof obj === "object" && obj !== null;
    }
    Is.obj = obj;
    /**
     * Determines whether or not a variable
     * is an instance of the Date object
     * @param date
     */
    function date(date) {
        return date instanceof Date;
    }
    Is.date = date;
    /**
     * Blows and exception if the models object
     * is not a perfect key value pair of constructables.
     * @param namespace
     * @param models
     */
    function everyPropertyConstructable(namespace, models) {
        for (var iterator in models) {
            if (typeof models[iterator] !== "function") {
                exceptions_1.default.blow(namespace, "One of your of your models is not a constructor. Got [" + typeof models[iterator] + "] instead.");
            }
        }
    }
    Is.everyPropertyConstructable = everyPropertyConstructable;
    /**
     * Determines if an instance of an object
     * was created using a model that its
     * reference exists in our Anslo instance.
     * @param namespace
     * @param models
     * @param instance
     */
    function builtFromModel(namespace, models, instance) {
        if (instance.constructor[namespace] !== undefined) {
            return typeof models[instance.constructor[namespace]] === "function";
        }
        return false;
    }
    Is.builtFromModel = builtFromModel;
})(Is || (Is = {}));
exports.default = Is;
