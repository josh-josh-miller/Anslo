import { Graphable } from "./interface/graphable";
import { ModelCollection } from "./interface/model.collection";
/**
 * Represents the downcaster...
 */
export declare class DownCaster {
    private namespace;
    private models;
    /**
     * Holds all the pointers for whatever
     * is beings serialized, ensuring that
     * all references a correctly allocated.
     */
    pointers: any[];
    /**
     * Holds the graph, of the instance
     * for the serialization.
     */
    graph: Graphable;
    /**
     * Create an instance of Downcaster
     * @param namespace
     * @param models
     * @param data
     */
    constructor(namespace: any, models: ModelCollection, data: any);
    /**
     * This makes it more optimized in the
     * upcaster and doesn't hold on to pointers
     * of a developer's instance for garbage
     * collection purposes.
     */
    stripPointersOfResponsibility(): void;
    /**
     * Entry point to recursively
     * look through the data provide
     * and assign a graphable.
     * @param data
     */
    graphData(data: any): Graphable;
    /**
     * Holds graphing arrays
     * @param arr
     */
    graphArray(arr: any[]): Graphable;
    /**
     * Handles graphing dates
     * @param date
     */
    graphDate(date: Date): Graphable;
    /**
     * Handles graphing objects
     * @param obj
     */
    graphObject(obj: object): Graphable;
    /**
     * Handles graphing primitives
     * @param value
     */
    graphPrimitives(value: any): Graphable;
    /**
     * Helper method to make as instance
     * of graphable
     */
    makeGraphable(): Graphable;
    /**
     * Stringifies the graph and pointers
     */
    toString(spaces?: number): string;
}
