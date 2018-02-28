const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config');

const User = require('./models/userModel');
const Post = require('./models/postModel');

const post = require('./routes/post');
const admin = require('./routes/admin');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = 3002;

app.prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());

    // config

    config(server, mongoose);

    // routes

    admin(server, app);
    post(server, app);

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