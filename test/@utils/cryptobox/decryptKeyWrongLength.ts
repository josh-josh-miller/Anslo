import { Cryptobox } from "../../../src/utils/cryptobox";
import Exceptions from "../../../src/exceptions";
import { wrongLengthKey } from "./testing";
export function decryptKeyWrongLength() {
    expect(() => {
        Cryptobox.decrypt("lsdkfjlkjsdf", wrongLengthKey);
    }).toThrow(Exceptions.Exception);
}
