"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      username: {
        type: DataTypes.STRING
      },
      password_digest: {
        type: DataTypes.STRING
      },
      interests: {
        type: DataTypes.STRING
      },
      favoriteGenre: {
        type: DataTypes.STRING
      },
      profilePic: {
        type: DataTypes.STRING
      },
      preferance: {
        type: DataTypes.TEXT
      },
      movietvid: {
        type: DataTypes.INTEGER
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("users").done(done);
  }
};