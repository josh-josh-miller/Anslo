namespace Model {

    export class User {
        name: string = "Bob Something";
        email: string = "bobsomething@gmail.com";
        created: Date = new Date();
        meta = new UserMeta();
        public somethings: Post[] = []

        constructor() {
            this.createPosts();
        }

        public createPosts() {
            for (var i = 0; i < 100; i++) {
                this.somethings.push(new Post());
            }
        }
    }

    export class UserMeta {
        settings = true
    }

    export class Post {
        title: string = "This is the title";
        post: string = "This is the content";
        created: Date = new Date();
    }


}

export default Model;

