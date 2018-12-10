import Is from "../../../src/utils/is";
export function determineDate() {
    expect(Is.date(new Date)).toBe(true);
    expect(Is.date(null)).toBe(false);
}
