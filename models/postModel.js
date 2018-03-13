const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  body: String,
  description: String,
  author: String,
  comments: [{ body: String, date: Date }],
  created_at: Date,
  updated_at: Date,
  publish: Boolean,
  img: String,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
