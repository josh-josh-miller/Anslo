import { ModelCollection } from "./interface/model.collection";
import Is from "./utils/is";
import Assign from "./assign";
import { DownCaster } from "./down.caster";
import { UpCaster } from "./up.caster";
import Exceptions from "./exceptions";

/**
 * Definition for the an instance
 * of Anslo.
 */
export class Anslo {
    /**
     * Holds context for custom types
     * during serialization.
     */
    private models: ModelCollection = {};

    /**
     * the name for the instance of anslo
     */
    private namespace: string = "@~anslo.";

    /**
     * Creates an instance of Anslo
     * @param models Key, value pair of context for serialization.
     * @param namespace the name for the instance of anslo
     */
    public constructor(models: ModelCollection = {}, namespace: string = "main") {
        if (Is.obj(models)) {
            this.namespace += namespace;
            this.models = Object.assign(this.models, models);
            Is.everyPropertyConstructable(this.namespace, this.models); //blow if not;
            Assign.namespaceToModels(this.namespace, this.models);
        } else {
            Exceptions.blow(
                this.namespace,
                `On construction, new Anslo( ===> models <===) was not an object of constructors.`
            );
        }
    }

    /**
     * Takes an instance of anything and
     * serializes it down to a string.
     * @param instance 
     */
    public down(instance: any, spaces: number = null) {
        let down = new DownCaster(this.namespace, this.models, instance);
        return down.toString(spaces);
    }


    /**
     * Takes a string that what serialized, and
     * given the same setup, will parse recursively
     * back to its original state, all the while, 
     * remembering state. 
     * @param data 
     */
    public up<Context>(data: string): Context {
        let up = new UpCaster(this.namespace, this.models, data);
        return up.toInstance<Context>();
    }
}
