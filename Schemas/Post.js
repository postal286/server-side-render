const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  body: String,
  author: String,
  comments: [{ body: String, date: Date }],
  created_at: { type: Date, default: Date.now },
  updated_at: Date,
  hidden: Boolean,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
