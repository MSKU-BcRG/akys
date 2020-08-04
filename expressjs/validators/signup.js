let validator = require('validator');
let models = require('../models');

const validateCreateUserFields = function (errors, req) {
    if (!validator.isEmail(req.body.email)) {
        errors["email"] = "Please use a valid email.";
    }
    if (!validator.isAscii(req.body.password)) {
        errors["password"] = "Invalid characters in password, please try another one.";
    }
    if (!validator.isLength(req.body.password, { min: 8, max: 25 })) {
        errors["password"] = "Please ensure that your password has a minimum of 8 characters";
    }
}

exports.validateUser = function (errors, req) {
    return new Promise(function (resolve, reject) {
        validateCreateUserFields(errors, req);
        return models.User.findOne({
            where: {
                username: req.body.username
            }
        }).then(u => {
            if (u !== null) {
                errors["username"] = "Kullanıcı adı mevcut.";
            }
            resolve(errors);
        })
    })
}