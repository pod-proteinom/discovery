const {User} = require('core/database');

const create = async (ctx, next) => {
  try {
    ctx.body = await User.create(ctx.request.fields);
  } catch(e) {
    ctx.throw(e.status || 500, e.message);
  }
}

const read = async (ctx, next) => {
  try {
    ctx.body = await User.findById(ctx.params.id);
  } catch(e) {
    ctx.throw(e.status || 500, e.message);
  }
}

const del = async (ctx, next) => {
  try {
    ctx.body = await User.destroy({where: {id: ctx.params.id}});
  } catch(e) {
    ctx.throw(e.status || 500, e.message);
  }
}

module.exports = {create, read, del};