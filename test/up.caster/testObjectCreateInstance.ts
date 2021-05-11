import Anslo from "../../src"
export function testObjectCreateInstance() {
  class User {
    public constructor(public name: string) {}
  }
  let user = new User("Something")
  let anslo = new Anslo(Object.assign({ User }))
  let string = anslo.down(user)
  let newUser = anslo.up<User>(string)
  expect(newUser.name === "Something").toBe(true)
  expect(newUser).toBeInstanceOf(User)
}
