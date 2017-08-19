const path = require('path');
const dirname = path.dirname;
const rootDir = dirname(__dirname);
const srcDir = path.join(rootDir, 'src');
const modulesDir = path.join(srcDir, 'modules');
const env = process.env;

module.exports = {
  server: {
    port: 4040
  },
  app: {
    logger: {
      level: 'debug',
      colorize: true,
      timestamp: true
    }
  },
  dirs : {
    src: srcDir
  }
}