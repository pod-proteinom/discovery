module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false 
    }   
  }, {
    tableName: 'users'
  });

  User.associate = function(models) {
    models.User.hasMany(models.Post, {foreignKey: 'author_id'})
  }

  return User;
};