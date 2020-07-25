var express = require('express');
var router = express.Router();

let index = require('../controllers/index');
let user = require('../controllers/user');

let { isLoggedIn } = require('../middleware/hasAuth.js');

router.get('/login', user.show_login);
router.get('/signup', user.show_signup);
router.post('/login', user.login);
router.post('/signup', user.signup);
router.post('/logout',user.logout);
router.get('/logout', user.logout);
/* GET home page. */
router.get('/', index.index);

router.post('/submitNeed', index.submit_need);
router.get('/needs', isLoggedIn, index.show_needs);
router.get('/confirmed_needs', isLoggedIn, index.show_cneeds);
router.post('/need/:need_id/delete-json', isLoggedIn, index.delete_need_json);
router.get('/need/:need_id/delete', isLoggedIn, index.delete_need);
router.get('/need/:need_id/edit', isLoggedIn, index.show_edit_need);
router.post('/confirmNeed', isLoggedIn, index.confirm_need);
router.get('/confirmed_need/:need_id/edit', isLoggedIn, index.show_edit_cneed);
router.get('/confirmed_need/:need_id/delete', isLoggedIn, index.delete_cneed);
router.post('/editConfirmNeed', isLoggedIn, index.edit_confirm_need);


router.get('/supports', isLoggedIn, index.show_supports);
router.post('/submitSupport', index.submit_support);
router.get('/confirmed_supports', isLoggedIn, index.show_csupports);
router.post('/support/:support_id/delete-json', isLoggedIn, index.delete_support_json);
router.get('/support/:support_id/delete', isLoggedIn, index.delete_support);
router.get('/support/:support_id/edit', isLoggedIn, index.show_edit_support);
router.post('/confirmSupport', isLoggedIn, index.confirm_support);
router.get('/confirmed_support/:support_id/edit', isLoggedIn, index.show_edit_csupport);
router.post('/editConfirmSupport', isLoggedIn, index.edit_confirm_support);
router.get('/confirmed_support/:support_id/delete', isLoggedIn, index.delete_cneed);


module.exports = router;


