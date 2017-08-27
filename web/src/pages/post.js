const fetch = require('core/fetch');
const logger = require('core/logger');

module.exports = async (ctx, next) => {
  const posts = await fetch.get(`/posts?slug=${ctx.params.post}&expand=category,author`);
  await ctx.render('post', {post: posts[0]});
}