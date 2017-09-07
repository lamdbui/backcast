var VideoListEntryView = Backbone.View.extend({

  events: {
    'click': 'select'
  },

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    // this.$el.html(this.template(this.model.attributes));
    return this;
  },

  select: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
