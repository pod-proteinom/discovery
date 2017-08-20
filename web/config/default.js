const path = require('path');
const dirname = path.dirname;
const rootDir = dirname(__dirname);
const srcDir = path.join(rootDir, 'src');
const viewsDir = path.join(srcDir, 'views');
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
    },
    views: {
      extension: 'pug',
      options: {
        basedir: viewsDir,
        helpers: {}
      }
    }
  },
  dirs : {
    src: srcDir,
    views: viewsDir
  }
}