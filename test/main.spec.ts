import Anslo from '../src'

class User {
  self: User
  listOfNumbers: number[] = [1, 2, 3, 4, 5, 6]
  created: Date = new Date("2022-10-10")
}

describe("anslo", () => {
  it("can blow on bad model", () => {
    expect(() => new Anslo(null)).toThrowErrorMatchingSnapshot()
  })

  it("can serialize and deserialize", () => {
    const user = new User()
    user.self = user
    const anslo = new Anslo({
      User,
    })
    const serialization = anslo.down(user)
    const userTwo = anslo.up(serialization)
    expect(user).toEqual(userTwo)
    expect(serialization).toMatchSnapshot()
  })

  it("fails to parse an invalid string", () => {
    const anslo = new Anslo({})
    expect(() => anslo.up("{")).toThrowErrorMatchingSnapshot()
  })

  it(`can serialize with spaces`, () => {
    const user = new User()
    user.self = user
    const anslo = new Anslo({
      User,
    })
    expect(anslo.down(user, 4)).toMatchSnapshot()
  })
})
