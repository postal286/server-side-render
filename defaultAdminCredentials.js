const User = require('./models/userModel');
const bcrypt = require('bcrypt');

const user = {
  fullName: 'Admin User',
  email: 'admin@gmail.com',
  hash_password: bcrypt.hashSync('admin', 10),
  role: 'admin',
};

User.find({ email: user.email }, function (err, docs) {
  if (!docs.length){
    User.create(user, function(e) {
      if (e) {
        throw e;
      }
      console.log('Default admin was created.');
    });
  } else {
    console.log('User ' + user.email + ' already exists.');
  }
});

