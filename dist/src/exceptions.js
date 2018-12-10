"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Namespace to hold all exception
 * behavior and classes
 */
var Exceptions;
(function (Exceptions) {
    /**
     * Represents a core exception
     * in Anslo.
     */
    var Exception = /** @class */ (function () {
        /**
         * Creates an instance of
         * an exception
         * @param namespace The namespace of the Anslo instance
         * @param message The exception message
         */
        function Exception(namespace, message) {
            this.namespace = namespace;
            this.message = message;
        }
        /**
         * Handles toString() for the console.
         */
        Exception.prototype.toString = function () {
            return "[Anslo][" + this.namespace + "] " + this.message;
        };
        return Exception;
    }());
    Exceptions.Exception = Exception;
    /**
     * Quick factory for creating an
     * exception. This helps with testing.
     * and getting coverage.
     * @param namespace
     * @param message
     */
    function blow(namespace, message) {
        message = message.replace(/\s\s+/g, ' ');
        throw new Exception(namespace, message);
    }
    Exceptions.blow = blow;
    /**
     * Throws an exception any time there is
     * problem with graph in deserialization.
     * @param namespace
     */
    function invalidGraph(namespace) {
        throw new Exception(namespace, "Invalid graph; state has been corrupted. Could not parse.");
    }
    Exceptions.invalidGraph = invalidGraph;
    /**
     * Throws an error when the pointers property,
     * in deserialization is not an array.
     * @param namespace
     */
    function invalidPointerSet(namespace) {
        throw new Exception(namespace, "Invalid pointer set; state has been corrupted. Could not parse.");
    }
    Exceptions.invalidPointerSet = invalidPointerSet;
    /**
     * Throws an error when deserialization
     * can not find a pointer.
     * @param namespace
     */
    function invalidPointer(namespace) {
        throw new Exception(namespace, "Invalid pointer; state has been corrupted. Could not parse.");
    }
    Exceptions.invalidPointer = invalidPointer;
})(Exceptions || (Exceptions = {}));
exports.default = Exceptions;
