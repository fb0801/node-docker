const Post = require("../models/postModels")

exports.getAllPosts = async(req, res, next) => {

    try {
        const posts = await Post.find()

        res.status(200).json({
            status: "success",
            results: posts.length,
            data: {
                posts
            }
        })


    } catch (e) {
        res.status(400)
    }
    
}