let tl = gsap.timeline({
    scrollTrigger :{
        trigger : "#sec-2",
        pin: true, 
        scrub: true,
        markers: true,
        start : "top top",
        end: "+=" + (window.innerHeight * 20),
        onLeave: () =>{
 
          $('#sec-2').css("overflow","hidden");
          $('.navbar').fadeIn();
        },
        onEnterBack: () =>{
          $('.navbar').fadeOut();
        }
    }
})
tl.set( CSSRulePlugin.getRule("#sec-2::after"), {duration: 3, cssRule: {display: "block"}});
tl.fromTo('.title-1, .subtitle',  5, {scale:'1', opacity: '1'}, {scale :'10' , opacity:'0',display:"none"}, "first");
tl.to('.berry-1' , 5 , {x: '-50%' , opacity:0 ,display:"none"} , "first")
tl.to('.mouse' ,{  opacity:0 ,display:"none"} , "first")
tl.to('.flwr-1, .sparkle-1 ' , 5 , {y: '-50%' , opacity:0, display:"none"} , "first")
tl.to('.flwr-2' , 5 , {x: '50%' , y: "-50%", opacity:0, display:"none"} , "first")
tl.to('.sparkle-4' , 5 , {x: '-50%' , opacity:0, display:"none"} , "first" )
tl.to('.glow-1' , 5 , {x: '-50%' , opacity:0, display:"none"} , "first" )
tl.to('.flwr-4' , 5 , {x: '-50%' ,y: "50%", opacity:0, display:"none"} , "first" )
tl.to('.glow-2' , 5 , {x: '-50%' ,y: "50%", opacity:0, display:"none"} , "first" )
tl.to('.sparkle-3' , 5 , {x: '-50%' ,y: "50%", opacity:0, display:"none"} , "first" )
tl.to('.flwr-3' , 5 , {x: '50%' ,y: "50%", opacity:0, display:"none"} , "first" )
tl.to('.sparkle-2' , 5 , {x: '50%' ,y: "50%", opacity:0, display:"none"} , "first" )
tl.to('.glow-3' , 5 , {x: '50%' ,y: "50%", opacity:0, display:"none"} , "first" )
tl.to('.leaf-1' , 5 , {x: '50%' ,y: "50%", opacity:0, display:"none"} , "first" );
 
tl.to('.flwr-9' , 5 , {x: 160 ,y: -100}, "second" ) 
tl.to('.flwr-5' , 5 , {x: 160 ,y: -100}, "second" ) 
tl.to('.leaf-2' , 5 , {y: "-30%"}, "second" ) 
tl.to('.flwr-6' , 5 , {y: "30%"}, "second" ) 
tl.to('.flwr-7' , 5 , {x: "30%"}, "second" ) 
tl.to('.flwr-8' , 5 , {x: "-40%",y: "10%"}, "second" ) 

 tl.to( CSSRulePlugin.getRule("#sec-2::after"), {duration: 2, cssRule: {opacity : 0, display: "none"}});

tl.from('.bottelAndDescrip-container' , 7 , {y: '50%' , opacity:0},"second")
 
tl.from(' .bottel' , 7 , {y: '60%' , opacity:0},"second")
tl.to('.description' , 7 , {y: '-50%' , opacity:0})
tl.to('.wj-top' , 5, { rotation:"-=25", y:"-40%", x:"-10%"}, "sixth")
tl.to('.discription-1-div' , 10, { y:"-10%" , opacity:0} , "sixth")
tl.to('.discription-2-div' , 10, { y:"-50%" , opacity:1} , )
tl.to('.discription-2-div' , 10, { opacity:1} , )
tl.to('.discription-2-div' , 10, { y:"-100%" , opacity:0} , )
tl.to( CSSRulePlugin.getRule("#sec-2"), {duration: 1, cssRule: { backgroundImage : "none", backgroundColor: "#ffff" }});
tl.to('.flwr-9' , 5 , {x: 40, y: -40, rotation:"-=45"},"seventh" ) 
tl.to('.flwr-5' , 5 , { x: 130 , y: -120} ,"seventh" ) 
 
