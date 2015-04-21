"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    username: DataTypes.STRING,
    password_digest: DataTypes.STRING,
    interests: DataTypes.STRING,
    favoriteGenre: DataTypes.STRING,
    profilePic: DataTypes.STRING,
    preferance: DataTypes.TEXT,
    movietvid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        users.hasMany(models.movies, {
          foreignKey: 'movietv_id',
          onDelete: 'cascade',
          hooks: true
        })
      }
    }
  });
  return users;
};
