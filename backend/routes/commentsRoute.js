const express = require('express');
const commentsRouter = express.Router();
const Comment = require('../database/commentModel');
const authentication = require('../middleware/authentication');


commentsRouter.get('/comments', async (req, res) => {
  try {
    const movieId = req.query.movieId;
    const comments = await Comment.find({ movieId });
    return res.status(200).json(comments);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

commentsRouter.post('/comments/create', authentication, async (req, res) => {
  try {
    if (!req.user) {
      const error = new Error('Please, sign in!');
      return res.status(401).json({ error: error.message });
    }

    const { movieId } = req.body;

    const newComment = {
      ...req.body,
      user: req.user._id,
      name: req.user.name
    };

    const existingComment = await Comment.findOne({ movieId, user: req.user._id });

    if (existingComment) {
      const error = new Error('You have already commented on this movie!');
      return res.status(400).json({ error: error.message });
    }

    const comment = new Comment(newComment);
    await comment.save();

    return res.status(201).json(comment);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = commentsRouter;
