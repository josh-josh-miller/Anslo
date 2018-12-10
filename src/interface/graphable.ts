/**
 * Represents what a graph looks like
 */
export interface Graphable {
    /**
     * Specifies the reference index
     */
    r: number;
    /**
     * Specifies the typeof
     */
    t: string;
    /**
     * Specifies the value... specifically for Date
     */
    v?: any;
    /**
     * Specifies context of an object
     */
    cx?: string;
    /**
     * Specifies an object of contents
     */
    c?: { [key: string]: Graphable };
}
