App.Views.Search = Backbone.View.extend ({

  el: '#search-view',

  events: {
    'click #save-button': 'save',
    'click #close-button': 'close',
    'click #search-button': 'search'
  },

  initialize: function(model) {
    console.log('new Search View created');
  },

  search: function() {
    var searchtemplate = Handlebars.compile($('#search-template').html());
    this.$el.append(searchtemplate(this.model.toJSON()));
    console.log('Search View created');
  },


  save: function() {
    console.log('Save');
  },

  close: function() {
    console.log('Closing');
    this.$el.fadeOut(750);
    this.model = null;
  }

});