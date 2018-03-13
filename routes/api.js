const Post = require('../models/postModel');
const userController = require('../controllers/userController');
const Busboy = require('busboy');
const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1');
const mimetypes = require('../common').mimetypes;

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
      ...req.body,
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
    let fileName;

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {

      if (mimetypes.includes(mimetype.toLowerCase())) {
        const id = uuidv1();
        fileName = id + path.extname(filename);
        const saveTo = path.join(__dirname, '/../uploads/' + path.basename(fileName));
        file.pipe(fs.createWriteStream(saveTo));
      } else {
        const message = path.extname(filename).toUpperCase() + ' format is not alowed!';
        res.status(400).end(JSON.stringify( { message: message } ));
      }

    });

    busboy.on('finish', function() {
      res.end(JSON.stringify({
        success: true,
        img: fileName,
      }));
    });
    return req.pipe(busboy);
  });

};