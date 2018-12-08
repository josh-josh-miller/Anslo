import { EntityCollection } from "./interfaces/entity.collection";
declare namespace Assignments {
    /**
     * Assigns the anslo instance tag to
     * the entity constructor for rememberance.
     * @param entities
     * @param tag
     */
    function assignTagsToEntites(entities: EntityCollection, tag: string): void;
    /**
     * Recursively assigns a tag to each
     * relevant instance in a context for
     * the entities provided
     * @param entities
     * @param context
     */
    function assignTagsToContext(entities: EntityCollection, context: any, tag: string): void;
    /**
     * Unassigns tags from a given context
     * @param entities
     * @param context
     * @param tag
     */
    function unassignTagsToContext(entities: EntityCollection, context: any, tag: string): void;
    /**
     * On json.parse, this handles the date part
     * @param entities
     * @param value
     */
    function parseDate(entities: EntityCollection, value: string): false | Date;
    /**
     * On json.parse, this function is responsible
     * for spinning back up instances to be remembered
     * @param entities
     * @param context
     * @param tag
     */
    function spinInstance(entities: EntityCollection, context: any, tag: string): any;
}
export default Assignments;
