var Videos = Backbone.Collection.extend({

  model: Video,

  fetch: function() {
    var that = this;
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet,id&q=cats&maxResults=5`,
      type: 'GET',
      //data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('YOUTUBE FETCH SUCCESS', data);
        that.reset(data.items);
        that.trigger('sync');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('YOUTUBE FETCH FAIL', data);
      }
    });
  },
});
