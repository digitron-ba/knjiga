/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
  setTimeout(() => document.body.classList.add("render"), 60);
  const navdemos = Array.from(document.querySelectorAll("nav.demos > .demo"));
  const total = navdemos.length;
  const current = navdemos.findIndex(el =>
    el.classList.contains("demo--current")
  );
  const navigate = linkEl => {
    document.body.classList.remove("render");
    document.body.addEventListener(
      "transitionend",
      () => (window.location = linkEl.href)
    );
  };
  navdemos.forEach(link =>
    link.addEventListener("click", ev => {
      ev.preventDefault();
      navigate(ev.target);
    })
  );
  document.addEventListener("keydown", ev => {
    const keyCode = ev.keyCode || ev.which;
    let linkEl;
    if (keyCode === 37) {
      linkEl = current > 0 ? navdemos[current - 1] : navdemos[total - 1];
    } else if (keyCode === 39) {
      linkEl = current < total - 1 ? navdemos[current + 1] : navdemos[0];
    } else {
      return false;
    }
    navigate(linkEl);
  });
}

// Video Play
$(function() {
  // Auto play modal video
  $(".video").click(function() {
    var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto =
        videoSRC +
        "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + " iframe").attr("src", videoSRCauto);
    $(theModal + " button.close").click(function() {
      $(theModal + " iframe").attr("src", videoSRC);
    });
  });
});

// MISLI
$(".slider").slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1
});
