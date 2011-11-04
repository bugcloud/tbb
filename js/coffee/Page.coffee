class Page
  constructor: () ->
    @currentIndex = 1

  currentIndex: 0
  currentLeft: 0

  increment: ->
    @currentIndex = @currentIndex + 1
