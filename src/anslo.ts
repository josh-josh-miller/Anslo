import { ansloError } from "./errors";
import Checker from "./checker";
import Assignments from "./assignments";
import { EntityCollection } from "./interfaces/entity.collection";




/**
 * Represents the definition
 * of Anslo
 */
export default class Anslo {

    /**
     * The name tag for the instance.
     * 
     * Since the entities (constructors) could
     * possibly have differing names for each instance,
     * it's important the anslo keep with it's own naming
     * convention. It does this via the tag.
     */
    public tag: string = "@~";

    /**
     * Creates an instance of Anslo
     * 
     * @param entities an object of constructables that will need to be remembered. 
     * @param namespace The name for this instance
     */
    public constructor(private entities: EntityCollection = {}, private namespace: string = "main") {
        this.tag += typeof namespace === "string" ? namespace : "unknown";
        if (Checker.isObj(entities)) {
            Checker.everyPropertyIsConstructable(entities);
            Assignments.assignTagsToEntites(entities, this.tag);
        } else {
            ansloError(`Type (${typeof entities}) can not be used as an entity.`)
        }
    }


    /**
     * Takes any variable and stringifies 
     * it and in cases instances of constructors
     * pre-disclosed, it will serialize the data 
     * with an ear mark to remember state.
     * @param context 
     */
    public stringify(context: any, spaces: number = null): string {
        Assignments.assignTagsToContext(this.entities, context, this.tag);
        let dataString = JSON.stringify(context, null, spaces ? spaces : void 0);
        Assignments.unassignTagsToContext(this.entities, context, this.tag);
        return dataString;
    }

    /**
     * Parses and datastring back into it's original
     * state contigent on the list of constructors 
     * provided.
     * @param dataString 
     */
    public parse<Context>(dataString: string): Context {
        return JSON.parse(dataString, (key, value) => {
            let date = Assignments.parseDate(this.entities, value);
            if (date !== false) {
                return date;
            }
            if (Checker.isObj(value) && value !== undefined) {
                if (Checker.isInstanceReferencePresent(this.entities, value, this.tag)) {
                    return Assignments.spinInstance(this.entities, value, this.tag);
                }
            }
            return value;
        })
    }

}
