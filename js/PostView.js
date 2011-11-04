var PostView;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
PostView = (function() {
  __extends(PostView, Backbone.View);
  function PostView() {
    this.render = __bind(this.render, this);    PostView.__super__.constructor.apply(this, arguments);
    this.el = $("#wrapper");
    this.template = _.template($("#postTemplate").html());
    this.render();
  }
  PostView.prototype.render = function() {
    return this.el.append(this.template({
      post: this.model
    }));
  };
  return PostView;
})();