"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("movies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      poster: {
        type: DataTypes.STRING
      },
      rated: {
        type: DataTypes.STRING
      },
      genre: {
        type: DataTypes.STRING
      },
      plot: {
        type: DataTypes.STRING
      },
      imdbrating: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.STRING
      },
      pitch: {
        type: DataTypes.TEXT
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("movies").done(done);
  }
};