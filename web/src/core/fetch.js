const rp = require('request-promise');
const config = require('config');
const logger = require('core/logger');

const getOptions = resource => {
  const uri = config.api.concat(resource);
  return Object.assign({uri}, config.app.rp);
}

const get = async (resource) => {
  const options = getOptions(resource);
  try {
    return rp.get(options);
  } catch(e) {
    throw new Error(e);
  }
}

module.exports = { get }