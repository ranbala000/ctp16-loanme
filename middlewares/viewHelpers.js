const helpers = {};

helpers.register = () => {
  return (req, res, next) => {
    res.locals.cur_user = req.users;
    next();
  }
};

module.exports = helpers;
