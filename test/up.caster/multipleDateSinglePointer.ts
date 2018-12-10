import { UpCaster } from "../../src/up.caster";
import { DownCaster } from "../../src/down.caster";
export function multipleDateSinglePointer() {
    let now = new Date();
    let data = {
        now,
        nower: now
    };
    let down = new DownCaster("name", {}, data).toString();
    let d = new UpCaster("name", {}, down).toInstance();
    expect(d.now === d.nower).toBe(true);
}
