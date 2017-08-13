const {Category, Post} = require('core/database');

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

const readIncludingPosts = async (ctx, next) => {
  try {
    ctx.body = await Category.findAll({
      include: [
        {model: Post, as: 'posts'}
      ]
    });
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

module.exports = {create, readById, readIncludingPosts, del};