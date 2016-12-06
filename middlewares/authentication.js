const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models').user;

function passwordsMatch(passwordSubmitted, storedPassword) {
  console.log("passwordsMatch");
  return bcrypt.compareSync(passwordSubmitted, storedPassword);
}
passport.use(new LocalStrategy({
  usernameField: 'email',
},
  (email, userpassword, done) => {
    User.findOne({
      where: { email },
    }).then((user) => {
      if (user) {
        if (passwordsMatch(userpassword, user.userpassword) === false) { console.log("first if");
          return done(null, false, { message: 'Incorrect password.' });
        }
      } else if (user == null) { console.log("second if");
        return done(null, false, { message: 'Incorrect email.' });
      }
      console.log("passport.use");
      return done(null, user, { message: 'Successfully Logged In!' });
    });
  })
);

passport.serializeUser((user, done) => {
  console.log("serializeUser");
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  User.findById(username).then((user) => {
    if (user == null) { console.log("deserializeUser");
      return done(null, false);
    }
    console.log("deserializeUser");
    return done(null, user);
  });
});

passport.redirectIfLoggedIn = (route) =>
  (req, res, next) => (req.user ? res.redirect(route) : next());

passport.redirectIfNotLoggedIn = (route) =>
  (req, res, next) => (req.user ? next() : res.redirect(route));

module.exports = passport;
