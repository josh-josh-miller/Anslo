# Anslo

Anslo is a json serializer and parser that recursively remembers the original instance's state.

Installation
```bash
npm install anslo
```

Getting set up
```js
//pull in anslo
const Anslo = require("anslo");

//get your models
const User = require("./User");
const Note = require("./Note");

//you must supply the models you wish to transform
const anslo = new Anslo([User, Note, Date])
```

Stringify to remember instance state;
```js
async function usersToJson() {
    var users = await User.all();
    return anslo.stringify(users);
}
```

Parse to remember instance state.
```js
function findActiveUsersFromString(json) {
    var users = anslo.parse(json);
    return users.filter(user => {
        return user.isActive();
    })
}
```