$("document").ready(function () {
  $("body").niceScroll()

  $(window).on("load", function () {
    $(".loading-screen .spinner").fadeOut(1000, function () {
      $(this)
        .parent()
        .fadeOut(1000, function () {
          $("body").css("overflow", "auto")
          $(this).remove()
        })
    })
  })

  /* scroll top */
  scrollButton = $("#scroll-top")
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 700) {
      scrollButton.show() // show the button
    } else {
      scrollButton.hide() // hide the button
    }

    document.getElementById("scroll-top").onclick = function () {
      $("html,body").animate({ scrollTop: 0 }, 200)
    }
  })
})
