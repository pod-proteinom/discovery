const fetch = require('core/fetch');
const logger = require('core/logger');

module.exports = async (ctx, next) => {
  const categories = await fetch.get(`/categories?name=tutorials&expand=posts`);
  await ctx.render('home', {categories});
}