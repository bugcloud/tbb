class Tumblr
  constructor: () ->

  apiConsumerKey: "SyMOX3RGVS4OnK2bGWBcXNUfX34lnzQJY5FRB6uxpFqjEHz2SY"
  hostName: "dvdp.tumblr.com"
  offset: 0

  photoPostsCallback: (data, type) ->
    console.log data

  photoPostsBefore: () ->

  photoPosts: ->
    me = this
    me.photoPostsBefore()
    url = "http://api.tumblr.com/v2/blog/#{@hostName}/posts/photo"
    data =
      api_key: @apiConsumerKey
      offset: @offset
    $.ajax url,
      data: data
      dataType: 'jsonp'
      jsonp: 'jsonp'
      success: (data, type) ->
        me.photoPostsCallback(data, type)
      error: (XMLHttpRequest, textStatus, errorThrown) ->
        console.log errorThrown
