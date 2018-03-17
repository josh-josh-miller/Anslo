declare const _default: {
    new (constructors?: (new () => any)[]): {
        constructors: {
            [key: string]: new () => any;
        };
        split(constructors?: (new () => any)[]): any;
        forget(constructor: string | (new () => any)): void;
        stringify(obj: any): string;
        parse<Context extends any>(str: string, reviver?: (key: string, value: any) => any): Context;
    };
};
export = _default;
