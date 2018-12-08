"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checker_1 = require("./checker");
var Assignments;
(function (Assignments) {
    /**
     * Assigns the anslo instance tag to
     * the entity constructor for rememberance.
     * @param entities
     * @param tag
     */
    function assignTagsToEntites(entities, tag) {
        for (var iterator in entities) {
            entities[iterator][tag] = iterator;
        }
    }
    Assignments.assignTagsToEntites = assignTagsToEntites;
    /**
     * Recursively assigns a tag to each
     * relevant instance in a context for
     * the entities provided
     * @param entities
     * @param context
     */
    function assignTagsToContext(entities, context, tag) {
        if (Array.isArray(context)) {
            context.forEach(function (item) { return assignTagsToContext(entities, item, tag); });
        }
        else if (checker_1.default.isObj(context)) {
            if (context instanceof Date === false) {
                for (var iterator in context) {
                    assignTagsToContext(entities, context[iterator], tag);
                }
                if (checker_1.default.isConstructorReferencePresent(entities, context, tag)) {
                    var name_1 = context.constructor[tag];
                    context[tag] = name_1;
                }
            }
        }
    }
    Assignments.assignTagsToContext = assignTagsToContext;
    /**
     * Unassigns tags from a given context
     * @param entities
     * @param context
     * @param tag
     */
    function unassignTagsToContext(entities, context, tag) {
        if (Array.isArray(context)) {
            context.forEach(function (item) { return unassignTagsToContext(entities, item, tag); });
        }
        else if (checker_1.default.isObj(context)) {
            if (context instanceof Date === false) {
                for (var iterator in context) {
                    unassignTagsToContext(entities, context[iterator], tag);
                }
                if (checker_1.default.isInstanceReferencePresent(entities, context, tag)) {
                    delete context[tag];
                }
            }
        }
    }
    Assignments.unassignTagsToContext = unassignTagsToContext;
    /**
     * On json.parse, this handles the date part
     * @param entities
     * @param value
     */
    function parseDate(entities, value) {
        if (entities.Date === Date) {
            var a;
            if (typeof value === 'string') {
                a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)(Z|([+\-])(\d{2}):(\d{2}))$/.exec(value);
                if (a) {
                    return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
                }
            }
        }
        return false;
    }
    Assignments.parseDate = parseDate;
    /**
     * On json.parse, this function is responsible
     * for spinning back up instances to be remembered
     * @param entities
     * @param context
     * @param tag
     */
    function spinInstance(entities, context, tag) {
        var instance = new entities[context[tag]];
        for (var iterator in context) {
            if (iterator !== tag) {
                instance[iterator] = context[iterator];
            }
        }
        return instance;
    }
    Assignments.spinInstance = spinInstance;
})(Assignments || (Assignments = {}));
exports.default = Assignments;
