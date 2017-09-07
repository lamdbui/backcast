var VideoListView = Backbone.View.extend({


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.$el.find('.video-list').empty();
    this.collection.forEach(this.renderVideoEntry, this);
    
    return this;
  },

  renderVideoEntry: function(video) {
    var videoListEntry = new VideoListEntryView({el: $('.video-list'), model: video});
    this.$el.find('.video-list').append(videoListEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});
