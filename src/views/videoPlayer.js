var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.model = this.collection.at(0);
    this.model.on('select', function(e) {
      this.model = e;
      this.render(e);
    }, this);
  },  

  render: function(e) {
    var currentModel = e || this.model;
    this.$el.html(this.template(currentModel.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
