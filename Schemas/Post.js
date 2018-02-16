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

export default mongoose.model('Post', postSchema);

