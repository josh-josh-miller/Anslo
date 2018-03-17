import "jest"
import Anslo = require("../src/Index");
import { Model } from "./Model.test";
var anslo = new Anslo([
    Model.User, 
    Model.Note,
    Model.Settings
]);

describe("Anslo.stringify", () => {
    test("Should be able to stringify an instance of an object and mark it", () => {
        var user = new Model.User;
        user.name = "Some Name";
        user.created = new Date();
        user.notes.push(new Model.Note);
        var string = anslo.stringify(user);
        expect(typeof string).toBe("string");
        expect(/\"\#type\":\"User\"/g.test(string)).toBe(true);
        expect(/\"\#type\":\"Settings\"/g.test(string)).toBe(true);
        expect(/\"\#type\":\"Note\"/g.test(string)).toBe(true);
    })

    test("Stringify something that is not an object or array", () => {
        expect(anslo.stringify(false)).toBe("false");
    })

    test("Stringify an array", () => {
        var string = anslo.stringify([new Model.User]);
        expect(/\"\#type\":\"User\"/g.test(string)).toBe(true);
    })
})