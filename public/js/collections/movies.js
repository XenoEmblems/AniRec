App.Collections.Movies = Backbone.Collection.extend ({
  initialize: function(){
    console.log('Movies collection created');
  },
  url: '/movies',
  model: App.Models.Movie
});