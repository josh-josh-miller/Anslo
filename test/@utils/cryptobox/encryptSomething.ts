import { Cryptobox } from "../../../src/utils/cryptobox";
import { key } from "./testing";
export function encryptSomething() {
    let string = Cryptobox.encrypt("something", key);
    expect(typeof string).toBe("string");
}
