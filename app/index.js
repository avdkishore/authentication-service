const Koa = require('koa');
const routes = require('./routes');
const middleware = require('./middleware');

const app = new Koa();

middleware(app);
routes(app);

module.exports = app;
