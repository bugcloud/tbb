class PostView extends Backbone.View
  constructor: ->
    super

    @el = $("#wrapper")
    @template = _.template($("#postTemplate").html())
    @render()

  render: =>
    @el.append(@template({post: @model}))

