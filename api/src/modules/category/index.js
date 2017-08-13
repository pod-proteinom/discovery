const {Category} = require('core/database');

const create = async (ctx, next) => {
  try {
    ctx.body = await Category.create(ctx.request.fields);
  } catch(e) {
    ctx.throw(e.status || 500, e.message);
  }
}

const read = async (ctx, next) => {
  try {
    ctx.body = await Category.findById(ctx.params.id);
  } catch(e) {
    ctx.throw(e.status || 500, e.message);
  }
}

const readIncludingPosts = async (ctx, next) => {
  //TODO
  ctx.body = ctx.query;
}

const del = async (ctx, next) => {
  try {
    ctx.body = await Category.destroy({where: {id: ctx.params.id}});
  } catch(e) {
    ctx.throw(e.status || 500, e.message);
  }
}

module.exports = {create, read, readIncludingPosts, del};