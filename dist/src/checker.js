"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("./errors");
var Checker;
(function (Checker) {
    /**
     * Determines if a variable
     * is an obj
     * @param obj
     */
    function isObj(obj) {
        if (obj === undefined) {
            return false;
        }
        return typeof obj === "object" && obj !== null;
    }
    Checker.isObj = isObj;
    /**
     * Determines if every value in
     * the entities object is a constructor
     * @param entities
     */
    function everyPropertyIsConstructable(entities) {
        for (var iterator in entities) {
            if (entities.hasOwnProperty(iterator)) {
                if (typeof entities[iterator] !== "function") {
                    errors_1.ansloError("All classes provide must be constructable");
                }
            }
        }
    }
    Checker.everyPropertyIsConstructable = everyPropertyIsConstructable;
    /**
     * Checks to see if a constructor of an instance
     * contains a the tag for the current anslo instance
     * @param entities
     * @param context
     * @param tag
     */
    function isConstructorReferencePresent(entities, context, tag) {
        if (context.constructor[tag] !== undefined) {
            return typeof entities[context.constructor[tag]] === "function";
        }
        return false;
    }
    Checker.isConstructorReferencePresent = isConstructorReferencePresent;
    /**
     * Determines if the instance contains a
     * tag for the current anslo instance
     * @param entities
     * @param context
     * @param tag
     */
    function isInstanceReferencePresent(entities, context, tag) {
        if (context[tag] !== undefined) {
            return entities[context[tag]] !== undefined;
        }
        return false;
    }
    Checker.isInstanceReferencePresent = isInstanceReferencePresent;
})(Checker || (Checker = {}));
exports.default = Checker;
