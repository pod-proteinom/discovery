const config = require('config');
const logger = require('core/logger');
const Koa = require('koa');
const views = require('koa-views');

const app = new Koa();
const router = require('./router');


app.use(async (ctx, next) => {
  try {
    await next();
    const status = ctx.status || 404;
    if (status === 404) {
      ctx.throw(404);
    }
  } catch (err) {
    ctx.status = err.status || 500;
    if (ctx.status === 404) {
      logger.debug(err.message);
      await ctx.render('404');
    } else {
      logger.error(err.message);
      ctx.body = err.message;
    }
    ctx.app.emit('error', err, ctx);
  }
});
app.use(views(config.dirs.views, config.app.views));
app.use(router.middleware());

app.listen(config.server.port, () => {
  logger.info(`Server listening on ${config.server.port}`);
});
