var Page;
Page = (function() {
  function Page() {
    this.currentIndex = 1;
  }
  Page.prototype.currentIndex = 0;
  Page.prototype.currentLeft = 0;
  Page.prototype.increment = function() {
    return this.currentIndex = this.currentIndex + 1;
  };
  return Page;
})();