tl.to('.leaf-2' , 5 , {y: 160, rotation:"-=45"},"seventh" ) 
tl.to('.flwr-8' , 5 , {y: "20%"},"seventh")
tl.to('.flwr-7' , 5 , {x: "50%", rotation:"-=15"},"seventh")
tl.to('.flwr-6' , 5 , {y: "-50%"},"seventh" )
tl.to('.bottelAndDescrip-container' , 7 , {x: '250px'},"seventh")
tl.to('.wj-top ' , 7 , {y: '-165%'}, "eighth")
tl.to('.wj-bottom ' , 7 , {y: '75%'}, "eighth")
tl.to('.jellysAndMessages-container ' , 7 , {y: '20%', opacity:1}, "eighth")
tl.to('.left-description-messages, .right-description-messages ' , 7 , {y: '20%', opacity:1}, )
tl.to('.left-description-messages, .right-description-messages ' , 7 , {y: '-20%', opacity:0}, )
tl.to('.left-description-messages-2, .right-description-message-2 ' , 7 , {y: '20%', opacity:1}, )
tl.to('.left-description-messages-2, .right-description-message-2 ' , 7 , {y: '-20%', opacity:0}, )
tl.to('.left-description-messages-3, .right-description-message-3 ' , 7 , {y: '20%', opacity:1}, )
tl.to('.left-description-messages-3, .right-description-message-3 ' , 7 , {y: '-20%', opacity:0}, )
tl.set('.wj-bottom' , {attr:{src: "./images/hearo2/White Jelly Bottom 2.png"}}, )
tl.to('.wj-bottom' , 5, {y : '-110%'},'up')
tl.to('.flwr-7' , 5, {y : '-150%'},'up')
tl.to('.flwr-8' , 5, {y : '-180%'},'up')

tl.to('.jellysAndMessages-container, .flwr-9,.flwr-6,.flwr-5,.leaf-2, .wj-top',4, {opacity:0} , 'up')
tl.set('.wj-bottom' , {attr:{src: "./images/hearo2/White Jelly Bottom 3.png"}})
tl.to('.delivering-result-container', 4, {opacity:1})

tl.to('.wj-bottom' , 5, {y : '-210%', opacity:0},'next-page')
tl.to('.flwr-7' , 5, {y : '-250%', opacity:0},'next-page')
tl.to('.flwr-8' , 5, {y : '-280%', opacity:0},'next-page')
tl.to('.delivering-result-container', 5, {y : '-230%', opacity:1},'next-page')
tl.to('.skin-cells-container',5,{y:-100, opacity:1})
tl.from('.first-message',5,{y:50, opacity:0}, )

tl.to('.cell-1, .cell-2', 10, {y:150})
tl.to('.first-message',5,{ opacity:0})
tl.from('.second-message',5,{y:50, opacity:0})
 
// tl.to('.bottel ' , 7 , {y: '50%'})
// tl.to('.p1, .p2' , 7 , {y: '-50%' , opacity:1},"third")
// tl.to('.p1, .p2' , 7 , {y: '-50%' , opacity:0},"forth")
// tl.to('.p1, .p2' , 7 , {y: '-50%' , opacity:1},"fifth")
// tl.to('.p1, .p2' , 7 , {y: '-50%' , opacity:1},"sixth")
// tl.to('.p1, .p2' , 7 , {y: '50%' , opacity:0},"sixth")
// tl.to('.coverup ' , 7 , {opacity: 0})
// tl.to('.bottel ' , 7 , {y: '-100%'})
// tl.to('.skin-img', 7 , {y:'-50%' , opacity: 1})
// tl.to('#product-img' , 1.5 , {y: '-50%' , opacity:0})

 
//  gsap.to('.title-2, .subtitle',{
//      scrollTrigger:{
//          trigger: ".title-2",
//          start: "cente"
//      }
//  })
 

    //  HOW TO USE ANIMATION STARTS 
let tl2 = gsap.timeline({
  scrollTrigger :{
      trigger : "#sec-4",
      pin: true, 
      scrub: true,
      markers: true,
      start : "center center",
      end: "+=" + (window.innerHeight * 8),
    }
      });
      tl2.from('.step-1', 5, {y: 100, opacity:0 })
      tl2.to('.step-1', 5, {opacity:0 })
      tl2.to('.flwres-frame', 0.5 , {x: -300}, 'frist')
      tl2.to('.girl-frame', 1 , {x: -300}, 'frist')
      tl2.from('.step-2', 5, {y: 100, opacity:0 })
      tl2.to('.step-2', 5, {opacity:0 })
      tl2.to('.flwres-frame', 0.5 , {x: -600}, 'second')
      tl2.to('.girl-frame', 1 , {x: -670}, 'second')
      tl2.from('.step-3', 5, {y: 100, opacity:0 })
      tl2.to('.step-3', 5, {opacity:0 })
      tl2.to('.flwres-frame', 0.5 , {x: -900}, '3rd')
      tl2.to('.girl-frame', 1 , {x: -1050}, '3rd')
      tl2.from('.step-4', 2, {y: 100, opacity:0 })
 

// HOW TO USE ANIMATION ENDS 

