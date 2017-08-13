module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Post", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    excerpt: {
      type: DataTypes.TEXT
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    meta_title: {
      type: DataTypes.STRING
    },
    meta_description: {
      type: DataTypes.TEXT
    },
    markdown: {
      type: DataTypes.TEXT
    },
    html: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'posts',
    classMethods: {
      associate: models => {
        models.Post.belongsTo(models.User, {foreignKey: 'author_id'});
        models.Post.belongsTo(models.Category, {foreignKey: 'category'});
      }
    }
  });
};