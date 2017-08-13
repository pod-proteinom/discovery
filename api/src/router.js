const config = require('config');
const category = require('modules/category');
const user = require('modules/user');

let Router = require('koa-better-router')
let api = Router(config.router).loadMethods();

api.get('/categories/:id?', category.read)
  .get('/categories/:id?/posts', category.readIncludingPosts)
  .post('/categories', category.create)
  .del('/categories/:id', category.del);

api.get('/users/:id?', user.read)
  .post('/users', user.create)
  .del('/users/:id', user.del);

module.exports = api;