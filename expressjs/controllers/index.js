const models = require('../models');

exports.auth = function (req, res, next) {
    var user = req.user
    if (user) {
        var username = user.firstname + " " + user.lastname;
        return res.json({ message: "LOGGED_IN", username: username });
    } else {
        return res.json({ message: "NOT_LOGGED_IN" });
    }
}

exports.getUser = function (req, res, next) {
    var user = req.user
    if (user) {
        return res.json({ user: user });
    }
}

exports.createDataHash = function (req, res, next) {
    return models.DataHash.create({
        hashValue: req.body.params.hashValue,
        operationId: req.body.params.operationId,
    }).then(() => {
        res.redirect('/');
    })
}

exports.getDataHash = function (req, res, next) {
    return models.DataHash.findOne({
        where: {
            operationId: req.params.id
        }
    }).then(datahash => {
        console.log(datahash);
        res.json({ datahash: datahash });
    })
}
