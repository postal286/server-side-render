const Post = require('../models/postModel');
const userController = require('../controllers/userController');
const Busboy = require('busboy');
const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1');

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

  server.post('/api/uploads', function (req, res) {
    const busboy = new Busboy({ headers: req.headers });
    const id = uuidv1();
    let saveTo;
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log('file', file);
      console.log('fieldname', fieldname);
      console.log('filename', filename);
      console.log('mimetype', mimetype);
      saveTo = path.join(__dirname, '/../uploads/' + path.basename(id));
      console.log('saveTo', id);
      file.pipe(fs.createWriteStream(saveTo));
    });
    busboy.on('finish', function() {
      res.end(JSON.stringify({ filepath: id }));
    });
    return req.pipe(busboy);
  });

};