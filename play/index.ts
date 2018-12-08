import Anslo = require("../src");
import Model from "./model";

let main = new Anslo(Object.assign({ Date }, Model), "main");

let user = new Model.User();
let string = main.stringify(user);
let instance = main.parse(string);

console.log(instance)
