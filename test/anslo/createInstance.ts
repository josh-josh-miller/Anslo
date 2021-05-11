import Anslo from "../../src"
import Model from "../model"
export function createInstance() {
  let anslo = new Anslo()
  let core = new Anslo({ User: Model.User }, "core")
  let sub = new Anslo({}, "sub-main")
  expect(anslo).toBeInstanceOf(Anslo)
  expect(core).toBeInstanceOf(Anslo)
  expect(sub).toBeInstanceOf(Anslo)
  expect(typeof anslo["models"]).toBe("object")
  expect(typeof anslo["namespace"]).toBe("string")
  expect(() => {
    new Anslo(null)
  }).toThrow()
}
