import "jest"
import Anslo = require("../src/Index");
import { Model } from "./Model.test";

var anslo = new Anslo([
    Model.User,
    Model.Note,
    Model.Settings
]);

describe("Anslo", () => {
    test("Something Crazy", () => {
    })
})