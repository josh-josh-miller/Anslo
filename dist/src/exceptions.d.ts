/**
 * Namespace to hold all exception
 * behavior and classes
 */
declare namespace Exceptions {
    /**
     * Represents a core exception
     * in Anslo.
     */
    class Exception {
        namespace: string;
        message: string;
        /**
         * Creates an instance of
         * an exception
         * @param namespace The namespace of the Anslo instance
         * @param message The exception message
         */
        constructor(namespace: string, message: string);
        /**
         * Handles toString() for the console.
         */
        toString(): string;
    }
    /**
     * Quick factory for creating an
     * exception. This helps with testing.
     * and getting coverage.
     * @param namespace
     * @param message
     */
    function blow(namespace: string, message: string): void;
    function invalidGraph(namespace: string): void;
    function invalidPointerSet(namespace: string): void;
    function invalidPointer(namespace: string): void;
}
export default Exceptions;
