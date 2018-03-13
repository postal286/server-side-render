module.exports = function(server, app) {

  server.get('/post/:id', (req, res) => {
    const actualPage = '/post';
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  });

};