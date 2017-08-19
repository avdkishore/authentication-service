const app = require('./app');

const port = process.env.PORT || 4500;

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(port);

// eslint-disable-next-line
console.log(`Starting app on port ${port} in ${process.env.NODE_ENV} mode`);
