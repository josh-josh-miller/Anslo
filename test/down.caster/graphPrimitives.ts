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
    expect(downer.graph.references).toBe(0);
    expect(downer.graph.type).toBe("object");
    expect(typeof downer.graph.contents).toBe("object");
    expect(downer.graph.contents.word.references).toBe(1);
    expect(downer.graph.contents.word2.references).toBe(1);
    expect(downer.graph.contents.word.type).toBe("string");
    expect(downer.graph.contents.word2.type).toBe("string");
}
