const axios = require('axios');

// alowed file extensions for post's image

const mimetypes = [ 'image/jpeg', 'image/jpg', 'image/png' ];

const spliceText = (text, from, to) => {
  if (text && text.length > to) {
    return `${text.slice(from, to)}...`;
  }
  return text;
};

const setToken = (res) => axios.defaults.headers.common.token = res.data.token;

module.exports.mimetypes = mimetypes;
module.exports.spliceText = spliceText;
module.exports.setToken = setToken;