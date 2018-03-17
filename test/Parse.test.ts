import "jest"
import Anslo = require("../src/Index");
import { Model } from "./Model.test";
var anslo = new Anslo([
    Model.User, 
    Model.Note,
    Model.Settings
]);

var anslo2 = new Anslo([
    Model.User,
    Model.Note,
    Model.Settings,
    Date
])

var anslo3 = new Anslo([]);

var string = JSON.stringify({
    name: "Something name",
    created: new Date(),
    "#type" : "User"
})

var badstring = JSON.stringify({
    name: "Plain Instance Name",
    "#type": {}
})

describe("Anslo.stringify", () => {
    test("Should be able to parse an instance of an object with the type flag", () => {
        var user = anslo.parse<Model.User>(string)
        expect(user).toBeInstanceOf(Model.User);
        expect(user.name).toBe("Something name");
        expect(typeof user.created).toBe("string");
    })

    test("Should be able to parse date strings", () => {
        var user = anslo2.parse<Model.User>(string);
        expect(user).toBeInstanceOf(Model.User);
        expect(user.name).toBe("Something name");
        expect(user.created instanceof Date).toBe(true);
    })

    test("Test with reviver", () => {
        var user = anslo2.parse<Model.User>(string, (key, value) => {
            if(key === "name") {
                return "Something else";
            }
            return value;
        })
        expect(user).toBeInstanceOf(Model.User);
        expect(user.name).toBe("Something else");
        expect(user.created instanceof Date).toBe(true);
    })

    test("Should throw if type is not installed", () => {
        expect(function() {
            anslo3.parse<Model.User>(string);
        }).toThrowError();
    })

    test("Should fall through if #type is not a string", () => {
        expect(anslo.parse<Model.User>(badstring)).toBeInstanceOf(Object);
    })
})