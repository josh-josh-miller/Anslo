import { DownCaster } from "../../src/down.caster";
export function graphDate() {
    // { references: 0,
    //     type: 'object',
    //     contents:
    //      { now: { references: 1, type: 'date', value: 2018-12-09T19:27:50.756Z },
    //        nower: { references: 1, type: 'date', value: 2018-12-09T19:27:50.756Z } } }
    let now = new Date();
    let data = {
        now,
        nower: now
    };
    let downer = new DownCaster("name", {}, data);
    expect(downer.graph.r).toBe(0);
    expect(downer.graph.t).toBe("object");
    expect(downer.graph.c.now.r).toBe(1);
    expect(downer.graph.c.nower.r).toBe(1);
    expect(downer.graph.c.now.t).toBe("date");
    expect(downer.graph.c.nower.t).toBe("date");
    expect(downer.graph.c.now.v).toBeInstanceOf(Date);
}
