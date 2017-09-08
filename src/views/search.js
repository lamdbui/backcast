var SearchView = Backbone.View.extend({

  ENTER_KEY: 13,

  events: {
    'click .btn': 'handleClick',
    'keyup': 'handleEnter'
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

  handleEnter: function(event) {
    var searchQuery = this.$('.form-control').val();
    if (searchQuery && event.which === this.ENTER_KEY) {
      this.collection.fetch(searchQuery);
    }
  },

  template: templateURL('src/templates/search.html')

});
