module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false 
      }   
  }, {
    tableName: 'users'
  });

  User.associate = function(models) {
    models.User.hasMany(models.Post, {foreignKey: 'author'})
  }

  return User;
};