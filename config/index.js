const dataBaseName = require('../seed');

module.exports = function (server, mongoose) {

  server.set(dataBaseName, `mongodb://localhost:27017/${dataBaseName}`);

  mongoose.connect(server.get(dataBaseName));

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(){
    console.log('db connected');
  });
};