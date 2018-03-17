import "jest"
import Anslo = require("../src/Index");
import { Model } from "./Model.test";
var anslo = new Anslo([
    Model.User,
    Model.Note
]);


describe("Anslo", () => {
    test("Should be able to forget a constructor", () => {
        anslo.forget("User");
        anslo.forget(Model.Note);
        expect(anslo.constructors["User"]).toBe(undefined);
        expect(anslo.constructors["Note"]).toBe(undefined);
    })

    test("Should not fail on a bad name", () => {
        anslo.forget("Something that doesn't exist");
        anslo.forget(Comment);
    })
})