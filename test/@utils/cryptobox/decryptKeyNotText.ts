import { Cryptobox } from "../../../src/utils/cryptobox";
import Exceptions from "../../../src/exceptions";
export function decryptKeyNotText() {
    expect(() => {
        Cryptobox.decrypt("lksjdflkjs", null);
    }).toThrow(Exceptions.Exception);
}
