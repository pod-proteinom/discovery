const _ = require('lodash');
const path = require('path');
const defaultConfig = require('./default');
const fixturesDir = path.join(defaultConfig.dirs.root, 'fixtures');

module.exports = _.merge({
  database: {
    options: {
      force: true
    }
  },
  dirs: {
    fixtures: fixturesDir
  }
}, defaultConfig);