App.Views.All = Backbone.View.extend ({

  el: '#all-user-view',

  events: {
    'click #allusersbutton': 'renderAllUsers',
    //click profilePic to view another Profile
    'click #close-button': 'close'
  },

  initialize: function(model) {
    console.log('new All User View created');
  },

  renderAllUsers: function() {
    var allUsers = Handlebars.compile($('#all-user-modal-template').html());
    this.$el.append(allUsers(this.model.toJSON()));
  },

  close: function() {
    console.log('Closing');
    this.$el.fadeOut(750);
    this.model = null;
  }

});