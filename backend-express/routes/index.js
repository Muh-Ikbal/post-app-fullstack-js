const express = require('express');

const router = express.Router();
const upload = require('../middlewares/upload');
const { validatedPost } = require('../utils/validators/post');

const {
  findPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} = require('../controllers/PostController');
// post
router.get('/posts', findPosts);
router.post('/posts', upload.single('image'), validatedPost, createPost);
router.get('/posts/:id', getPostById);
router.put('/posts/:id', upload.single('image'), validatedPost, updatePost);
router.delete('/posts/:id', deletePost);

// login

module.exports = router;
