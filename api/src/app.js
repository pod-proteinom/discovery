const config = require('config');
const log = require('core/logger');
const Koa = require('koa');
const bodyParser = require('koa-better-body');

const app = new Koa();
const database = require('core/database');
const router = require('./router');

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    log.error(err.message)
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});

app.use(bodyParser());
app.use(router.middleware());

const startServer = () => {
  app.listen(config.server.port, () => {
    log.info(`Server listening on ${config.server.port}`);
  });
}

const loadFixtures = () => {
  const fixtures = config.dirs.fixtures;
  if(fixtures) {
    return require(fixtures)(database);
  }
};

database.sequelize.sync()
  .then(loadFixtures)
  .then(startServer);