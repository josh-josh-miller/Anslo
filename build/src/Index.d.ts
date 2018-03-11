export declare class Anslo {
    constructors: {
        [key: string]: (new () => any);
    };
    constructor(constructors?: (new () => any)[]);
    split(constructors?: (new () => any)[]): Anslo;
    forget(constructor: string | (new () => any)): void;
    stringify(obj: any): string;
    parse<Context extends any>(str: string, reviver?: (key: string, value: any) => any): Context;
}
