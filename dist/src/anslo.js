"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./utils/is");
var assign_1 = require("./assign");
var down_caster_1 = require("./down.caster");
var up_caster_1 = require("./up.caster");
var exceptions_1 = require("./exceptions");
/**
 * Definition for the an instance
 * of Anslo.
 */
var Anslo = /** @class */ (function () {
    /**
     * Creates an instance of Anslo
     * @param models Key, value pair of context for serialization.
     * @param namespace the name for the instance of anslo
     */
    function Anslo(models, namespace) {
        if (models === void 0) { models = {}; }
        if (namespace === void 0) { namespace = "main"; }
        /**
         * Holds context for custom types
         * during serialization.
         */
        this.models = {};
        /**
         * the name for the instance of anslo
         */
        this.namespace = "@~anslo.";
        if (is_1.default.obj(models)) {
            this.namespace += namespace;
            this.models = Object.assign(this.models, models);
            is_1.default.everyPropertyConstructable(this.namespace, this.models); //blow if not;
            assign_1.default.namespaceToModels(this.namespace, this.models);
        }
        else {
            exceptions_1.default.blow(this.namespace, "On construction, new Anslo( ===> models <===) was not an object of constructors.");
        }
    }
    /**
     * Takes an instance of anything and
     * serializes it down to a string.
     * @param instance
     */
    Anslo.prototype.down = function (instance, spaces) {
        if (spaces === void 0) { spaces = null; }
        var down = new down_caster_1.DownCaster(this.namespace, this.models, instance);
        return down.toString(spaces);
    };
    /**
     * Takes a string that what serialized, and
     * given the same setup, will parse recursively
     * back to its original state, all the while,
     * remembering state.
     * @param data
     */
    Anslo.prototype.up = function (data) {
        var up = new up_caster_1.UpCaster(this.namespace, this.models, data);
        return up.toInstance();
    };
    return Anslo;
}());
exports.Anslo = Anslo;
