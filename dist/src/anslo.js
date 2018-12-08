"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("./errors");
var checker_1 = require("./checker");
var assignments_1 = require("./assignments");
/**
 * Represents the definition
 * of Anslo
 */
var Anslo = /** @class */ (function () {
    /**
     * Creates an instance of Anslo
     *
     * @param entities an object of constructables that will need to be remembered.
     * @param namespace The name for this instance
     */
    function Anslo(entities, namespace) {
        if (entities === void 0) { entities = {}; }
        if (namespace === void 0) { namespace = "main"; }
        this.entities = entities;
        this.namespace = namespace;
        /**
         * The name tag for the instance.
         *
         * Since the entities (constructors) could
         * possibly have differing names for each instance,
         * it's important the anslo keep with it's own naming
         * convention. It does this via the tag.
         */
        this.tag = "@~";
        this.tag += typeof namespace === "string" ? namespace : "unknown";
        if (checker_1.default.isObj(entities)) {
            checker_1.default.everyPropertyIsConstructable(entities);
            assignments_1.default.assignTagsToEntites(entities, this.tag);
        }
        else {
            errors_1.ansloError("Type (" + typeof entities + ") can not be used as an entity.");
        }
    }
    /**
     * Takes any variable and stringifies
     * it and in cases instances of constructors
     * pre-disclosed, it will serialize the data
     * with an ear mark to remember state.
     * @param context
     */
    Anslo.prototype.stringify = function (context, spaces) {
        if (spaces === void 0) { spaces = null; }
        assignments_1.default.assignTagsToContext(this.entities, context, this.tag);
        var dataString = JSON.stringify(context, null, spaces ? spaces : void 0);
        assignments_1.default.unassignTagsToContext(this.entities, context, this.tag);
        return dataString;
    };
    /**
     * Parses and datastring back into it's original
     * state contigent on the list of constructors
     * provided.
     * @param dataString
     */
    Anslo.prototype.parse = function (dataString) {
        var _this = this;
        return JSON.parse(dataString, function (key, value) {
            var date = assignments_1.default.parseDate(_this.entities, value);
            if (date !== false) {
                return date;
            }
            if (checker_1.default.isObj(value) && value !== undefined) {
                if (checker_1.default.isInstanceReferencePresent(_this.entities, value, _this.tag)) {
                    return assignments_1.default.spinInstance(_this.entities, value, _this.tag);
                }
            }
            return value;
        });
    };
    return Anslo;
}());
exports.default = Anslo;
