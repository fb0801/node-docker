const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        require: [true, "Post must have title"]
    },
    body: {
        type: String,
        required: [true, "POst must have body"]
    }
})

const Post = mongoose.model("Post", postSchema);
module.exports = Post;