const config = require('config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database.uri);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });