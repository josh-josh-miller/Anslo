"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var Index_1 = require("../src/Index");
var Model_test_1 = require("./Model.test");
var anslo = new Index_1.Anslo([
    Model_test_1.Model.User,
    Model_test_1.Model.Note,
    Model_test_1.Model.Settings
]);
describe("Anslo", function () {
    test("Something Crazy", function () {
        var user = new Model_test_1.Model.User;
        user.name = "Something";
        user.settings.canDoSomething = true;
        var note = new Model_test_1.Model.Note;
        note.title = "This is the title of a note";
        note.content = "This is the content of a note";
        for (var i = 0; i < 100; i++) {
            user.notes.push(note);
        }
        var data = anslo.stringify(user);
        console.log(anslo.parse(data));
    });
});
