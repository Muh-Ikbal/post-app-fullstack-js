const express = require('express');

const router = express.Router();
const upload = require('../middlewares/upload');
const { validatedPost } = require('../utils/validators/post');

const {
  findPosts,
  createPost,
  getPostById,
} = require('../controllers/postController');

router.get('/posts', findPosts);
//define route for post create
router.post('/posts', upload.single('image'), validatedPost, createPost);

router.get('/posts/:id', getPostById);

module.exports = router;
