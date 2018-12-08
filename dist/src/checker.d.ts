import { EntityCollection } from "./interfaces/entity.collection";
declare namespace Checker {
    /**
     * Determines if a variable
     * is an obj
     * @param obj
     */
    function isObj(obj: any): boolean;
    /**
     * Determines if every value in
     * the entities object is a constructor
     * @param entities
     */
    function everyPropertyIsConstructable(entities: EntityCollection): void;
    /**
     * Checks to see if a constructor of an instance
     * contains a the tag for the current anslo instance
     * @param entities
     * @param context
     * @param tag
     */
    function isConstructorReferencePresent(entities: EntityCollection, context: object, tag: string): boolean;
    /**
     * Determines if the instance contains a
     * tag for the current anslo instance
     * @param entities
     * @param context
     * @param tag
     */
    function isInstanceReferencePresent(entities: EntityCollection, context: object, tag: string): boolean;
}
export default Checker;
