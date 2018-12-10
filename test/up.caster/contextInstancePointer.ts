import Anslo = require("../../src");
import { UpCaster } from "../../src/up.caster";
export function contextInstancePointer() {
    class User {
    }
    let user = new User();
    let anslo = new Anslo({ User }, "something");
    let string = anslo.down({
        userone: user,
        settings: {
            usertwo: user
        }
    });
    let up = new UpCaster("@~anslo.something", { User }, string).toInstance();
    expect(up.userone === up.settings.usertwo).toBe(true);
}
