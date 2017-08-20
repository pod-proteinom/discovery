const sequelize_fixtures = require('sequelize-fixtures');
const users = require('./users');
const categories = require('./categories');
const postsTutorials = require('./posts-tutorials');

module.exports = (models) => {
  const fixtures = []
    .concat(users)
    .concat(categories)
    .concat(postsTutorials);

  const options = {
    log: function() {}
  }

  return sequelize_fixtures.loadFixtures(fixtures, models, options)
    .then(() => console.log('Fixtures was loaded'));
}