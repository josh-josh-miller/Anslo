import { EntityCollection } from "./interfaces/entity.collection";
import { ansloError } from "./errors";

namespace Checker {

    /**
     * Determines if a variable
     * is an obj
     * @param obj 
     */
    export function isObj(obj: any) {
        if (obj === undefined) { return false; }
        return typeof obj === "object" && obj !== null;
    }

    /**
     * Determines if every value in
     * the entities object is a constructor
     * @param entities 
     */
    export function everyPropertyIsConstructable(entities: EntityCollection) {
        for (var iterator in entities) {
            if (entities.hasOwnProperty(iterator)) {
                if (typeof entities[iterator] !== "function") {
                    ansloError("All classes provide must be constructable");
                }
            }
        }
    }

    /**
     * Checks to see if a constructor of an instance
     * contains a the tag for the current anslo instance
     * @param entities 
     * @param context 
     * @param tag 
     */
    export function isConstructorReferencePresent(entities: EntityCollection, context: object, tag: string) {
        if (context.constructor[tag] !== undefined) {
            return typeof entities[context.constructor[tag]] === "function";
        }
        return false;
    }

    /**
     * Determines if the instance contains a 
     * tag for the current anslo instance
     * @param entities 
     * @param context 
     * @param tag 
     */
    export function isInstanceReferencePresent(entities: EntityCollection, context: object, tag: string) {
        if (context[tag] !== undefined) {
            return entities[context[tag]] !== undefined;
        }
        return false;
    }
}

export default Checker;
