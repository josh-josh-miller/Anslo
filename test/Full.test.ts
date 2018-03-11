import "jest"
import { Anslo } from "../src/Index";
import { Model } from "./Model.test";

var anslo = new Anslo([
    Model.User,
    Model.Note,
    Model.Settings
]);

describe("Anslo", () => {
    test("Something Crazy", () => {
        var user = new Model.User;
        user.name = "Something";
        user.settings.canDoSomething = true;
        
        var note = new Model.Note;
        note.title = "This is the title of a note";
        note.content = "This is the content of a note";
        for (var i = 0; i < 100; i++) {
            user.notes.push(note);
        }
        var data = anslo.stringify(user)
        console.log(anslo.parse(data));
    })
})