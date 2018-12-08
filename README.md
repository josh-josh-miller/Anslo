# Anslo
A json serializer/parser that can remember state.

### Installation
```bash
npm install --save anslo
```

Let's say you are working with Electron and you would like to save
state to a file. You wished that there was a great way to 
get all that data back just the way you saved it. How would Anslo handle
the serialization?

We create our model.
```ts
namespace Model {
    export class User {
        public name: string;
        public email: string;
    }
}

export default Model;
```

```ts
//Import it..
import Anslo = require("anslo");

//-------

let anslo = new Anslo(Model);

//-----------------

//Create our user to stringify
let user = new Model.User();
user.name = "something"

//-------------------

//We stringify the user
let down = anslo.stringify({
    user,
    arrayOfUsers: [ user, user, user ]
    ready: true
});

// Anslo recursively parses the user back to its original state.
let up = anslo.parse(down);

//expect(up.user).toBeInstanceOf(Model.User)
//=>true
```

That's it.
