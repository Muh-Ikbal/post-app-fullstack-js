const prisma = require('../prisma/client');
const { validationResult } = require('express-validator');
const { nanoid } = require('nanoid');

const findPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        image: true,
        title: true,
        content: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
    res.status(200).send({
      success: true,
      message: 'Get all posts successfully',
      data: posts,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: 'internal server error : ' + err.message,
    });
  }
};

// createPost function
const createPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: 'Validation error',
      errors: errors.array(),
    });
  }
  try {
    const id = nanoid(16);
    const post = await prisma.post.create({
      data: {
        id: id,
        image: req.file.filename,
        title: req.body.title,
        content: req.body.content,
      },
    });
    res.status(201).send({
      success: true,
      message: 'Post created successfully',
      data: {
        id: post.id,
        title: post.title,
      },
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: 'internal sevrer error : ' + err.message,
    });
  }
};

// getpostbyid function

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).send({
      success: true,
      message: 'Get post by id successfully',
      data: post,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: 'internal server error : ' + err.message,
    });
  }
};

module.exports = { findPosts, createPost, getPostById };
