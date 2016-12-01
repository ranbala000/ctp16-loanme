const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Users = require('../models').Users;

function passwordsMatch(passwordSubmitted, storedPassword) {
  return bcrypt.compareSync(passwordSubmitted, storedPassword);
}

passport.use(new LocalStrategy({
  usernameField: 'username',
},
  (username, password, done) => {
    Users.findOne({
      where: { username },
    }).then((users) => {
      if (users) {
        if (passwordsMatch(password, users.password) === false) {
          return done(null, false, { message: 'Incorrect password.' });
        }
      } else if (users == null) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      return done(null, users, { message: 'Successfully Logged In!' });
    });
  })
);

passport.serializeUser((users, done) => {
  done(null, users.username);
});

passport.deserializeUser((username, done) => {
  Users.findById(username).then((users) => {
    if (users == null) {
      return done(null, false);
    }

    return done(null, users);
  });
});

// lets see!!
 passport.redirectIfLoggedIn = (route) =>
  (req, res, next) => (req.users ? res.redirect(route) : next());

passport.redirectIfNotLoggedIn = (route) =>
  (req, res, next) => (req.users ? next() : res.redirect(route));

module.exports = passport;
