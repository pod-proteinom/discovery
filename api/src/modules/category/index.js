const {Category, Post} = require('core/database');
const logger = require('core/logger');
const QueryBuilder = require('core/query');

const create = async (ctx, next) => {
  try {
    ctx.body = await Category.create(ctx.request.fields);
  } catch(e) {
    ctx.throw(e.status || 500, e.message);
  }
}

const readById = async (ctx, next) => {
  try {
    ctx.body = await Category.findById(ctx.params.id);
  } catch(e) {
    ctx.throw(e.status || 500, e.message);
  }
}

const read = async (ctx, next) => {
  const query = new QueryBuilder(ctx.query)
    .whereIn('name')
    .includes('expand')
    .build();
  try {
    ctx.body = await Category.findAll(query);
  } catch(e) {
    ctx.throw(e.status || 500, e.message);
  }
}

const del = async (ctx, next) => {
  try {
    ctx.body = await Category.destroy({where: {id: ctx.params.id}});
  } catch(e) {
    ctx.throw(e.status || 500, e.message);
  }
}

module.exports = {create, readById, read, del};