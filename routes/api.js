const Post = require('../models/postModel');
const userController = require('../controllers/userController');

module.exports = function (server) {

  server.get('/api/posts', function (req, res) {
    Post
      .find({ publish: true })
      .sort({ created_at: -1 })
      .limit(5)
      .exec(function (err, posts) {
        res.status(200).json({ posts });
      });
  });

  server.post('/api/posts', function (req, res) {
    const post = new Post({
      ...req.body.values,
    });
    post.save(function(err) {
      if (err) {
        res.json({ error: err });
      }
      return res.status(200).json({
        message: 'Post Was Successfully Created',
        success: true,
      });
    });
  });

  server.post('/api/admin', userController.sign_in);

  server.post('/api/uploads', function (req, res){
    console.log('res.file', res.file);
  });

};