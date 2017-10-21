const router = require('koa-router')();
const { UserController } = require('../controllers');
const { constants } = require('../../config');
// const isAuthenticated = require('../middleware/isAuthenticated');

router.prefix(constants.ROUTE_PREFIX);

/* signup route */
router.post('/signup', UserController.signup);
/* signin route */
router.post('/signin', UserController.signin);
/* password reset route */
// router.put('/reset', isAuthenticated, userController.updatePassword);
/* user data */
// router.get('/user/:username', isAuthenticated, userController.fetchUser);
/* logged in user data */
// router.get('/me', isAuthenticated, userController.fetchMe);

module.exports = router;
