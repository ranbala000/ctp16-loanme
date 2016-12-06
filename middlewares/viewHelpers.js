const helpers = {};

helpers.register = () => {
  return (req, res, next) => {
  	console.log("helpers");
  	console.log(req.user);
    res.locals.cur_user = req.user;
    next();
  }
};

module.exports = helpers;
