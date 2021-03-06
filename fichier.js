
$(document).ready(function() {
  $('#searchbox').keyup(function() {
    var val = $(this).val().toLowerCase();
    $(".box").hide();
    $(".box").each(function() {
      var text = $(this).text().toLowerCase();
      if (text.indexOf(val) != -1) {
        $(this).show();
      }
    })
  })
})

var $btns = $('.btn').click(function() {
  if (this.id == 'all') {
    $(".box").fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $(".box").not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})

 $("input").on("click", function() {
  if (this.id == 'all') {
    $(".box").fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $(".box").not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
});




/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  }

});

