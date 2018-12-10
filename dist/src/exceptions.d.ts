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
    /**
     * Throws an exception any time there is
     * problem with graph in deserialization.
     * @param namespace
     */
    function invalidGraph(namespace: string): void;
    /**
     * Throws an error when the pointers property,
     * in deserialization is not an array.
     * @param namespace
     */
    function invalidPointerSet(namespace: string): void;
    /**
     * Throws an error when deserialization
     * can not find a pointer.
     * @param namespace
     */
    function invalidPointer(namespace: string): void;
}
export default Exceptions;
