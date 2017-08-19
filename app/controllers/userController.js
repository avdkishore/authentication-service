const models = require('../models');

module.exports = {
  signup: async (ctx, next) => {
    const { username, password, email } = ctx.request.body;

    if (!(username && email && password)) {
      return ctx.throw(400, {
        message: 'all fields are mandatory'
      });
    }

    let userData;
    let tokenData;

    try {
      userData = await models.user.create({ username, email, password });
    } catch (e) {
      return ctx.throw(500, { message: 'creating user failed! :( ', e });
    }

    try {
      tokenData = await models.accessToken.create({ username });
    } catch (e) {
      return ctx.throw(500, { message: 'creating accessToken failed! :( ', e });
    }

    ctx.body = {
      accessToken: tokenData.token,
      username: userData.username,
      createdAt: userData.createdAt,
      updatedAt: userData.updatedAt
    };

    ctx.status = 201;
    return next();
  }
};
