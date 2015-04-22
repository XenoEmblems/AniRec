App.Models.Movie = Backbone.Model.extend({
  urlRoot: '/movies',
  
  initialize: function(){
    console.log("Movie Model has been activated");
  }

});