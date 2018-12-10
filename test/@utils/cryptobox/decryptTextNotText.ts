import { Cryptobox } from "../../../src/utils/cryptobox";
import Exceptions from "../../../src/exceptions";
import { key } from "./testing";
export function decryptTextNotText() {
    expect(() => {
        Cryptobox.decrypt(null, key);
    }).toThrow(Exceptions.Exception);
}
