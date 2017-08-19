const config = require('config');
const Koa = require('koa');

const app = new Koa();
const router = require('./router');

app.listen(config.server.port, () => {
  log.info(`Server listening on ${config.server.port}`);
});
