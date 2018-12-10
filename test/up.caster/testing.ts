import { jsonFail } from "./jsonFail";
import { schemaFail } from "./schemaFail";
import { graphTypeFail } from "./graphTypeFail";
import { failUngraphArray } from "./failUngraphArray";
import { failUngraphDate } from "./failUngraphDate";
import { multipleDateSinglePointer } from "./multipleDateSinglePointer";
import { failUngraphObject } from "./failUngraphObject";
import { contextInstancePointer } from "./contextInstancePointer";
import { UpCaster } from "../../src/up.caster";
import Exceptions from "../../src/exceptions";

function failUngraphPrimitive() {
    let data = {
        pointers: [],
        graph: {
            references: null,
            type: "string"
        }
    }
    expect(() => {
        new UpCaster("name", {}, JSON.stringify(data))
    }).toThrow(Exceptions.Exception);
}

export function upcasterTesting() {
    test("It should fail with the when not presented with a valid json string", jsonFail);
    test("It should fail when give a json object that does not match schema", schemaFail);
    test("It should fail when graph.type is not a string", graphTypeFail)
    test("It should fail in ungraphing an array", failUngraphArray)
    test("It should fail in ungraphing a date", failUngraphDate);
    test("It should fail in ungraphing an object", failUngraphObject)
    test("It should be able to recognize context instance pointer", contextInstancePointer)
    test("It should be able to handle the date pointer construction in upgraphing date", multipleDateSinglePointer);
    test("It should fail in ungraphing a primitive", failUngraphPrimitive)
}
