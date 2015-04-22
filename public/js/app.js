var App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {}
};

$(function() {
  console.log('app.js is loaded');
  App.users      = new App.Collections.Users({ collection: App.users });
  App.movies     = new App.Collections.Movies({ collection: App.movies });
  // App.usersView  = new App.Views.Users({ collection: App.users });
  // App.moviesView = new App.Views.Movies({ collection: App.movies });
});