var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    this.$el.append((new SearchView({el: this.$el.find('.search')})).render());
    this.$el.append((new VideoPlayerView({el: this.$el.find('.player')})).render());
    this.$el.append((new VideoListView({el: this.$el.find('.list')})).render());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
