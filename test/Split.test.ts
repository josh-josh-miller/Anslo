import "jest"
import Anslo = require("../src/Index");
import { Model } from "./Model.test";
var anslo = new Anslo([
    Model.User,
    Model.Note
]);

class User {

}

var anslo2 = anslo.split([User])


describe("Anslo", () => {
    test("Should be able to split an anslo instance", () => {
        expect(anslo2).toBeInstanceOf(Anslo);
        expect(anslo2.constructors["User"]).toBe(User);
    })

    test("Empty split", () => {
        var instance = anslo.split();
        expect(instance.constructors["User"]).toBe(Model.User);
        expect(instance.constructors["Note"]).toBe(Model.Note);
    })
})