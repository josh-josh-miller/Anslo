import "jest";
import { ansloTesting } from "./anslo/testing";
import { assignTesting } from "./assign/testing";
import { downcasterTesting } from "./down.caster/testing";
import { exceptionsTesting } from "./exceptions/testing";
import { upcasterTesting } from "./up.caster/testing";
import { isTesting } from "./@utils/is/testing";

describe("Anslo", () => {
    describe("anslo", ansloTesting);
    describe("assign", assignTesting);
    describe("down.caster", downcasterTesting);
    describe("exceptions", exceptionsTesting);
    describe("up.caster", upcasterTesting);
    describe("utils/is", isTesting);
})
