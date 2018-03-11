# Anslo 0.0.4

Anslo is a wrapper around JSON.stringify and JSON.parse designed to remember original state.

Let's say we two models
```ts
export class User {
    public id: number;
    public name: string;
    public email: string;
    public posts: Post[] = [];

    public doSomething() {
        alert(this.name);
    }
}

export class Post {
    public id: number;
    public title: string;
    public content: string;
}
```

We do our work with these models and serialize the end result.
```ts
function controller() {
    var user = new User;
    user.name = "Something";
    user.posts.push(new Post);
    send(JSON.stringify(user));
}
```
When we stringify the "user", all information about the original state is lost.

Let's re-work the code a litte bit
```ts
import { Anslo } from "anslo";

const anslo = new Anslo([User, Post]);

function controller() {
    var user = new User;
    user.name = "Something"
    user.posts.push(new Post);
    send(anslo.stringify(user));
}
```
Outputs
```json
{"name":"Something", "#type": "User", "posts": [{"#type":"Post"}]}
```

When we want to parse the string, you will be returned the original state.
```ts
var user = anslo.parse(jsonString);
user.doSomething();
```

This comes in super handy when you have multiple nested states to remember.