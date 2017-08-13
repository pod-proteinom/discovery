const config = require('config');
const category = require('modules/category');
const user = require('modules/user');
const post = require('modules/post');

let Router = require('koa-better-router')
let api = Router(config.router).loadMethods();

api.get('/categories/:id', category.readById)
  .get('/categories/:id/posts', category.readIncludingPosts)
  .post('/categories', category.create)
  .del('/categories/:id', category.del);

api.get('/users/:id', user.readById)
  .post('/users', user.create)
  .del('/users/:id', user.del);

api.get('/posts/:id', post.readById)
  .post('/posts', post.create)
  .del('/posts/:id', post.del);

module.exports = api;