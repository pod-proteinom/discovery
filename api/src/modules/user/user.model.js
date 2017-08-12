module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
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
    tableName: 'users',
    classMethods: {
      associate: models => {
        models.User.hasMany(models.Post, {foreignKey: 'author_id'})
      }
    }
  });
};