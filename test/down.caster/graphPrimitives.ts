import { DownCaster } from "../../src/down.caster";
export function graphPrimitives() {
    // { references: 0,
    //     type: 'object',
    //     contents:
    //      { word: { references: 1, type: 'string' },
    //        word2: { references: 1, type: 'string' } } }
    let data = {
        word: "word",
        word2: "word"
    };
    let downer = new DownCaster("name", {}, data);
    expect(downer.graph.r).toBe(0);
    expect(downer.graph.t).toBe("object");
    expect(typeof downer.graph.c).toBe("object");
    expect(downer.graph.c.word.r).toBe(1);
    expect(downer.graph.c.word2.r).toBe(1);
    expect(downer.graph.c.word.t).toBe("string");
    expect(downer.graph.c.word2.t).toBe("string");
}
