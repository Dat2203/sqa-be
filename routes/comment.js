const router = require("express").Router();
const Post = require("../app/models/Post");
const User = require("../app/models/User");
const Comment = require("../app/models/Comments");

// GET comments by post id
router.get("/:id", async (req, res) => {
  try {
    const CommentDB = await Comment.find({ postId: req.params.id });

    res.status(200).json(userPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Put create comment
router.post("/", async (req, res) => {
  const newCommnet = new Comment(req.body);
  try {
    const save = await newCommnet.save();
    res.status(200).json(save);
  } catch (err) {
    res.status(500).json(err);
  }
});
