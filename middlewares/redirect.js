const redirect = {};

redirect.ifLoggedIn = (route) =>
  (req, res, next) => (req.users ? res.redirect(route) : next());

redirect.ifNotLoggedIn = (route = '/login') =>
  (req, res, next) => (req.users ? next() : res.redirect(route));

redirect.ifNotAuthorized = (route) =>
  (req, res, next) => (req.users.username !== req.params.username ? res.redirect(route) : next());

module.exports = redirect;
