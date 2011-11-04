var _mysiteCommon, _mysitePage, _mysiteTumblr;
_mysiteTumblr = new Tumblr;
_mysiteCommon = new Common;
_mysitePage = new Page;
$(function() {
  _mysiteTumblr.photoPostsBefore = function() {
    _mysiteCommon.showLoading();
    return $("#loading").ticker({
      cursorList: '<span style="background-color:#fff;">&nbsp;</span>',
      rate: 10,
      delay: 1000
    }).trigger("play");
  };
  _mysiteTumblr.photoPostsCallback = function(data, type) {
    _mysiteTumblr.offset = _mysiteTumblr.offset + data.response.posts.length;
    $.each(data.response.posts, function() {
      return $.each(this.photos, function() {
        var p, v;
        _mysitePage.increment();
        p = new Post(this.original_size.url, this.alt_sizes[0].url);
        return v = new PostView({
          model: p
        });
      });
    });
    return setTimeout(_mysiteCommon.hideLoading, 1500);
  };
  _mysiteTumblr.photoPosts();
  return $("#buttonLoad a").bind('click', function() {
    return _mysiteTumblr.photoPosts();
  });
});