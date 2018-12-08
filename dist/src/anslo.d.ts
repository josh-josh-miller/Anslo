import { EntityCollection } from "./interfaces/entity.collection";
/**
 * Represents the definition
 * of Anslo
 */
export default class Anslo {
    private entities;
    private namespace;
    /**
     * The name tag for the instance.
     *
     * Since the entities (constructors) could
     * possibly have differing names for each instance,
     * it's important the anslo keep with it's own naming
     * convention. It does this via the tag.
     */
    tag: string;
    /**
     * Creates an instance of Anslo
     *
     * @param entities an object of constructables that will need to be remembered.
     * @param namespace The name for this instance
     */
    constructor(entities?: EntityCollection, namespace?: string);
    /**
     * Takes any variable and stringifies
     * it and in cases instances of constructors
     * pre-disclosed, it will serialize the data
     * with an ear mark to remember state.
     * @param context
     */
    stringify(context: any, spaces?: number): string;
    /**
     * Parses and datastring back into it's original
     * state contigent on the list of constructors
     * provided.
     * @param dataString
     */
    parse<Context>(dataString: string): Context;
}
