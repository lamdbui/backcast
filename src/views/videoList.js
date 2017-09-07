var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', function(e) {
      this.render();
    }, this);
  }, 

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
   
    //$('.list').replaceWith(this.template());

    // this.$el.find('.video-list').empty();
    this.$('.video-list').empty();
    
    this.collection.forEach(this.renderVideoEntry);
    
    return this;
  },

  // renderVideoEntry: function(video) {
  //   var listChildren = $('.video-list').children();
  //   listChildren.forEach(function(child) {
  //     var videoListEntryView = new VideoListEntryView({el: child, model: video});
  //     $('.video-list').append(videoListEntryView.render());
  //   });
  // },

  renderVideoEntry: function(video) {
    var videoListEntry = new VideoListEntryView({model: video});
    // this.$el.find('.video-list').append(videoListEntry.render());
    $('.video-list').append(videoListEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});
