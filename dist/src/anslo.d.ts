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
     * serializes it down to a string. If a
     * key is supplied the string contain will
     * be encrypted with AES-256-CBC with an IV(16)
     * @param instance
     */
    down(instance: any, key?: string, spaces?: number): string;
    /**
     * Takes a string that what serialized, and
     * given the same setup, will parse recursively
     * back to its original state, all the while,
     * remembering state. If a key is supplied, the contents
     * with be decrypted before casting up.
     * @param data
     */
    up<Context>(data: string, key?: string): Context;
}
