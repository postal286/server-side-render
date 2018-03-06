const express = require('express');
const formidable = require('express-formidable');
const next = require('next');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config');

const User = require('./models/userModel');

const post = require('./routes/post');
const posts = require('./routes/posts');
const api = require('./routes/api');
const admin = require('./routes/admin');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = 3002;

app.prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(formidable({
      uploadDir: '/uploads',
      multiples: false,
    }));

    // config

    config(server, mongoose);

    // routes

    admin(server, app);
    post(server, app);
    posts(server, app);
    api(server);

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log('> Server is running on http://localhost:' + port);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });