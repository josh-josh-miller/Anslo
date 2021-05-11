import Anslo from "../../src"
import Model from "../model"
import { randomBytes } from "crypto"
import { createInstance } from "./createInstance"
import { correctMethods } from "./correctMethods"
import { serialize } from "./serialize"

function unserialize() {
  let core = new Anslo(Model, "core")
  let user = new Model.User()
  let plain = core.down(user)
  expect(core.up(plain)).toEqual(user)
}

export function ansloTesting() {
  test("it should be able to create an instance", createInstance)
  test("it should have the correct methods", correctMethods)
  test("it should be able to serialize", serialize)
  test("it should be able to unserialize", unserialize)
}
