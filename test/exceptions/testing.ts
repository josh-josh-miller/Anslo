import { blowFunction } from "./blowFunction";
import { exceptionInstance } from "./exceptionInstance";

export function exceptionsTesting() {
    test("it should be able to produce an exception instance", exceptionInstance);
    test("it should be able to throw with the blow function", blowFunction)
}
