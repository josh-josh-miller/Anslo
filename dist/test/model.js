"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model;
(function (Model) {
    var User = /** @class */ (function () {
        function User() {
            this.name = "name";
            this.email = "email";
            this.meta = new UserMeta();
            this.created = new Date();
            this.posts = [];
            this.createPosts();
        }
        User.prototype.createPosts = function () {
            for (var i = 0; i < 100; i++) {
                this.posts.push(new Post());
            }
        };
        return User;
    }());
    Model.User = User;
    var UserMeta = /** @class */ (function () {
        function UserMeta() {
            this.settings = true;
        }
        return UserMeta;
    }());
    Model.UserMeta = UserMeta;
    var Post = /** @class */ (function () {
        function Post() {
            this.title = "title";
            this.post = "content";
            this.created = new Date();
        }
        return Post;
    }());
    Model.Post = Post;
})(Model || (Model = {}));
exports.default = Model;
