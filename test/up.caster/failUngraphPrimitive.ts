import { UpCaster } from "../../src/up.caster";
import Exceptions from "../../src/exceptions";
export function failUngraphPrimitive() {
    let data = {
        pointers: [],
        graph: {
            r: null,
            t: "string"
        }
    };
    expect(() => {
        new UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(Exceptions.Exception);
}
