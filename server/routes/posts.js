// posts.js

const router = require('express').Router();
let Post = require('../models/Post');

// Get all posts
router.route('/').get((req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new post
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const body = req.body.body;
  const author = req.body.author;

  const newPost = new Post({
    title,
    body,
    author,
  });

  newPost.save()
    .then(() => res.json('Post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
