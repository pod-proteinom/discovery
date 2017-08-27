const fetch = require('core/fetch');
const logger = require('core/logger');

module.exports = async (ctx, next) => {
  logger.debug(`/categories?name=${ctx.params.category}&expand=posts`)
  const categories = await fetch.get(`/categories?name=${ctx.params.category}&expand=posts`);
  await ctx.render('category', {categories});
}