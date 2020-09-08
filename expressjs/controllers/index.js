const models = require('../models');

exports.auth = function (req, res, next) {
    var user = req.user
    var username = user.firstname + " " + user.lastname;
    if (user) {
        return res.json({ message: "user available", username: username });
    } else {
        return res.json({ message: "user not available" });
    }
}


exports.submit_need = function (req, res, next) {
    return models.Need.create({
        name: req.body.name,
        surname: req.body.surname,
        needType: req.body.needType,
        amount: req.body.amount,
        phone: req.body.phone,
        address: req.body.address,
    }).then(lead => {
        res.redirect('/?success=' + encodeURIComponent('n'));
    })
}

exports.submit_support = function (req, res, next) {
    return models.Support.create({
        name: req.body.name,
        surname: req.body.surname,
        supportType: req.body.supportType,
        amount: req.body.amount,
        phone: req.body.phone,
        address: req.body.address,
        sendType: req.body.sendType,
    }).then(lead => {
        res.redirect('/?success=' + encodeURIComponent('n'));
    })
}

exports.show_needs = function (req, res, next) {
    return models.Need.findAll().then(needs => {
        res.json(needs);
    });
}

exports.show_cneeds = function (req, res, next) {
    return models.ConfirmedNeed.findAll().then(needs => {
        res.json(needs);
    });
}

exports.delete_need = function (req, res, next) {
    return models.Need.destroy({
        where: {
            id: req.params.need_id
        }
    }).then(result => {
        res.redirect('/');
    })
}

exports.show_edit_need = function (req, res, next) {
    var user = req.user
    return models.Need.findOne({
        where: {
            id: req.params.need_id
        }
    }).then(need => {
        res.json({ need: need, user: user });
    })
}

exports.show_edit_cneed = function (req, res, next) {
    return models.ConfirmedNeed.findOne({
        where: {
            id: req.params.need_id
        }
    }).then(need => {
        res.json({ need: need, user: req.user });;
    });
}

exports.show_edit_csupport = function (req, res, next) {
    return models.ConfirmedSupport.findOne({
        where: {
            id: req.params.support_id
        }
    }).then(support => {
        res.json({ support: support, user: req.user });;
    });
}

exports.edit_confirm_need = function (req, res, next) {
    return models.ConfirmedNeed.update({
        urgency: req.body.urgency,
        status: req.body.status,
    }, {
        where: {
            id: req.body.id
        }
    }).then(result => {
        res.redirect('/');
    })
}

exports.edit_confirm_support = function (req, res, next) {
    return models.ConfirmedSupport.update({
        status: req.body.status,
    }, {
        where: {
            id: req.body.id
        }
    }).then(result => {
        res.redirect('/');
    })
}

exports.confirm_need = function (req, res, next) {
    return models.ConfirmedNeed.create({
        name: req.body.name,
        surname: req.body.surname,
        needType: req.body.needType,
        amount: req.body.amount,
        phone: req.body.phone,
        address: req.body.address,
        confirmName: req.body.confirmName,
        confirmSurname: req.body.confirmSurname,
        confirmSTK: req.body.confirmSTK,
        urgency: req.body.urgency,
        status: req.body.status,
    }).then(result => {
        return models.Need.destroy({
            where: {
                id: req.body.id
            }
        }).then(need => {
            res.redirect('/');
        });

    })
}

exports.show_supports = function (req, res, next) {
    return models.Support.findAll().then(supports => {
        res.json(supports);
    });
}

exports.show_csupports = function (req, res, next) {
    return models.ConfirmedSupport.findAll().then(supports => {
        res.json(supports);
    });
}

exports.delete_support = function (req, res, next) {
    return models.Support.destroy({
        where: {
            id: req.params.support_id
        }
    }).then(result => {
        res.redirect('/');
    })
}

exports.delete_cneed = function (req, res, next) {
    return models.ConfirmedNeed.destroy({
        where: {
            id: req.params.need_id
        }
    }).then(result => {
        res.redirect('/');
    })
}

exports.delete_csupport = function (req, res, next) {
    return models.ConfirmedSupport.destroy({
        where: {
            id: req.params.support_id
        }
    }).then(result => {
        res.redirect('/');
    })
}

exports.show_edit_support = function (req, res, next) {
    var user = req.user
    return models.Support.findOne({
        where: {
            id: req.params.support_id
        }
    }).then(support => {
        res.json({ support: support, user: user });
    })
}

exports.confirm_support = function (req, res, next) {
    return models.ConfirmedSupport.create({
        name: req.body.name,
        surname: req.body.surname,
        supportType: req.body.supportType,
        amount: req.body.amount,
        phone: req.body.phone,
        address: req.body.address,
        sendType: req.body.sendType,
        confirmName: req.body.confirmName,
        confirmSurname: req.body.confirmSurname,
        confirmSTK: req.body.confirmSTK,
        status: req.body.status,
    }).then(result => {
        return models.Support.destroy({
            where: {
                id: req.body.id
            }
        }).then(need => {
            res.redirect('/');
        });

    })
}