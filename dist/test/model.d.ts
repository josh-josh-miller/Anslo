declare namespace Model {
    class User {
        name: string;
        email: string;
        created: Date;
        meta: UserMeta;
        somethings: Post[];
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
