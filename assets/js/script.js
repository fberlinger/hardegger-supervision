$( document ).ready(function() {
                
                $("#angebot_scroll").fadeOut();   
                $("#persönlich_scroll").fadeOut();
                $("#kontakt_scroll").fadeOut();

                $("#angebot").click(function(){
                    $("#index").fadeOut();
                    $("#angebot_scroll").fadeIn();
                    $('#angebot_left').addClass('animated slideInLeft');
                    $('#angebot_right').addClass('animated slideInRight');
                    });
                $("#persönlich").click(function(){
                    $("#index").fadeOut();
                    $("#persönlich_scroll").fadeIn();
                    $('#persönlich_left').addClass('animated slideInLeft');
                    $('#persönlich_right').addClass('animated slideInRight');
                    });
                $("#kontakt").click(function(){
                    $("#index").fadeOut();
                    $("#kontakt_scroll").fadeIn();
                    $('#kontakt_left').addClass('animated slideInLeft');
                    $('#kontakt_right').addClass('animated slideInRight');
                    });
                
                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });
           
		});