const conf = require('config');
const Koa = require('koa');
const bodyParser = require('koa-better-body');

const app = new Koa();
const database = require('core/database');
const router = require('./router');

app.use(bodyParser());
app.use(router.middleware());

database.sequelize.sync().then(() => {
  app.listen(conf.server.port, () => {
    // log.info(`Server listening on ${conf.server.port}`);
  });
})