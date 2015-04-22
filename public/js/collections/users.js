App.Collections.Users = Backbone.Collection.extend ({
  initialize: function(){
    console.log('Users collection created');
  },
  url: '/users',
  model: App.Models.User
});