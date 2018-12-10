import { UpCaster } from "../../src/up.caster";
import Exceptions from "../../src/exceptions";
export function failUngraphDate() {
    expect(() => {
        let data = {
            graph: { t: "date", r: "lsdf" },
            pointers: []
        };
        new UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(Exceptions.Exception);
    expect(() => {
        let data = {
            graph: { t: "date", r: 0 },
            pointers: []
        };
        new UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(Exceptions.Exception);
    expect(() => {
        let data = {
            graph: { t: "date", r: 0, v: new Date().toISOString() },
            pointers: []
        };
        new UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(Exceptions.Exception);
}
