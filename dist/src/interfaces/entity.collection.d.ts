export interface EntityCollection {
    [key: string]: new () => any;
}
