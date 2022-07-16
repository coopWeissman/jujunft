(function ($) {
    "use strict";

    jQuery(document).ready(function($){

      setTimeout(function() {
        $('#myElem').addClass('hidden');
      }, 10000);

      // $('.about').parallax({imageSrc: 'assets/img/roadmap.jpg'});

      $('.ssdd').parallax({imageSrc: 'assets/img/team_bg.jpeg'});

// typed area js

      new TypeIt("#bot", {
        strings: ["Buildings ","Drone ","Robotics "],
        speed: 70,
        loop: true,
        breakLines: false,
    }).go();

    new TypeIt("#transport", {
      strings: ["Buildings ","Drone ","Robotics "],
      speed: 70,
      loop: true,
      breakLines: false,
  }).go();


  new TypeIt("#drone", {
    strings: ["Buildings ","Drone ","Robotics "],
    speed: 70,
    loop: true,
    breakLines: false,
}).go();









         
      $('[data-fancybox="gallery"]').fancybox({
        buttons: [
          "slideShow",
          "thumbs",
          "zoom",
          "fullScreen",
          "share",
          "close"
        ],
        loop: false,
        protect: true
      });





        $(document).ready(function(){ 
            $('.tab-a').click(function(){  
              $(".tab").removeClass('tab-active');
              $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
              $(".tab-a").removeClass('active-a');
              $(this).parent().find(".tab-a").addClass('active-a');
             });
        });



        $(".myselect").change(function() {

            // var selectedVal = $("#myselect option:selected").text();
            var selectedVal = $(".myselect option:selected").val();

            console.log(selectedVal);

            window.location = selectedVal;

        });

        

        $(".success-slider").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            
            navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],

            
        });



        $(".blog-slider").owlCarousel({
            items: 3,
            loop:true,
            nav: true,
            dots: true,
            margin: 30,
            autoplay: true,

            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:true,
                },
                1000:{
                    items:3,
                    nav:true,
                }
            }

        });

        $('.talk_btn').click(function () {
            $('#myPopup').css('display','block').fadeIn();
        });

        $('#myPopup a').click(function () {
            $('#myPopup').css('display','none').fadeOut();
        });
        $('#hero').click(function () {
            $('#myPopup').css('display','none').fadeOut();
        });






        // bot video play button js ========
        $('#bot-play-video').on('click', function(e){
          e.preventDefault();
          $('#bot-video-overlay').addClass('open');
          $("#bot-video-overlay").append('<iframe width="660" height="400" src="assets/img/video/lamp.mp4" frameborder="0" allowfullscreen></iframe>');
        });
        
        $('.bot-video-overlay, .video-overlay-close').on('click', function(e){
          e.preventDefault();
          close_video();
        });
        
        $(document).keyup(function(e){
          if(e.keyCode === 27) { close_video(); }
        });
        
        function close_video() {
          $('.bot-video-overlay.open').removeClass('open').find('iframe').remove();
        };


        // play button js ========
        $('#play-video').on('click', function(e){
            e.preventDefault();
            $('#video-overlay').addClass('open');
            $("#video-overlay").append('<iframe width="660" height="400" src="assets/img/web-img/Mini2_Showreel_S32_Banner_10s_V4_1200x720.mp4" frameborder="0" allowfullscreen></iframe>');
          });
          
          $('.video-overlay, .video-overlay-close').on('click', function(e){
            e.preventDefault();
            close_video();
          });
          
          $(document).keyup(function(e){
            if(e.keyCode === 27) { close_video(); }
          });
          
          function close_video() {
            $('.video-overlay.open').removeClass('open').find('iframe').remove();
          };


          
        // bg1 button js ========
        $('#bg-1-video').on('click', function(e){
          e.preventDefault();
          $('#video-overlay').addClass('open');
          $("#video-overlay").append('<iframe width="660" height="400" src="https://www.youtube.com/embed/Ua3tEX4aTag" frameborder="0" allowfullscreen></iframe>');
        });
        
        $('.video-overlay, .video-overlay-close').on('click', function(e){
          e.preventDefault();
          close_video();
        });
        
        $(document).keyup(function(e){
          if(e.keyCode === 27) { close_video(); }
        });
        
        function close_video() {
          $('.video-overlay.open').removeClass('open').find('iframe').remove();
        };



                // bg1-2 button js ========
                $('#bg-1-video').on('click', function(e){
                  e.preventDefault();
                  $('#video-overlay').addClass('open');
                  $("#video-overlay").append('<iframe width="660" height="400" src="https://www.youtube.com/embed/0O2E9bCpKDk" frameborder="0" allowfullscreen></iframe>');
                });
                $('.video-overlay, .video-overlay-close').on('click', function(e){
                  e.preventDefault();
                  close_video();
                });
                
                $(document).keyup(function(e){
                  if(e.keyCode === 27) { close_video(); }
                });
                
                function close_video() {
                  $('.video-overlay.open').removeClass('open').find('iframe').remove();
                };
        
                               
        // bg1-3 button js ========
          $('#bg-3-video').on('click', function(e){
            e.preventDefault();
            $('#video-overlay').addClass('open');
            $("#video-overlay").append('<iframe width="660" height="400" src="https://www.youtube.com/embed/uXGj4t2LSEY" frameborder="0" allowfullscreen></iframe>');
          });
          $('.video-overlay, .video-overlay-close').on('click', function(e){
            e.preventDefault();
            close_video();
          });

          $(document).keyup(function(e){
            if(e.keyCode === 27) { close_video(); }
          });

          function close_video() {
            $('.video-overlay.open').removeClass('open').find('iframe').remove();
          };




          





    });

    jQuery(window).load(function(){


    });


}(jQuery));


