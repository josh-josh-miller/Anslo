import { createGraph } from "./createGraph";
import { graphArray } from "./graphArray";
import { graphObject } from "./graphObject";
import { graphDate } from "./graphDate";
import { graphPrimitives } from "./graphPrimitives";
import { toString } from "./toString";

export function downcasterTesting() {
    test("it should be able to create graph", createGraph);
    test("it should be able to graph an array", graphArray);
    test("it should be able to graph a date", graphDate);
    test("it should be able to graph obj", graphObject);
    test("it should be able to graph primitives", graphPrimitives);
    test("it should be able to produce a string", toString);
}
