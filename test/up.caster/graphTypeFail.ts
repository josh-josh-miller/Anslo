import { UpCaster } from "../../src/up.caster";
import Exceptions from "../../src/exceptions";
export function graphTypeFail() {
    let data = {
        pointers: [],
        graph: { t: undefined }
    };
    expect(() => {
        new UpCaster("name", {}, JSON.stringify(data));
    }).toThrow(Exceptions.Exception);
}
