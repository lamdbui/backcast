var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', function(e) {
      this.render();
    }, this);
  }, 

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
   
    this.$('.video-list').empty();
    
    this.collection.forEach(this.renderVideoEntry);
    
    return this;
  },

  renderVideoEntry: function(video) {
    var videoListEntry = new VideoListEntryView({model: video});
    $('.video-list').append(videoListEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});
