const { constants } = require('../../config');
/**
 * Since this service provides public API,
 * we allow user who is also not authenticated.
 * For the admin routes, we add this policy/middleware
 */

module.exports = async (ctx, next) => {
  if (ctx.user.type !== constants.USER_ADMIN) {
    return ctx.throw(401, { message: 'action is not allowed' });
  }
  return next();
};
