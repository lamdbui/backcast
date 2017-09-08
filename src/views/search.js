var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'handleClick'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleClick: function() {
    this.collection.fetch();
  },

  template: templateURL('src/templates/search.html')

});
