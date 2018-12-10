import { Cryptobox } from "../../../src/utils/cryptobox";
import Exceptions from "../../../src/exceptions";
export function encryptKeyNotText() {
    expect(() => {
        Cryptobox.encrypt("lksjdflkjs", null);
    }).toThrow(Exceptions.Exception);
}
