import Exceptions from "../../src/exceptions";
export function exceptionInstance() {
    let exception = new Exceptions.Exception("name", "message");
    expect(exception.toString()).toBe("[Anslo][name] message");
}
