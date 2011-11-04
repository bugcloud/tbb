var Common;
Common = (function() {
  function Common() {}
  Common.prototype.randomColor = function() {
    var c;
    return c = "rgba(" + (this.atRandom()) + ", " + (this.atRandom()) + ", " + (this.atRandom()) + ", 0.65)";
  };
  Common.prototype.atRandom = function() {
    return Math.floor(Math.random() * 256);
  };
  Common.prototype.showLoading = function() {
    return $("#loading").show();
  };
  Common.prototype.hideLoading = function() {
    return $("#loading").hide('slow');
  };
  return Common;
})();