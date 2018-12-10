import { Graphable } from "./interface/graphable";
import { ModelCollection } from "./interface/model.collection";
import { DownCaster } from "./down.caster";
/**
 * Represents the upcaster...
 */
export declare class UpCaster {
    private namespace;
    private model;
    /**
     * Holds the instance as
     * state is being pieced
     * back together.
     */
    instance: any;
    /**
     * Holds the list of pointers
     */
    pointers: any[];
    /**
     * Creates an instance of UpCaster
     * @param namespace '
     * @param model
     * @param str
     */
    constructor(namespace: string, model: ModelCollection, str: string);
    /**
     * Get the "rough" instance of
     * Downcaster from JSON
     * @param str
     */
    getDowncaster(str: string): any;
    /**
     * Once the downcaster is in place,
     * this method will recursively return
     * the pointers for the given graphs
     * @param downcaster
     */
    getInstanceFromDowncaster(downcaster: DownCaster): any;
    /**
     * Entry point for ungraphing
     * @param graph
     */
    ungraphData(graph: Graphable): any;
    /**
     * Handles ungraphing arrays
     * @param graph
     */
    unGraphArray(graph: Graphable): any[];
    /**
     * Handles ungraphing dates
     * @param graph
     */
    unGraphDate(graph: Graphable): any;
    /**
     * Handles ungraphing objects
     * @param graph
     */
    unGraphObject(graph: Graphable): any;
    /**
     * Handles ungraphing primitives
     * @param graph
     */
    unGraphPrimitives(graph: Graphable): any;
    /**
     * Returns the instance and handles
     * garbage collection
     */
    toInstance<Context>(): any;
}
