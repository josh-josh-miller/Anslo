namespace Model {

    export class User {
        public name: string = "name";
        public email: string = "email";
        public meta: UserMeta = new UserMeta();
        public created: Date = new Date();
        public posts: Post[] = []

        public constructor() {
            this.createPosts();
        }

        public createPosts() {
            for (var i = 0; i < 100; i++) {
                this.posts.push(new Post());
            }
        }
    }

    export class UserMeta {
        public settings: boolean = true
    }

    export class Post {
        public title: string = "title";
        public post: string = "content";
        public created: Date = new Date();
    }

}

export default Model;

