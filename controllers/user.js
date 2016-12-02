const express = require('express');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/:username', this.show);

    return router;
  },
  index(req, res) {
    models.users.findAll().then((users) => {
      res.render('users', {
        users,
      });
    });
  },
  show(req, res) {
    models.users.findOne({
      where: { username: req.params.username },
    }).then((users) => {
      res.render("No Items!")
    }).catch(() => {
      res.render('users/single');
    });
  },
};
