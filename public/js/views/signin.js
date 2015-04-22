App.Views.Signin = Backbone.View.extend ({

  el: '#signin-view',

  events: {
    'click #signupbutton': 'renderUser',
    'click #create-button': 'signin',
    'click #login-button': 'login',
    'click #logout-button': 'logout'
  },

  initialize: function(model) {
    console.log('new Signin View created');
  },
  
  
  renderUser: function() {

    var sigintemplate = Handlebars.compile($('#signin-user-template').html());
    var logtemplate   = Handlebars.compile($('#login-user-template').html());
    this.$el.append(signintemplate(this.model.toJSON()));
    this.$el.append(logintemplate(this.model.toJSON()));
    console.log('Sign in rendered');
  },

  signin: function() {
    console.log('Sign in');
  },
  login: function() {
    console.log('Log in');
  },
  logout: function() {
    console.log('Log out');
  }

});