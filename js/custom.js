$(function(){"use strict";var wind=$(window);$(".navbar-nav").singlePageNav({speed:1e3,currentClass:"active",offset:60});wind.on("scroll",function(){var bodyScroll=wind.scrollTop(),navbar=$(".navbar-default");if(bodyScroll>300){navbar.addClass("nav-scroll")}else{navbar.removeClass("nav-scroll")}});$(".button-scroll").on("click",function(){var scrollTo=$(this).attr("data-scrollTo");$("body, html").animate({scrollTop:$("#"+scrollTo).offset().top-60},1e3)});wind.on("scroll",function(){$(".skills-progress span").each(function(){var bottom_of_object=$(this).offset().top+$(this).outerHeight();var bottom_of_window=$(window).scrollTop()+$(window).height();var myVal=$(this).attr("data-value");if(bottom_of_window>bottom_of_object){$(this).css({width:myVal})}})});$(".services").on("click","li",function(){var myID=$(this).attr("id");$(this).addClass("active").siblings().removeClass("active");$(".services .item").hide();$("#"+myID+"-content").fadeIn()});$(".portfolio .link").magnificPopup({delegate:"a",type:"image"});$(".demo4 .owl-carousel").owlCarousel({items:1,loop:true,mouseDrag:false,autoplay:true,dots:false,nav:true,navText:['<span> <i class="fa fa-angle-left" aria-hidden="true"></i> </span>','<span> <i class="fa fa-angle-right" aria-hidden="true"></i> </span>'],smartSpeed:500});$(".clients .owl-carousel").owlCarousel({items:1,loop:true,mouseDrag:false,autoplay:true,smartSpeed:500});wind.stellar();$(".gallery").isotope({itemSelector:".item-img"});var $gallery=$(".gallery").isotope({});$(".filtering").on("click","span",function(){var filterValue=$(this).attr("data-filter");$gallery.isotope({filter:filterValue})});$(".filtering").on("click","span",function(){$(this).addClass("active").siblings().removeClass("active")});$(".map-toggle").click(function(){$(".map-loc").slideToggle(10);$("span").toggleClass("open")})});$(window).on("load",function(){$(".loading").fadeOut(500);$("#contact-form").validator();$("#contact-form").on("submit",function(e){if(!e.isDefaultPrevented()){var url="contact.php";$.ajax({type:"POST",url:url,data:$(this).serialize(),success:function(data){var messageAlert="alert-"+data.type;var messageText=data.message;var alertBox='<div class="alert '+messageAlert+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+messageText+"</div>";if(messageAlert&&messageText){$("#contact-form").find(".messages").html(alertBox);$("#contact-form")[0].reset()}}});return false}})});
