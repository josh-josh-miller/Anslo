import { EntityCollection } from "./interfaces/entity.collection";
import Checker from "./checker";

namespace Assignments {

    /**
     * Assigns the anslo instance tag to
     * the entity constructor for rememberance.
     * @param entities 
     * @param tag 
     */
    export function assignTagsToEntites(entities: EntityCollection, tag: string) {
        for (var iterator in entities) {
            entities[iterator][tag] = iterator;
        }
    }

    /**
     * Recursively assigns a tag to each
     * relevant instance in a context for
     * the entities provided
     * @param entities 
     * @param context 
     */
    export function assignTagsToContext(entities: EntityCollection, context: any, tag: string) {
        if (Array.isArray(context)) {
            context.forEach(item => assignTagsToContext(entities, item, tag))
        }
        else if (Checker.isObj(context)) {
            if (context instanceof Date === false) {
                for (var iterator in context) {
                    assignTagsToContext(entities, context[iterator], tag);
                }
                if (Checker.isConstructorReferencePresent(entities, context, tag)) {
                    let name: string = context.constructor[tag];
                    context[tag] = name;
                }
            }
        }
    }

    /**
     * Unassigns tags from a given context
     * @param entities 
     * @param context 
     * @param tag 
     */
    export function unassignTagsToContext(entities: EntityCollection, context: any, tag: string) {
        if (Array.isArray(context)) {
            context.forEach(item => unassignTagsToContext(entities, item, tag))
        }
        else if (Checker.isObj(context)) {
            if (context instanceof Date === false) {
                for (var iterator in context) {
                    unassignTagsToContext(entities, context[iterator], tag);
                }
                if (Checker.isInstanceReferencePresent(entities, context, tag)) {
                    delete context[tag];
                }
            }
        }
    }



    /**
     * On json.parse, this handles the date part
     * @param entities 
     * @param value 
     */
    export function parseDate(entities: EntityCollection, value: string) {
        if (entities.Date === Date) {
            var a;
            if (typeof value === 'string') {
                a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)(Z|([+\-])(\d{2}):(\d{2}))$/.exec(value);
                if (a) {
                    return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                        +a[5], +a[6]));
                }
            }
        }
        return false;
    }

    /**
     * On json.parse, this function is responsible
     * for spinning back up instances to be remembered
     * @param entities 
     * @param context 
     * @param tag 
     */
    export function spinInstance(entities: EntityCollection, context, tag: string) {
        let instance = new entities[context[tag]];
        for (var iterator in context) {
            if (iterator !== tag) {
                instance[iterator] = context[iterator];
            }
        }
        return instance;
    }
}

export default Assignments;
