const rp = require('request-promise');
const config = require('config');
const logger = require('core/logger');
const _ = require('lodash');

const getOptions = resource => {
  const uri = config.api.concat(resource);
  return Object.assign({uri}, config.app.rp);
}

const get = async (ctx, resource) => {
  const options = getOptions(resource);
  let result;
  try {
    result = await rp.get(options);
  } catch(e) {
    ctx.throw(500, `Cannot get resource: ${resource}`)
  }

  if(_.isEmpty(result)) {
    ctx.throw(404, 'Api returned empty result');
  }
  return result;
}

module.exports = { get }