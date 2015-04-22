App.Models.User = Backbone.Model.extend({

  urlRoot: '/users',
  
  initialize: function(){
    console.log("New Users Models activated");
  }

});