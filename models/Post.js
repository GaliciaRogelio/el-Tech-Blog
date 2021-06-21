const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Post model
class Post extends Model {
  static(body) {
    Post.findOne({
      where: {
        id: body.post_id,
      },
      attributes: ["id", "post_text", "title", "created_at"],
    });
  }
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [500, 1],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
