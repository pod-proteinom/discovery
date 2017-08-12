const _ = require('lodash');
const defaultConfig = require('./default');

module.exports = _.merge({
  database: {
    options: {
      force: true
    }
  }
}, defaultConfig);