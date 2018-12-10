import { UpCaster } from "../../src/up.caster";
import Exceptions from "../../src/exceptions";
export function failUngraphArray() {
    expect(() => {
        let data = {
            graph: { type: "array", references: "lksjdflk" },
            pointers: []
        };
        new UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(Exceptions.Exception);
    expect(() => {
        let data = {
            graph: { type: "array", references: 0, contents: "slkdjflkjsdf" },
            pointers: []
        };
        new UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(Exceptions.Exception);
    expect(() => {
        let data = {
            graph: { type: "array", references: 10, contents: {} },
            pointers: []
        };
        new UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(Exceptions.Exception);
}
