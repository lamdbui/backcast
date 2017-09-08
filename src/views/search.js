var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'handleClick'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleClick: function() {
    var searchQuery = this.$('.form-control').val();
    if (searchQuery) {
      this.collection.fetch(searchQuery);
    }
  },

  template: templateURL('src/templates/search.html')

});
