var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'select'
  },

  render: function() {
    // this.$el.append(this.template(this.model.attributes));
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  select: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
