var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', function(e) {
      this.render();
    }, this);
  },  

  render: function() {
    this.$el.html(this.template(this.collection.at(0).attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
