const sequelize = require('sequelize')
const Blog = require('../models/blog')
exports.createPosts = (req, res, next) => {

    Blog.create({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    }).then(
        (result) => {
            res.status(200).json({ message: "Blog Created Succesfully" })
        }
    )

}
exports.getPosts = (req, res, next) => {
    Blog.findAll().then(
        (result) => {
            res.status(200).json(result)
        }
    )

}