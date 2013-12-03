module.exports = {

  index: function(req, res) {
    console.log('upload');
    Users.find().done(function(err, users) {
      res.send(users);
    });
  }
};
