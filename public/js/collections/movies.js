App.Collections.Movies = Backbone.Collection.extend ({
  initialize: function(){
    console.log('movies collection created');
  }
  url: 'movies',
  model: App.Models.Movie
});