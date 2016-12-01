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
    models.Users.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      institution: req.body.institution,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }).then((users) => {
        console.log(users);
    }).catch(() => {
	console.log(users);
      res.render('signup');
    });
  },
};