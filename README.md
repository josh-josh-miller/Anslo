# Anslo

A serializer/deserializer that can serialize pointer references and remember context.

```bash
npm install --save anslo
```

### How does it work?

```js
import Anslo from "anslo"

/**
 * Create an instance
 **/
let anslo = new Anslo()

/**
 * Create an instance of something
 * you would like to serialize
 **/
let user = new User()

/**
 * Do cool things like self referencing
 **/
user.self = user

/**
 * Serialize data down to a string
 **/
let string = anslo.down(user)

/**
 * Deserialize back to original state
 **/
let newUser = anslo.up(string)

/**
 * Done!!
 **/
console.log(newUser === newUser.self) //outputs: true
```

### What about remembering context? Let's use the same example.

```js
import Anslo from "anslo"

/**
 * Create an instance
 *
 * [Context]
 * Provide an object of constructors that
 * you would like to have Anslo remember,
 * and when they are revived, the pointer
 * will be an instance of the context provided
 **/
let anslo = new Anslo({ User })

/**
 * Create an instance of something
 * you would like to serialize
 **/
let user = new User()

/**
 * Do cool things like self referencing
 **/
user.self = user

/**
 * Serialize data down to a string
 **/
let string = anslo.down(user)

/**
 * Deserialize back to original state
 **/
let newUser = anslo.up(string)

/**
 * Done!!
 **/
console.log(newUser === newUser.self) //outputs: true
```

### Security Considerations

Serializing state down to a string and reviving it to its original state
raises strong security concerns. If there are any questions at all about
where serializations come from, use encryption and a signature to verify
you made it. Moreover, we are soon to be living in an time where quantum
computing is available; use a <b>post-quantum</b> algorithm.

<blockquote>
    "Be Kind and <strike>Rewind</strike> Encrypt Everything"
</blockquote>

### Caveats

- Properties that are functions will be serialized to <b>null</b>. Use classes with methods to provide functionality.

### What does the serialized string look like?

Let's say we were to run this bit of code...

```js
let data = [
  {
    name: "something",
    date: new Date(),
  },
]

/**
 * The second argument is the number of
 * spaces used to beautify the serialization.
 */
let string = anslo.down(data, 4)
console.log(string)
```

```json
{
  "pointers": [[], {}, "something", {}],
  "graph": {
    "r": 0,
    "t": "array",
    "c": {
      "0": {
        "r": 1,
        "t": "object",
        "c": {
          "name": {
            "r": 2,
            "t": "string"
          },
          "date": {
            "r": 3,
            "t": "date",
            "v": "2018-12-10T06:36:05.620Z"
          }
        }
      }
    }
  }
}
```

Minified, it would look like this.

```json
{
  "pointers": [[], {}, "something", {}],
  "graph": {
    "r": 0,
    "t": "array",
    "c": { "0": { "r": 1, "t": "object", "c": { "name": { "r": 2, "t": "string" }, "date": { "r": 3, "t": "date", "v": "2018-12-10T06:40:51.342Z" } } } }
  }
}
```
