_mysiteTumblr = new Tumblr
_mysiteCommon = new Common
_mysitePage = new Page

$ ->
  _mysiteTumblr.photoPostsBefore = () ->
    _mysiteCommon.showLoading()
    $("#loading").ticker(
      cursorList: '<span style="background-color:#fff;">&nbsp;</span>',
      rate: 10,
      delay: 1000
    ).trigger("play")

  _mysiteTumblr.photoPostsCallback = (data, type) ->
    _mysiteTumblr.offset = _mysiteTumblr.offset + data.response.posts.length
    $.each(data.response.posts, () ->
      $.each(this.photos, () ->
        _mysitePage.increment()
        p = new Post(this.original_size.url, this.alt_sizes[0].url)
        v = new PostView(
          model: p
        )
      )
    )
    setTimeout _mysiteCommon.hideLoading, 1500

  _mysiteTumblr.photoPosts()

  $("#buttonLoad a").bind('click', () ->
    _mysiteTumblr.photoPosts()
  )
