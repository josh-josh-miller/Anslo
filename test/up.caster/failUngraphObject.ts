import { UpCaster } from "../../src/up.caster";
import Exceptions from "../../src/exceptions";
export function failUngraphObject() {
    let data = {
        pointers: [],
        graph: {
            r: null,
            t: "object"
        }
    };
    expect(() => {
        new UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(Exceptions.Exception);
}
