class Common
  constructor: () ->
  
  randomColor: ->
    c = "rgba(#{@atRandom()}, #{@atRandom()}, #{@atRandom()}, 0.65)"

  atRandom: ->
    Math.floor(Math.random()*256)

  showLoading: ->
    $("#loading").show()

  hideLoading: ->
    $("#loading").hide('slow')
