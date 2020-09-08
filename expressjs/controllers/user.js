
let models = require('../models');
let bcrypt = require('bcryptjs');
const passport = require('passport');
const myPassport = require('../passport_setup')(passport);
let flash = require('connect-flash');

const { validateUser } = require('../validators/signup');
const { isEmpty } = require('lodash');

exports.show_login = function (req, res, next) {
    res.render('user/login', { formData: {}, errors: {} });
}

exports.show_signup = function (req, res, next) {
    res.render('user/signup', { formData: {}, errors: {} });
}

const generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

exports.signup = function (req, res, next) {
    const newUser = models.User.build({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        stk: req.body.stk,
        phone: req.body.phone,
        email: req.body.email,
        password: generateHash(req.body.password)
    });
    return newUser.save().then(result => {
        passport.authenticate('local', {
            successRedirect: '/',
            failuredRedirect: "/signup",
            failureFlash: true
        })(req, res, next);
    })
}

exports.login = function (req, res, next) {
    passport.authenticate('local', {
        successRedirect: '/',
        failuredRedirect: "/login",
        failureFlash: true,
    })(req, res, next);
}

exports.logout = function (req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
}

