import Anslo = require("../../src");
import Model from "../model";
import { randomBytes } from "crypto";
export function serialize() {
    let core = new Anslo({ User: Model.User }, "core");
    let user = new Model.User();
    let plain = core.down(user);
    expect(typeof plain).toBe("string");
}
