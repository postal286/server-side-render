
module.exports = function (server, app) {

  server.get('/admin', function (req, res) {
    app.render(req, res, '/admin');
  });

};