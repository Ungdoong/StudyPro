/* jshint indent: 2 */
import {Op} from "sequelize";

module.exports = function(sequelize, DataTypes) {
  const common_post_likes = sequelize.define('common_post_likes', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    common_post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'common_posts',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'common_post_likes'
  });


  common_post_likes.toggle_post_like = function(status) {
    if (islike === 1) {
      common_post_likes.destroy({where: {user_id, post_id}})
    }
    else {
      common_post_likes.create({
        common_post_id:post_id,
        user_id:user_id
      })
    }
  }




  return common_post_likes;
};
