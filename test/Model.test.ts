import "jest";

export module Model {

    export class Settings {
        public canDoSomething: boolean = false;
    }

    export class Note {
        public title: string;
        public content: string;
        public created: Date;

        public doSomething() {

        }
    }

    export class User {
        public name: string;
        public email: string;
        public notes: Note[] = [];
        public created: Date;
        public settings: Settings = new Settings();

        public doSomething() {

        }
    }
}

test("Should have the models", () => {
    expect(typeof Model.User).toBe("function");
    expect(typeof Model.Note).toBe("function");
})
