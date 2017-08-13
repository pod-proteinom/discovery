const config = require('config');
const slugify = require('slug');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Category", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    excerpt: {
      type: DataTypes.TEXT
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
    tableName: 'categories',
    classMethods: {
      associate: models => {
        models.Category.hasMany(models.Post, {foreignKey: 'category_id'});
      }
    },
    hooks: {
      beforeValidate: (category, options) => {
        category.slug = slugify(category.name, config.app.slugify);
      }
    }
  });
};