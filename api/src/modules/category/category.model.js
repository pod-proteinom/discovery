module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    excerpt: {
      type: DataTypes.TEXT
    },
    meta_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    meta_description: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'categories'
  });

  Category.associate = function(models) {
    models.Category.hasMany(models.Post, {foreignKey: 'category', as: 'posts'});
  }

  return Category;
};