var express = require('express');
var router = express.Router();

let index = require('../controllers/index');
let user = require('../controllers/user');

let { isLoggedIn } = require('../middleware/hasAuth.js');

router.post('/api/login', user.login);
router.post('/api/signup', user.signup);
router.post('/api/logout', user.logout);
router.get('/api/auth', index.auth);

router.post('/submitNeed', index.submit_need);
router.get('/api/needs', isLoggedIn, index.show_needs);
router.get('/api/confirmed_needs', isLoggedIn, index.show_cneeds);
router.get('/api/need/delete/:need_id', isLoggedIn, index.delete_need);
router.get('/api/need/edit/:need_id', isLoggedIn, index.show_edit_need);
router.post('/confirmNeed', isLoggedIn, index.confirm_need);
router.get('/api/confirmed_need/edit/:need_id', isLoggedIn, index.show_edit_cneed);
router.get('/api/confirmed_need/delete/:need_id', isLoggedIn, index.delete_cneed);
router.post('/editConfirmNeed', isLoggedIn, index.edit_confirm_need);


router.get('/api/supports', isLoggedIn, index.show_supports);
router.post('/submitSupport', index.submit_support);
router.get('/api/confirmed_supports', isLoggedIn, index.show_csupports);
router.get('/api/support/delete/:support_id', isLoggedIn, index.delete_support);
router.get('/api/support/edit/:support_id', isLoggedIn, index.show_edit_support);
router.post('/confirmSupport', isLoggedIn, index.confirm_support);
router.get('/api/confirmed_support/edit/:support_id', isLoggedIn, index.show_edit_csupport);
router.post('/editConfirmSupport', isLoggedIn, index.edit_confirm_support);
router.get('/api/confirmed_support/delete/:support_id', isLoggedIn, index.delete_csupport);


module.exports = router;


