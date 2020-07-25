const models = require('../models');

exports.index = function (req, res, next) {
    var success = req.query.success;
    if(success == "n"){
        success = "Talebiniz başarıyla oluşturuldu."
        res.render('index', { user: req.user ,success : success});
    }else{
        res.render('index', { user: req.user });
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
        res.redirect('/?success=' + encodeURIComponent('n') );
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
        res.render('needs', { needs: needs, user: req.user });
    });
}

exports.show_cneeds = function (req, res, next) {
    return models.ConfirmedNeed.findAll().then(needs => {
        res.render('cNeeds', { needs: needs, user: req.user });
    });
}

exports.delete_need_json = function (req, res, next) {
    return models.Need.destroy({
        where: {
            id: req.params.need_id
        }
    }).then(result => {
        res.send({ msg: "Success" });
    })
}

exports.delete_need = function (req, res, next) {
    return models.Need.destroy({
        where: {
            id: req.params.need_id
        }
    }).then(result => {
        res.redirect('/needs');
    })
}

exports.show_edit_need = function (req, res, next) {
    return models.Need.findOne({
        where: {
            id: req.params.need_id
        }
    }).then(need => {
        res.render('editNeed', { need: need , user: req.user });;
    });
}

exports.show_edit_cneed = function (req, res, next) {
    return models.ConfirmedNeed.findOne({
        where: {
            id: req.params.need_id
        }
    }).then(need => {
        res.render('editConfirmedNeed', { need: need, user: req.user });;
    });
}

exports.show_edit_csupport = function (req, res, next) {
    return models.ConfirmedSupport.findOne({
        where: {
            id: req.params.support_id
        }
    }).then(support => {
        res.render('editConfirmedSupport', { support: support, user: req.user });;
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
        res.redirect('/confirmed_needs');
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
        res.redirect('/confirmed_supports');
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
            res.redirect('/needs');
        });
        
    })
}

exports.show_supports = function (req, res, next) {
    return models.Support.findAll().then(supports => {
        res.render('supports', { supports: supports, user: req.user});
    });
}

exports.show_csupports = function (req, res, next) {
    return models.ConfirmedSupport.findAll().then(supports => {
        res.render('cSupports', { supports: supports, user: req.user });
    });
}

exports.delete_support_json = function (req, res, next) {
    return models.Support.destroy({
        where: {
            id: req.params.support_id
        }
    }).then(result => {
        res.send({ msg: "Success" });
    })
}

exports.delete_support = function (req, res, next) {
    return models.Support.destroy({
        where: {
            id: req.params.support_id
        }
    }).then(result => {
        res.redirect('/supports');
    })
}

exports.delete_cneed = function (req, res, next) {
    return models.ConfirmedNeed.destroy({
        where: {
            id: req.params.need_id
        }
    }).then(result => {
        res.redirect('/confirmed_needs');
    })
}

exports.delete_csupport = function (req, res, next) {
    return models.ConfirmedSupport.destroy({
        where: {
            id: req.params.support_id
        }
    }).then(result => {
        res.redirect('/confirmed_supports');
    })
}

exports.show_edit_support = function (req, res, next) {
    return models.Support.findOne({
        where: {
            id: req.params.support_id
        }
    }).then(support => {
        res.render('editSupport', { support: support, user: req.user });;
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
            res.redirect('/supports');
        });

    })
}