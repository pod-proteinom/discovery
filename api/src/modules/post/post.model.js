module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
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
    tableName: 'posts'
  });

  Post.associate = function(models) {
    models.Post.belongsTo(models.User, {foreignKey: 'author'});
    models.Post.belongsTo(models.Category, {foreignKey: 'category'});
  }

  return Post;
};