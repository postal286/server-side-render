// alowed file extensions for post's image

const mimetypes = [ 'image/jpeg', 'image/jpg', 'image/png' ];

const spliceText = (text, from, to) => {
  if (text && text.length > to) {
    return `${text.slice(from, to)}...`;
  }
  return text;
};

module.exports.mimetypes = mimetypes;
module.exports.mimetypes = spliceText;