/**
 * Anslo is a wrapper around JSON.stringify and JSON.parse designed to remember original state.
 */
export = class Anslo {

    /**
     * List of the constructors to check for when parsing
     */
    public constructors: { [key: string]: (new () => any) } = {};

    /**
     * Create a new instance
     * @param constructors List of all constructors you want to remember
     */
    public constructor(constructors: (new () => any)[] = []) {
        if (constructors) {
            constructors.forEach(c => {
                this.constructors[c.name] = c;
            })
        }
    }

    /**
     * Create a new instance of Anslo remembering all install constructors, but with the ability overwrite
     * previously installed constructors with the same name.
     * @param constructors 
     */
    public split(constructors: (new () => any)[] = []) {
        var passables = [];
        for(var iterator in this.constructors) {
            passables.push(this.constructors[iterator]);
        }
        constructors.forEach(c => passables.push(c));
        return new Anslo(passables);
    }

    /**
     * Remove a constructor from the list to check for
     * @param constructor 
     */
    public forget(constructor: string | (new () => any)) {
        var name:string = typeof constructor === "string" ? constructor : constructor.name;
        if(this.constructors[name]) {
            delete this.constructors[name];
        }
    }

    /**
     * convert javascript data to string
     * @param obj 
     */
    public stringify(obj: any) {
        var write = (obj) => {
            if (typeof obj === "object" && obj !== null) {
                for (var iterator in obj) {
                    write(obj[iterator]);
                }
                if (this.constructors[obj.constructor.name]) {
                    if (obj.constructor.name !== "Date") {
                        obj["#type"] = obj.constructor.name;
                    }
                }
            } else if (Array.isArray(obj)) {
                obj.forEach(item => write(item));
            }
        }
        write(obj)
        return JSON.stringify(obj);
    }

    /**
     * convert a string to javascript data remembering original state
     * @param str 
     * @param reviver 
     */
    public parse<Context extends any>(str: string, reviver?: (key: string, value: any) => any): Context {
        return JSON.parse(str, (key, value) => {
            if (this.constructors["Date"]) {
                var a;
                if (typeof value === 'string') {
                    a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)(Z|([+\-])(\d{2}):(\d{2}))$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
            }
            if (typeof value === "object" && value !== null && value !== undefined) {
                if (typeof value["#type"] === "string") {
                    if (typeof this.constructors[value["#type"]] === "function") {
                        var context = new this.constructors[value["#type"]];
                        delete context["#type"];
                        for (var iterator in value) {
                            if (iterator !== "#type") {
                                context[iterator] = value[iterator];
                            }
                        }
                        return context;
                    } else {
                        throw new Error(`[Anslo][Exception][${new Date().toISOString()}] Could not find "class ${value["#type"]} {}". Make sure that you installed it.`);
                    }
                }
            }
            if (typeof reviver === "function") {
                return reviver(key, value)
            } else {
                return value;
            }
        })
    }
}