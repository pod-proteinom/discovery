const sequelize_fixtures = require('sequelize-fixtures');
const postsTutorials = require('./posts-tutorials');

module.exports = (models) => {
  const fixtures = [].concat(postsTutorials);

  const options = {
    log: function() {}
  }

  return sequelize_fixtures.loadFixtures(fixtures, models, options)
    .then(() => console.log('Fixtures was loaded')).catch(err => console.log(err));
}