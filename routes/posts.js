module.exports = function (server, app) {

  server.get('/posts', function (req, res) {
    app.render(req, res, '/posts');
  });
};