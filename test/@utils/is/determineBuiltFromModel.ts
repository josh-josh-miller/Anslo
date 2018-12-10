import Is from "../../../src/utils/is";
export function determineBuiltFromModel() {
    class User {
    }
    User["namex"] = "User";
    expect(Is.builtFromModel("namex", { User }, new User)).toBe(true);
}
