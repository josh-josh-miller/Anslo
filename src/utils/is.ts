import { ModelCollection } from "../interface/model.collection";
import Exceptions from "../exceptions";

/**
 * Handles assertions and a few
 * standstills
 */
namespace Is {

    /**
     * Determines whether or not a variable
     * is an object or not.
     * @param obj 
     */
    export function obj(obj: object) {
        if (obj === undefined) { return false }
        return typeof obj === "object" && obj !== null;
    }

    /**
     * Determines whether or not a variable
     * is an instance of the Date object
     * @param date 
     */
    export function date(date: Date) {
        return date instanceof Date;
    }

    /**
     * Blows and exception if the models object
     * is not a perfect key value pair of constructables.
     * @param namespace 
     * @param models 
     */
    export function everyPropertyConstructable(namespace: string, models: ModelCollection) {
        for (var iterator in models) {
            if (typeof models[iterator] !== "function") {
                Exceptions.blow(
                    namespace,
                    `One of your of your models is not a constructor. Got [${typeof models[iterator]}] instead.`
                )
            }
        }
    }

    /**
     * Determines if an instance of an object
     * was created using a model that its
     * reference exists in our Anslo instance.
     * @param namespace 
     * @param models 
     * @param instance 
     */
    export function builtFromModel(namespace: string, models: ModelCollection, instance: object) {
        if (instance.constructor[namespace] !== undefined) {
            return typeof models[instance.constructor[namespace]] === "function";
        }
        return false;
    }
}

export default Is;

