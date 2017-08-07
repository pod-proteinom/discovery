const conf = require('conf');
const Koa = require('koa');

const app = new Koa();

app.listen(conf.server.port, () => {
  log.info(`Server listening on ${conf.server.port}`);
});