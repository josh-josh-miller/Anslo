import { Cryptobox } from "../../../src/utils/cryptobox";
import Exceptions from "../../../src/exceptions";
import { wrongLengthKey } from "./testing";
export function encryptKeyWrongLength() {
    expect(() => {
        Cryptobox.encrypt("lsdkfjlkjsdf", wrongLengthKey);
    }).toThrow(Exceptions.Exception);
}
