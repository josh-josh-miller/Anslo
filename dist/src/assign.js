"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Anything that has to do
 * with assigning anything.
 */
var Assign;
(function (Assign) {
    /**
     * Since the constructor may be used in
     * multiple instances of Anslo by another
     * name, we need to assign a namespace with
     * the value set to the same value as the key
     * on the model collection
     * @param namespace
     * @param models
     */
    function namespaceToModels(namespace, models) {
        for (var iterator in models) {
            models[iterator][namespace] = iterator;
        }
    }
    Assign.namespaceToModels = namespaceToModels;
})(Assign || (Assign = {}));
exports.default = Assign;
