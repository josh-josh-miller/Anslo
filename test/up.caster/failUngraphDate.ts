import { UpCaster } from "../../src/up.caster";
import Exceptions from "../../src/exceptions";
export function failUngraphDate() {
    expect(() => {
        let data = {
            graph: { type: "date", references: "lsdf" },
            pointers: []
        };
        new UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(Exceptions.Exception);
    expect(() => {
        let data = {
            graph: { type: "date", references: 0 },
            pointers: []
        };
        new UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(Exceptions.Exception);
    expect(() => {
        let data = {
            graph: { type: "date", references: 0, value: new Date().toISOString() },
            pointers: []
        };
        new UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(Exceptions.Exception);
}
