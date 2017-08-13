const config = require('config');
const category = require('modules/category');

let Router = require('koa-better-router')
let api = Router(config.router).loadMethods();

api.get('/categories/:id?', category.read)
  .get('/categories/:id?/posts', category.readIncludingPosts)
  .post('/categories', category.create)
  .del('/categories/:id', category.del);

module.exports = api;