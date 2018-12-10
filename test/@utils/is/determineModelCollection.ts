import Is from "../../../src/utils/is";
import Exceptions from "../../../src/exceptions";
export function determineModelCollection() {
    class User {
    }
    expect(() => {
        Is.everyPropertyConstructable("name", { User, tow: null });
    }).toThrow(Exceptions.Exception);
}
