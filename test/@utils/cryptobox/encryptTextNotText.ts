import { Cryptobox } from "../../../src/utils/cryptobox";
import Exceptions from "../../../src/exceptions";
import { key } from "./testing";
export function encryptTextNotText() {
    expect(() => {
        Cryptobox.encrypt(null, key);
    }).toThrow(Exceptions.Exception);
}
