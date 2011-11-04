var Tumblr;
Tumblr = (function() {
  function Tumblr() {}
  Tumblr.prototype.apiConsumerKey = "SyMOX3RGVS4OnK2bGWBcXNUfX34lnzQJY5FRB6uxpFqjEHz2SY";
  Tumblr.prototype.hostName = "dvdp.tumblr.com";
  Tumblr.prototype.offset = 0;
  Tumblr.prototype.photoPostsCallback = function(data, type) {
    return console.log(data);
  };
  Tumblr.prototype.photoPostsBefore = function() {};
  Tumblr.prototype.photoPosts = function() {
    var data, me, url;
    me = this;
    me.photoPostsBefore();
    url = "http://api.tumblr.com/v2/blog/" + this.hostName + "/posts/photo";
    data = {
      api_key: this.apiConsumerKey,
      offset: this.offset
    };
    return $.ajax(url, {
      data: data,
      dataType: 'jsonp',
      jsonp: 'jsonp',
      success: function(data, type) {
        return me.photoPostsCallback(data, type);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        return console.log(errorThrown);
      }
    });
  };
  return Tumblr;
})();