import Exceptions from "../../src/exceptions";
export function blowFunction() {
    expect(() => {
        Exceptions.blow("name", "message");
    }).toThrow();
}
