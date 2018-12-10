import { ModelCollection } from "./interface/model.collection";
/**
 * Definition for the an instance
 * of Anslo.
 */
export declare class Anslo {
    /**
     * Holds context for custom types
     * during serialization.
     */
    private models;
    /**
     * the name for the instance of anslo
     */
    private namespace;
    /**
     * Creates an instance of Anslo
     * @param models Key, value pair of context for serialization.
     * @param namespace the name for the instance of anslo
     */
    constructor(models?: ModelCollection, namespace?: string);
    /**
     * Takes an instance of anything and
     * serializes it down to a string.
     * @param instance
     */
    down(instance: any, spaces?: number): string;
    /**
     * Takes a string that what serialized, and
     * given the same setup, will parse recursively
     * back to its original state, all the while,
     * remembering state.
     * @param data
     */
    up<Context>(data: string): Context;
}
