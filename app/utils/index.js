const bcrypt = require('bcrypt');
const config = require('../../config');

module.exports = {
  hashPassword: user => bcrypt.hash(user.password, config.bcrypt.rounds),

  comparePassword: (plaintextPassword, hash) =>
    new Promise((resolve, reject) =>
      bcrypt.compare(
        plaintextPassword,
        hash,
        (err, isValid) => (err ? reject(err) : resolve(isValid))
      )
    )
};
