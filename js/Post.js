var Post;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
Post = (function() {
  __extends(Post, Backbone.Model);
  function Post(url, src) {
    this.url = url;
    this.src = src;
  }
  Post.prototype.url = '';
  Post.prototype.src = '';
  return Post;
})();