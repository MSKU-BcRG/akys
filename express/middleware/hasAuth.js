let createError = require('http-errors')

exports.isLoggedIn = function (req, res, next) {
    if (req.user)
        next();
    else
        next(createError(404, 'Page does not exist.'));
}