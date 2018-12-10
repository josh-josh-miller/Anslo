import { UpCaster } from "../../src/up.caster";
import Exceptions from "../../src/exceptions";
export function jsonFail() {
    expect(() => {
        let up = new UpCaster("name", {}, "lksjdflkjsdfoijweflkjsdfoijwef");
    }).toThrow(Exceptions.Exception);
}
