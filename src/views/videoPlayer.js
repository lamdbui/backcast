var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.model = this.collection.at(0);
    this.collection.on('select', function(e) {
      console.log(e, 'target');
      this.model = e;
      this.render(this.model);
    }, this);
  },  

  render: function(e) {
    var currentModel = e || this.model;
    this.$el.html(this.template(currentModel.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
