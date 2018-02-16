const express = require('express');
const next = require('next');
const mongoose = require('mongoose');

const config = require('./config');

const User = require('./Schemas/User');
const Post = require('./Schemas/Post');

const post = require('./routes/post');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    // config

    config(server, mongoose);

    // routes

    post(server, app);

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Server is running on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });