const bcrypt = require('bcrypt');
const config = require('../../config');

module.exports = {
  hashPassword: user => bcrypt.hash(user.password, config.bcrypt.rounds)
};
