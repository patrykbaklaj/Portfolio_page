import "./style.scss";

$(document).ready(function() {
  // menu
  $('#toggle').click(function() {
    $(this).toggleClass('toggle-active');
    $('#overlay').toggleClass('nav-active');
  });

  $('#overlay ul li a').click(function(event) {
    $('#toggle').toggleClass('toggle-active');
    $('#overlay').toggleClass('nav-active');
  });

  // animated heading
  let name = $('#letter-container a.text_toAnimate');
  let desc = $('#letter-container a.description_toAnimate');
  name.css("display", "block");

  function spliter(toSplit, spanClass) {
    var splitedText = toSplit.text().split("");
    toSplit.text("");

    for (var i = 0; i < splitedText.length; i++) {
      var span = $('<span class=' + spanClass + '><span>').text(splitedText[i]);
      toSplit.append(span);
    }
  }


  spliter(name, "name_animate");

  let h3 = $("h3");

  h3.typeIt({
    startDelay: 2000,
    speed: 100,
    lifeLike: true,
    autoStart: false
  });


  // section second animation
  ;(function($, win) {
    $.fn.inViewport = function(cb) {
      return this.each(function(i,el){
        function visPx(){
          var H = $(this).height(),
          r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
          return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
        } visPx();
        $(win).on("resize scroll", visPx);
      });
    };
  }(jQuery, window));



  $(".section_second_header").inViewport(function(px){
    if(px) $(this).addClass("header_active") ;
    else $(this).removeClass("header_active") ;
  });

  $(".section_second_text").inViewport(function(px){
    if(px) $(this).addClass("text_active") ;
    else $(this).removeClass("text_active") ;
  });

  $(".download").inViewport(function(px){
    if(px) $(this).addClass("download_active") ;
    else $(this).removeClass("download_active") ;
  });

  // slideshow
  $('.carousel').carousel();

  $('.icons_container').inViewport(function(px) {
    if(px) {
      $(this).find("div.skill_icons").each(function(index, el) {
        $(el).addClass('skill' + index);
      });
    }
    else {
      $(this).find("div.skill_icons").each(function(index, el) {
        $(el).removeClass('skill' + index);
      });
    }
  });

  $('#contact form').inViewport(function(px) {
    if(px) {
      $(this).find("*").each(function(index, el) {
        $(el).addClass('skill' + index);
      });
    }
    else {
      $(this).find("*").each(function(index, el) {
        $(el).removeClass('skill' + index);
      });
    }
  });



});
