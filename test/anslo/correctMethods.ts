import Anslo = require("../../src");
export function correctMethods() {
    let anslo = new Anslo;
    expect(typeof anslo.up).toBe("function");
    expect(typeof anslo.down).toBe("function");
}
