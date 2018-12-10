import Anslo = require("../../src");
import Model from "../model";
import { randomBytes } from "crypto";
export function serialize() {
    let core = new Anslo({ User: Model.User }, "core");
    let user = new Model.User();
    let plain = core.down(user);
    let key = randomBytes(24).toString("base64");
    let encrypted = core.down(user, key);
    let withSpaces = core.down(user, null, 5);
    expect(typeof plain).toBe("string");
    expect(typeof encrypted).toBe("string");
    expect(typeof withSpaces).toBe("string");
}
