import { UpCaster } from "../../src/up.caster";
import Exceptions from "../../src/exceptions";
export function failUngraphArray() {
    expect(() => {
        let data = {
            graph: { t: "array", r: "lksjdflk" },
            pointers: []
        };
        new UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(Exceptions.Exception);
    expect(() => {
        let data = {
            graph: { t: "array", r: 0, c: "slkdjflkjsdf" },
            pointers: []
        };
        new UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(Exceptions.Exception);
    expect(() => {
        let data = {
            graph: { t: "array", r: 10, c: {} },
            pointers: []
        };
        new UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(Exceptions.Exception);
}
