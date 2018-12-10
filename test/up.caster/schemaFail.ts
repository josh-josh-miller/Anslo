import { UpCaster } from "../../src/up.caster";
import Exceptions from "../../src/exceptions";
export function schemaFail() {
    expect(() => {
        let up = new UpCaster("name", {}, "{}");
    }).toThrow(Exceptions.Exception);
    expect(() => {
        let up = new UpCaster("name", {}, '{"pointers": []}');
    }).toThrow(Exceptions.Exception);
}
