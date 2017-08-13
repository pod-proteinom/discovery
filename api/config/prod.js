const _ = require('lodash');
const defaultConfig = require('./default');

module.exports = _.merge({
  app: {
    logger: {
      level: 'info'
    }
  }
}, defaultConfig);