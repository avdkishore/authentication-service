const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Sequelize = require('sequelize');
const supertest = require('supertest');
const config = require('../../config');
const authRouter = require('../../app/routes/routes');

// mock loadUser policy/middleware
jest.mock('../../app/middleware/loadUser');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const app = new Koa();

app.use(bodyParser());
app.use(authRouter.routes());

const server = app.listen();
const request = supertest(server);

module.exports = { request, sequelize };
