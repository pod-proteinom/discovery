const fetch = require('core/fetch');
const logger = require('core/logger');

module.exports = async (ctx, next) => {
  const categories = await fetch.get(ctx, `/categories?name=${ctx.params.category}&expand=posts`);
  await ctx.render('category', {categories});
}