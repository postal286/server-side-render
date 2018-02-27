const userController = require('../controllers/userController');

module.exports = function (server, app) {

  server.get('/admin', function (req, res) {
    app.render(req, res, '/admin');
  });

  server.post('/admin', userController.sign_in);
};