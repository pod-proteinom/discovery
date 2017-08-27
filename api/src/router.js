const config = require('config');
const category = require('modules/category');
const user = require('modules/user');
const post = require('modules/post');

let Router = require('koa-better-router');
let api = Router(config.router).loadMethods();

api.get('/categories/:id', category.readById)
  .get('/categories', category.read)
  .post('/categories', category.create)
  .del('/categories/:id', category.del);

api.get('/users/:id', user.readById)
  .get('/users', user.read)
  .post('/users', user.create)
  .del('/users/:id', user.del);

api.get('/posts/:id', post.readById)
  .get('/posts', post.read)
  .post('/posts', post.create)
  .del('/posts/:id', post.del);

module.exports = api;