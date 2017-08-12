const config = require('config');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database.uri, config.database.options);

let db = {};

fs.readdirSync(config.dirs.modules)
  .filter(file => file.indexOf(".") !== 0 && (file !== "index.js"))
  .forEach(file => {
    const modelPath = path.join(config.dirs.modules, file, `${file}.model.js`);
    const model = sequelize.import(modelPath);
    db[model.name] = model;
  });

Object.keys(db)
  .filter(modelName => 'associate' in db[modelName])
  .forEach(modelName => db[modelName].associate(db));

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;