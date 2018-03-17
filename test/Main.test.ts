import "jest"
import Anslo = require("../src/Index");
import { Model } from "./Model.test";
var anslo = new Anslo([
    Model.User, 
    Model.Note
]);


describe("Anslo", () => {

    test("Should be able to create an instance and guts be there.", () => {
        expect(anslo).toBeInstanceOf(Anslo);
        expect(typeof anslo.constructors).toBe("object");
        expect(typeof anslo.parse).toBe("function");
        expect(typeof anslo.stringify).toBe("function");
    })

    test("Should be able to install constructors", () => {
        expect(anslo.constructors["User"]).toBe(Model.User);
        expect(anslo.constructors["Note"]).toBe(Model.Note);
    })

    test("Expect anslo not to throw if nothing was passed in the constructor", () => {
        expect(new Anslo()).toBeInstanceOf(Anslo);
    })
})