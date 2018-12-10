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
    expect(downer.graph.references).toBe(0);
    expect(downer.graph.type).toBe("object");
    expect(downer.graph.contents.now.references).toBe(1);
    expect(downer.graph.contents.nower.references).toBe(1);
    expect(downer.graph.contents.now.type).toBe("date");
    expect(downer.graph.contents.nower.type).toBe("date");
    expect(downer.graph.contents.now.value).toBeInstanceOf(Date);
}
