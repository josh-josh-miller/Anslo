/**
 * Anslo is a wrapper around JSON.stringify and JSON.parse designed to remember original state.
 */
export declare class Anslo {
    /**
     * List of the constructors to check for when parsing
     */
    constructors: {
        [key: string]: (new () => any);
    };
    /**
     * Create a new instance
     * @param constructors List of all constructors you want to remember
     */
    constructor(constructors?: (new () => any)[]);
    /**
     * Create a new instance of Anslo remembering all install constructors, but with the ability overwrite
     * previously installed constructors with the same name.
     * @param constructors
     */
    split(constructors?: (new () => any)[]): Anslo;
    /**
     * Remove a constructor from the list to check for
     * @param constructor
     */
    forget(constructor: string | (new () => any)): void;
    /**
     * convert javascript data to string
     * @param obj
     */
    stringify(obj: any): string;
    /**
     * convert a string to javascript data remembering original state
     * @param str
     * @param reviver
     */
    parse<Context extends any>(str: string, reviver?: (key: string, value: any) => any): Context;
}
export default Anslo;
