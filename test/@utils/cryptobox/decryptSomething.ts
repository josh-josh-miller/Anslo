import { Cryptobox } from "../../../src/utils/cryptobox";
import { key } from "./testing";
export function decryptSomething() {
    let string = Cryptobox.encrypt("something", key);
    let something = Cryptobox.decrypt(string, key);
    expect(something).toBe("something");
}
