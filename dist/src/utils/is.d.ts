import { ModelCollection } from "../interface/model.collection";
/**
 * Handles assertions and a few
 * standstills
 */
declare namespace Is {
    /**
     * Determines whether or not a variable
     * is an object or not.
     * @param obj
     */
    function obj(obj: object): boolean;
    /**
     * Determines whether or not a variable
     * is an instance of the Date object
     * @param date
     */
    function date(date: Date): boolean;
    /**
     * Blows and exception if the models object
     * is not a perfect key value pair of constructables.
     * @param namespace
     * @param models
     */
    function everyPropertyConstructable(namespace: string, models: ModelCollection): void;
    /**
     * Determines if an instance of an object
     * was created using a model that its
     * reference exists in our Anslo instance.
     * @param namespace
     * @param models
     * @param instance
     */
    function builtFromModel(namespace: string, models: ModelCollection, instance: object): boolean;
}
export default Is;
