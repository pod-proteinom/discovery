const config = require('config');
const log = require('core/logger');
const Koa = require('koa');
const views = require('koa-views');

const app = new Koa();
const router = require('./router');

app.use(views(config.dirs.views, config.app.views));
app.use(router.middleware());

app.listen(config.server.port, () => {
  log.info(`Server listening on ${config.server.port}`);
});
