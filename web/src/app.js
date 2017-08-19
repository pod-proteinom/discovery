const config = require('config');
const log = require('core/logger');
const Koa = require('koa');

const app = new Koa();
const router = require('./router');

app.use(router.middleware());

app.listen(config.server.port, () => {
  log.info(`Server listening on ${config.server.port}`);
});
