import { ModelCollection } from "./interface/model.collection";
import Is from "./utils/is";
import Assign from "./assign";
import { DownCaster } from "./down.caster";
import { Cryptobox } from "./utils/cryptobox";
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
     * serializes it down to a string. If a 
     * key is supplied the string contain will
     * be encrypted with AES-256-CBC with an IV(16)
     * @param instance 
     */
    public down(instance: any, key: string = null, spaces: number = null) {
        let down = new DownCaster(this.namespace, this.models, instance);
        if (key !== null) {
            return Cryptobox.encrypt(down.toString(spaces), key);
        }
        return down.toString(spaces);
    }


    /**
     * Takes a string that what serialized, and
     * given the same setup, will parse recursively
     * back to its original state, all the while, 
     * remembering state. If a key is supplied, the contents
     * with be decrypted before casting up.
     * @param data 
     */
    public up<Context>(data: string, key: string = null): Context {
        if (key !== null) {
            let up = new UpCaster(this.namespace, this.models, Cryptobox.decrypt(data, key));
            return up.toInstance<Context>();
        } else {
            let up = new UpCaster(this.namespace, this.models, data);
            return up.toInstance<Context>();
        }
    }
}
