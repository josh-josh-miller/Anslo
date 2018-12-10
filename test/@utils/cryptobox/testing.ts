import { randomBytes } from "crypto";
import { encryptSomething } from "./encryptSomething";
import { decryptSomething } from "./decryptSomething";
import { encryptTextNotText } from "./encryptTextNotText";
import { decryptTextNotText } from "./decryptTextNotText";
import { encryptKeyNotText } from "./encryptKeyNotText";
import { decryptKeyNotText } from "./decryptKeyNotText";
import { encryptKeyWrongLength } from "./encryptKeyWrongLength";
import { decryptKeyWrongLength } from "./decryptKeyWrongLength";

export let key = randomBytes(24).toString("base64");
export let wrongLengthKey = randomBytes(6).toString("base64");
let nullKey = null;

export function cryptoboxTesting() {
    test("it should be able to encrypt something", encryptSomething);
    test("it should be able to decrypt something", decryptSomething);
    test("it should be able to fail encrypt.text not text", encryptTextNotText);
    test("it should be able to fail decrypt.text not text", decryptTextNotText);
    test("it should be able to fail encrypt.key not text", encryptKeyNotText);
    test("it should be able to fail decrypt.key not text", decryptKeyNotText);
    test("it should be able to fail when encrypt.key wrong length", encryptKeyWrongLength);
    test("it should be able to fail when decrypt.key wrong length", decryptKeyWrongLength);
}
