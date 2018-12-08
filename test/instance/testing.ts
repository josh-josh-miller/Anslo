import Anslo = require("../../src");
import Anslox from "../../src/ts";
import Model from "../model";

let anslo: Anslo = new Anslo(Model);
let defaultAnslo: Anslo = new Anslo();
let namedAnslo: Anslo = new Anslo({ Date }, "something");
let unknownAnslo: Anslo = new Anslo(void 0, null);
let ansloTs: Anslo = new Anslox();

export function instanceTesting() {
    test("should be able to create an instance", () => {
        expect(anslo).toBeInstanceOf(Anslo);
        expect(defaultAnslo).toBeInstanceOf(Anslo);
        expect(namedAnslo).toBeInstanceOf(Anslo);
        expect(ansloTs).toBeInstanceOf(Anslo);
        expect(namedAnslo.tag).toBe("@~something");
        expect(unknownAnslo.tag).toBe("@~unknown");
        expect(() => {
            new Anslo(null)
        }).toThrow();
    })

    test("should have the approriate properties and methods", () => {
        expect(typeof anslo.tag).toBe("string");
        expect(typeof anslo.stringify).toBe("function");
        expect(typeof anslo.parse).toBe("function");
    })

    test("should be able to stringify", () => {
        let user = new Model.User()
        expect(typeof anslo.stringify(user)).toBe("string");
        expect(typeof anslo.stringify(user, 2)).toBe("string");
    })

    test("should be able to parse a string", () => {
        let user = new Model.User();
        let string = anslo.stringify(user);
        let instance = anslo.parse<Model.User>(string);
        expect(instance).toBeInstanceOf(Model.User);
        expect(instance.name).toBe("Bob Something");
        expect(instance.email).toBe("bobsomething@gmail.com");
        expect(instance.somethings.length).toBe(100);
        expect(instance.somethings[0]).toBeInstanceOf(Model.Post);
        expect(namedAnslo.parse<Model.User>(string).created).toBeInstanceOf(Date);
    })
}
