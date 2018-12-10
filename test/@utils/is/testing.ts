import { determineObject } from "./determineObject";
import { determineDate } from "./determineDate";
import { determineModelCollection } from "./determineModelCollection";
import { determineBuiltFromModel } from "./determineBuiltFromModel";

export function isTesting() {
    test("it should be able to determine an object", determineObject);
    test("it should be able to determine a date", determineDate);
    test("it should be able to determine a model collection", determineModelCollection);
    test("it should be able to determine if built from model", determineBuiltFromModel)
}