//-- follow mouse animation --//

var windowWidth = $(window).width();

$('.placeholder-row').mousemove(function(event){
  var moveX = (($(window).width() / 90) - event.pageX) * 0.01;
  var moveY = (($(window).height() / 50) - event.pageY) * 0.02;
  $('.placeholder-flower-1').css('margin-left', moveX + 'px');
 
  $('.placeholder-flower-2').css('margin-left', -moveX + 'px');
  $('.placeholder-flower-2').css('margin-top', -moveY + 'px');
}); 

// -- placeholder page --//
// flower Animation //
$('.flowers').mousemove(function(event){
  var moveX = (($(window).width() / 90) - event.pageX) * 0.01;
  var moveY = (($(window).height() / 50) - event.pageY) * 0.02;
  $('.flwr-9').css('margin-left', moveX + 'px');
 
  $('.flwr-9 ').css('margin-left', -moveX + 'px');
  $('.flwr-9 ').css('margin-top', -moveY + 'px');
}); 

$('.section').mousemove(function(event){

  var moveY = (($(window).height() / 50) - event.pageY) * 0.02;
  $('.flwr-5').css('margin-left', moveX + 'px');
 
  $('.flwr-5 ').css('margin-left', -moveX + 'px');
  $('.flwr-5 ').css('margin-top', -moveY + 'px');
}); 
$('.section').mousemove(function(event){
  var moveX = (($(window).width() / 90) - event.pageX) * 0.01;
  var moveY = (($(window).height() / 50) - event.pageY) * 0.02;
  $('.flwr-6').css('margin-left', moveX + 'px');
 
  $('.flwr-6 ').css('margin-left', -moveX + 'px');
  $('.flwr-6 ').css('margin-top', -moveY + 'px');
}); 
$('.section').mousemove(function(event){
  var moveX = (($(window).width() / 90) - event.pageX) * 0.01;
  var moveY = (($(window).height() / 50) - event.pageY) * 0.02;
  $('.flwr-7').css('margin-left', moveX + 'px');
 
  $('.flwr-7 ').css('margin-left', -moveX + 'px');
  $('.flwr-7 ').css('margin-top', -moveY + 'px');
}); 
$('.section').mousemove(function(event){
  var moveX = (($(window).width() / 90) - event.pageX) * 0.01;
  var moveY = (($(window).height() / 50) - event.pageY) * 0.02;
  $('.flwr-8').css('margin-left', moveX + 'px');
 
  $('.flwr-8 ').css('margin-left', -moveX + 'px');
  $('.flwr-8 ').css('margin-top', -moveY + 'px');
}); 
$('.section').mousemove(function(event){
  var moveX = (($(window).width() / 90) - event.pageX) * 0.01;
  var moveY = (($(window).height() / 50) - event.pageY) * 0.02;
  $('.leaf-2').css('margin-left', moveX + 'px');
 
  $('.leaf-2 ').css('margin-left', -moveX + 'px');
  $('.leaf-2 ').css('margin-top', -moveY + 'px');
}); 
// flower Animation ends //

var swiper = new Swiper(".mySwiper", {
  slidesPerView:2,
  centeredSlides: true,
  spaceBetween: 100,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  nextButton: '.arrow-next',
  prevButton: '.swiper-button-prev',
});
$('#next').click(function(e){

  swiper.slideNext();

});
$('#prev').click(function(e){

  swiper.slidePrev();

});
 
// PLACEHOLDER PAGE STARTS 
$(window).on('load', function() {
  $('#preloader').css({
    "transform": "translateY(-100%)",
    "transition-delay": "2s"
  });
  $('.loader').css({
    "opacity": "0",
    "transform": "translate(-50%,-100%)",
    "transition-delay": "2s"
  });

  $('.loader_text_unit').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 300,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
  });

});

// PLACEHOLDER PAGE ENDS 

var cursor = $(".cursor"),
		follower = $(".cursor-follower");

var posX = 0,
		posY = 0;

var mouseX = 0,
		mouseY = 0;

TweenMax.to({}, 0.016, {
	repeat:-1,
	onRepeat:function(){
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;
		
		TweenMax.set(follower, {
			css: {
				left: posX - 12,
				top: posY - 12
			}
		});
		TweenMax.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY
			}
		});
	}	
});

$(document).on("mousemove",function(e){
	mouseX = e.pageX;
	mouseY = e.pageY;
});

$(".link").on("mouseenter",function(){
	cursor.addClass("active");
	follower.addClass("active");
});

$(".link").on("mouseleave",function(){
	cursor.removeClass("active");
	follower.removeClass("active");
});