App.Views.User = Backbone.View.extend ({

  el: '#user-view',

  events: {
    'click #update-button': 'update',
    'click #close-button': 'close'
  },

  initialize: function(model) {
    console.log('new User View created');
    this.renderUser();
  },

  renderUser: function() {

    var usermodal = Handlebars.compile($('#user-modal-template').html());
    this.$el.append(usermodal(this.model.toJSON()));
    console.log('User rendered')
  },

  update: function() {
    console.log('Update');
  },
  close: function() {
    console.log('Close');
    this.$el.fadeOut(750);
    this.model = null;
  }

});