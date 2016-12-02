const express = require('express');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/', this.submit);

    return router;
  },
  index(req, res) {
    res.render('signup');
  },
  submit(req, res) {
    models.user.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      institution: req.body.institution,
      username: req.body.username,
      email: req.body.email,
      userpassword: req.body.userpassword,
    }).then((user) => {
      res.render('profile', { user: user, success: req.flash('success') });
    }).catch((user) => {
      console.log(user);
      res.render('signup');
    });
  },
};