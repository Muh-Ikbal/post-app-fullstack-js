const express = require('express');

const router = express.Router();
const upload = require('../middlewares/upload');
const { validatedPost } = require('../utils/validators/post');

const {
  findPosts,
  createPost,
  getPostById,
  updatePost,
} = require('../controllers/PostController');

router.get('/posts', findPosts);
//define route for post create
router.post('/posts', upload.single('image'), validatedPost, createPost);

router.get('/posts/:id', getPostById);
router.put('/posts/:id', upload.single('image'), validatedPost, updatePost);

module.exports = router;
