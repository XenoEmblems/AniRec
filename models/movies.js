"use strict";
module.exports = function(sequelize, DataTypes) {
  var movies = sequelize.define("movies", {
    title: DataTypes.STRING,
    poster: DataTypes.STRING,
    rated: DataTypes.STRING,
    genre: DataTypes.STRING,
    plot: DataTypes.STRING,
    imdbrating: DataTypes.STRING,
    type: DataTypes.STRING,
    pitch: DataTypes.TEXT,
    movietvid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        movies.belongsTo(models.users, { foreignKey: 'movietvid' 
        })
      }
    }
  });
  return movies;
};