import { DownCaster } from "../../src/down.caster";
export function graphArray() {
    // { references: 0,
    //     type: 'array',
    //     contents:
    //      { '0': { references: 1, type: 'array', contents: [Object] },
    //        '1': { references: 1, type: 'array' } } }
    let list = [1, 2, 3];
    let downer = new DownCaster("name", {}, [list, list]);
    expect(downer.graph.references).toBe(0);
    expect(downer.graph.type).toBe("array");
    expect(typeof downer.graph.contents).toBe("object");
    expect(downer.graph.contents[0].references).toBe(1);
    expect(downer.graph.contents[0].type).toBe("array");
    expect(typeof downer.graph.contents[0]).toBe("object");
    expect(downer.graph.contents[1].contents).toBe(undefined);
}
