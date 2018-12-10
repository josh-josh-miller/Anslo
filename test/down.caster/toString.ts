import { DownCaster } from "../../src/down.caster";
export function toString() {
    let data = {
        word: "word",
        word2: "word"
    };
    let downer = new DownCaster("name", {}, data);
    let string = downer.toString();
    let stringWithSpaces = downer.toString(4);
    expect(typeof string).toBe("string");
    expect(string.length).toBe(159);
    expect(typeof stringWithSpaces).toBe("string");
    expect(stringWithSpaces.length).toBe(365);
}
