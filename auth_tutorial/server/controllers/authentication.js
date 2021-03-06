const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  // sub: subject, iat: issued at time
  return jwt.encode({
    sub: user.id,
    iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  res.send({ token: tokenForUser(req.user) })
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'})
  }

  // See if a user with a given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err); }
    // If a user with email does exist, return an error
    if (existingUser) {
      // 422 unprocessable entity
      return res.status(422).send({ error: 'Email is in use'});
    }

    // If a user with email does NOT exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });

    // Pass in callback function
    user.save(function(err) {
      return next(err);
    });
    // Respond to request indicating the user was created
    res.json({ token: tokenForUser(user) });
  });
}
