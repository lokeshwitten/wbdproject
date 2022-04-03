const express = require('express');
const isAuth = require('../middleware/is-auth')
const blogController = require('../controllers/blog');

const router = express.Router();

router.post('/createpost', isAuth.isAuth, blogController.createPosts);
router.get('/posts', isAuth.isAuth, blogController.getPosts)
module.exports = router;