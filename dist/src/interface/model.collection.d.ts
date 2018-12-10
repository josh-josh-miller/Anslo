/**
 * What a collection of constructors
 * looks like
 */
export interface ModelCollection {
    [key: string]: new () => any;
}
