# Anslo
A serializer/deserializer that can serialize pointer references and remember context.

```bash
npm install --save anslo
```

### How does it work?
```js
const Anslo = require("anslo");

/**
 * Create an instance
 **/
let anslo = new Anslo();


/**
 * Create an instance of something
 * you would like to serialize
 **/ 
let user = new User();

/**
 * Do cool things like self referencing
 **/
user.self = user;

/**
 * Serialize data down to a string
 **/
let string = anslo.down(user)

/**
 * Deserialize back to original state
 **/
let newUser = anslo.up(string);

/**
 * Done!!
 **/
console.log(newUser === newUser.self); //outputs: true

```

### What about remembering context? Let's use the same example.
```js
const Anslo = require("anslo");

/**
 * Create an instance
 * 
 * [Context]
 * Provide an object of constructors that
 * you would like to have Anslo remember, 
 * and when they are revived, the pointer
 * will be an instance of the context provided
 **/
let anslo = new Anslo({ User });


/**
 * Create an instance of something
 * you would like to serialize
 **/ 
let user = new User();

/**
 * Do cool things like self referencing
 **/
user.self = user;

/**
 * Serialize data down to a string
 **/
let string = anslo.down(user)

/**
 * Deserialize back to original state
 **/
let newUser = anslo.up(string);

/**
 * Done!!
 **/
console.log(newUser === newUser.self); //outputs: true

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
