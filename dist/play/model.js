"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model;
(function (Model) {
    var User = /** @class */ (function () {
        function User() {
            this.name = "Bob Something";
            this.email = "bobsomething@gmail.com";
            this.created = new Date();
            this.meta = new UserMeta();
            this.somethings = [];
            this.createPosts();
        }
        User.prototype.createPosts = function () {
            for (var i = 0; i < 1000; i++) {
                this.somethings.push(new Post());
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
            this.title = "This is the title";
            this.post = "This is the content";
            this.created = new Date();
        }
        return Post;
    }());
    Model.Post = Post;
})(Model || (Model = {}));
exports.default = Model;
