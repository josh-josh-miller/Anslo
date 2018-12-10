declare namespace Model {
    class User {
        name: string;
        email: string;
        meta: UserMeta;
        created: Date;
        posts: Post[];
        constructor();
        createPosts(): void;
    }
    class UserMeta {
        settings: boolean;
    }
    class Post {
        title: string;
        post: string;
        created: Date;
    }
}
export default Model;
