import Assign from "../../src/assign";
export function assignNamespace() {
    class User {
    }
    Assign.namespaceToModels("one", {
        user: User,
    });
    expect(User["one"]).toBe("user");
}
