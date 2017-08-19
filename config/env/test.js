const database = {
  host: 'localhost',
  port: 30000,
  database: 'authenticationservice_test',
  username: 'postgres',
  password: 'postgres',
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  },
  logging: false
};

module.exports = database;
