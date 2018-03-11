export class Anslo {

    public constructors: { [key: string]: (new () => any) } = {};

    public constructor(constructors?: (new () => any)[]) {
        if (constructors) {
            constructors.forEach(c => {
                this.constructors[c.name] = c;
            })
        }
    }

    public split(constructors: (new () => any)[] = []) {
        var passables = [];
        for(var iterator in this.constructors) {
            passables.push(this.constructors[iterator]);
        }
        constructors.forEach(c => passables.push(c));
        return new Anslo(passables);
    }

    public forget(constructor: string | (new () => any)) {
        var name:string = typeof constructor === "string" ? constructor : constructor.name;
        if(this.constructors[name]) {
            delete this.constructors[name];
        }
    }

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

export default Anslo;