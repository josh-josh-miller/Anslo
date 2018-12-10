import Is from "../../../src/utils/is";
export function determineObject() {
    expect(Is.obj({})).toBe(true);
    expect(Is.obj(undefined)).toBe(false);
    expect(Is.obj(null)).toBe(false);
}
