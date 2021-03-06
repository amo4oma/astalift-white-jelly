gsap.config({nullTargetWarn: false});

let tl = gsap.timeline({
    scrollTrigger :{
        trigger : "#sec-2",
        pin: true, 
        scrub: 0.2,
         
 
 
        start : "bottom bottom",
        end: "+=" + (window.innerHeight * 20),
        onLeave: () =>{
          
          $('#sec-2').css("overflow","hidden");
          $('#desktop-nav').fadeIn();
       
     
        },
        onEnterBack: () =>{
          $('#desktop-nav').fadeOut();
        }
    }
})

tl.set( CSSRulePlugin.getRule("#sec-2::after"), {duration: 3, cssRule: {display: "block"}});
tl.to('.title-1',5,{scale :'10', y:"-500%" , opacity:'0',display:"none"}, "first");
tl.to('.subtitle',5,{scale :'10', y:"500%" , opacity:'0',display:"none"}, "first");
 
 
tl.to('.berry-1' , 5 , {x: '-50%' , opacity:0 ,display:"none"} , "first")
tl.to('.scrolling-dot' ,{  opacity:0 ,display:"none"} , "first")
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

 tl.to( CSSRulePlugin.getRule("#sec-2::after"), {duration: 2, cssRule: {opacity : 0, display: "none"}},"second");

tl.from('.bottelAndDescrip-container' , 7 , {y: 100 , opacity:0},"third")
 tl.to('.bottelAndDescrip-container',{zIndex: 9})
 
tl.to('.description' , 7 , {y: '-50%' , opacity:0})
tl.to('.wj-top' , 5, { rotation:"-=25", y:"-40%", x:"-10%"}, "sixth")
tl.to('.discription-1-div' , 10, { y:"-10%" , opacity:0} , "sixth")
tl.to('.discription-2-div' , 10, { y: -50, opacity:1} , )
 
tl.to('.discription-2-div' , 10, { y:"-100%" , opacity:0} , )
tl.to( CSSRulePlugin.getRule("#sec-2:before"), {duration: 5, cssRule: { opacity : 0,}}, 'BGC-change');
tl.to( CSSRulePlugin.getRule("#sec-2"), {duration: 5, cssRule: { backgroundColor : "#fff",}}, "BGC-change");
tl.to('.flwr-9' , 5 , {x: 40, y: -40, rotation:"-=45"},"seventh" ) 
tl.to('.flwr-5' , 5 , { x: 130 , y: -120} ,"seventh" ) 
 
tl.to('.leaf-2' , 5 , {y: 160, rotation:"-=45"},"seventh" ) 
tl.to('.flwr-8' , 5 , {y: "20%"},"seventh")
tl.to('.flwr-7' , 5 , {x: "50%", rotation:"-=15"},"seventh")
tl.to('.flwr-6' , 5 , {y: "-50%"},"seventh" )
tl.to('.bottelAndDescrip-container' , 7 , {x: '13%'},"seventh")
if ($(window).height()<= 695){
  tl.to('.wj-bottom ' , 7 , {y: '60%'}, "eighth")
}else{
  tl.to('.wj-bottom ' , 7 , {y: '75%'}, "eighth")
}
tl.to('.wj-top ' , 7 , {y: '-165%'}, "eighth")
 
tl.to('.jellysAndMessages-container ' , 7 , {y: '20%', opacity:1})
tl.to('.left-description-messages, .right-description-messages ' , 10 , {y: '-20%', opacity:1}, )
tl.to('.left-description-messages, .right-description-messages ' , 10 , {y: '-40%', opacity:0}, )
tl.to('.left-description-messages-2, .right-description-message-2 ' , 10 , {y: '-20%', opacity:1}, )
tl.to('.left-description-messages-2, .right-description-message-2 ' , 10 , {y: '-40%', opacity:0}, )
tl.to('.left-description-messages-3, .right-description-message-3 ' , 10 , {y: '-20%', opacity:1}, )
tl.to('.left-description-messages-3, .right-description-message-3 ' , 10 , {y: '-40%', opacity:0}, )

tl.to('.wj-bottom' , 5, {y : '-55%'},'up')
tl.to('.flwr-7' , 5, {y : '-75%'},'up')
tl.to('.flwr-8' , 5, {y : '-70%'},'up')
tl.fromTo('.delivering-result-container', 5, {y : '300%', opacity:0},{y:"-10%",opacity :1},'up')
tl.set('.wj-bottom' , {attr:{src: "./images/hearo2/White Jelly Bottom 2.png"}}, )
if ($(window).width() <= 1370 ||  $(window).height() <= 770 ){
  tl.to('.wj-bottom' , 5, {y : '-100%'},'up-2')
}else{
tl.to('.wj-bottom' , 5, {y : '-110%'},'up-2')
}
tl.to('.flwr-7' , 5, {y : '-150%'},'up-2')
tl.to('.flwr-8' , 5, {y : '-180%'},'up-2')

tl.to('.jellysAndMessages-container, .flwr-9,.flwr-6,.flwr-5,.leaf-2, .wj-top',4, {y:"-200%", opacity:0} , 'up')

tl.set('.wj-bottom' , {attr:{src: "./images/hearo2/White Jelly Bottom 3.png"}})

tl.to('.delivering-result-container', 5,{y:"-50%",opacity :1},'reanimate')

tl.to('.wj-bottom' , 5, {y : '-210%', opacity:0},'next-page')
if ($(window).width() <= 1370 ||  $(window).height() <= 770 ){
  tl.to('.delivering-result-container', 5,{y:"-180%",opacity :1},'next-page')
}else{
  tl.to('.delivering-result-container', 5,{y:"-200%",opacity :1},'next-page')
}

tl.to('.skin-cells-container',5,{y:-100, opacity:1},'next-page')
 

tl.to('.cell-1, .cell-2', 5, {y:75},"cells-to-skin-1")
tl.from('.first-message',5,{ y:75 ,opacity:0},"cells-to-skin-1")
tl.to('.first-message',5,{ opacity:0})
tl.to('.cell-1, .cell-2', 5, {y:150},"cells-to-skin-2")
tl.from('.second-message',5,{y:50, opacity:0},"cells-to-skin-2")
 
 
 
 

    //  HOW TO USE ANIMATION STARTS 
    
let tl2 = gsap.timeline({
  scrollTrigger :{
      trigger : "#how-to-use-section",
      pin: true, 
   
      scrub: true,
      nullTargetWarn: false,
      start : "center center",
      end: "+=" + (window.innerHeight * 8),
    }
      });
      tl2.from('.step-1', 1, {y: 100, opacity:0 })
      tl2.to('.step-1', 1, {opacity:0 })
      tl2.to('.flwres-frame', 0.5 , {x: -300}, 'frist')
      tl2.to('.girl-frame', 1 , {x: -450}, 'frist')
      tl2.from('.step-2', 1, {y: 100, opacity:0 }, 'frist')
      tl2.to('.step-2', 1, {opacity:0 })
      tl2.to('.flwres-frame', 0.5 , {x: -500}, 'second')
      
      if($(window).width() <= 1440 ){
        tl2.to('.girl-frame', 1 , {x : -890}, 'second')
      }else{
        tl2.to('.girl-frame', 1 , {x : -930}, 'second')
      }
    
     
      tl2.from('.step-3', 1, {y: 100, opacity:0 }, 'second')
      tl2.to('.step-3', 1, {opacity:0 })
    
      if($(window).width() <= 1440 ){
        tl2.to('.girl-frame', 1 , {x : -1320}, '3rd')
        tl2.to('.flwres-frame', 0.5 , {x: -760}, '3rd')
      }else if ($(window).width() <= 1600){
        tl2.to('.girl-frame', 1 , {x : -1430}, '3rd')
      }else if ($(window).width() <= 1390){
        tl2.to('.girl-frame', 1 , {x : -1300}, '3rd')
      }else {
        tl2.to('.girl-frame', 1 , {x : -1420}, '3rd')
        tl2.to('.flwres-frame', 0.5 , {x: -860}, '3rd')
      }
      
   
      tl2.from('.step-4', 2, {y: 100, opacity:0 }, '3rd')
 

// HOW TO USE ANIMATION ENDS 

//-- follow mouse animation --//

var windowWidth = $(window).width();

$('.placeholder-row').mousemove(function(event){
  var moveX = (($(window).width() / 50) - event.pageX) * 0.01;
  var moveY = (($(window).height() / 50) - event.pageY) * 0.02;
  $('.placeholder-flower-1').css('margin-left', moveX + 'px');
  $('.placeholder-flower-1').css('margin-top', -moveY + 'px');
  $('.placeholder-flower-2').css('margin-left', -moveX + 'px');
  $('.placeholder-flower-2').css('margin-right', -moveX + 'px');
  $('.placeholder-flower-2').css('margin-top', -moveY + 'px');
}); 

$('.jelly-drops-container').mousemove(function(event){
  var mX = (($(window).width() / 5) - event.pageX) * 0.01;
  var mY = (($(window).height()/10) - event.pageY) * 0.00002 ;
  $('.jelly-drops-container ').css('right', mX + 'px');
}); 



// -- placeholder page --//
// flower Animation //
$('#sec-2').mousemove(function(event){
  var moveX = (($(window).width() / 2) - event.pageX) * 0.01;
  var moveY = (($('#sec-2').height() / 2) - event.pageY)  * 0.005;
  $('.flwr-9, .leaf-2, flwr-6').css('margin-left', moveX + 'px');
 
  $('.flwr-9, .leaf-2, flwr-6 ').css('margin-left', -moveX + 'px');
  $('.flwr-9, .leaf-2, flwr-6 ').css('margin-top', moveX + 'px');
}); 
$('#sec-2').mousemove(function(event){
  var moveX = (($(window).width() / 2) - event.pageX) * 0.01;
  var moveY = (100 - event.pageY)  * 0.0005;
  $('.flwr-8, .flwr-7').css('margin-left', moveX + 'px');
 
  $('.flwr-8, .flwr-7 ').css('margin-left', -moveX + 'px');
  $('.flwr-8, .flwr-7 ').css('margin-top', moveX + 'px');
  
}); 
$('#sec-2').mousemove(function(event){
  var moveX = (($(window).width() / 2) - event.pageX) * 0.01;
  var moveY = (($('#sec-2').height() / 2) - event.pageY)  * 0.0005;
  $('.flwr-5, .flwr-6').css('margin-left', moveX + 'px');
 
  $('.flwr-5, .flwr-6 ').css('margin-left', -moveX + 'px');
  $('.flwr-5, .flwr-6 ').css('margin-top', -moveX + 'px');
}); 

 
 

 
// flower Animation ends //

var swiper = new Swiper(".mySwiper", {
  slidesPerView: screenWidth < 600 ? 1 : 2,
  centeredSlides: true,
  spaceBetween: $( window ).width() < 600 ? 0 : 400,
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


$(window).on('load', function (){
  
  var count = 0;
  var counting = setInterval(function(){
      if(count < 101) {
          $('.loader_text_unit').text(count);
          $('.loader_animate').css('width', count + '%')
          count++
      } else {
          clearInterval(counting)
      }
  }, 10);
  $('#preloader').css({
    "transform": "translateY(-200%)",
    "transition-delay": "2s",
  });
})

// PLACEHOLDER PAGE ENDS 
// second swiper 

var screenWidth = $( window ).width();
var newSwiper = new Swiper('.slider2', {
  slidesPerView: screenWidth > 600 ? 4 : 1,
  paginationClickable: true,
  spaceBetween: screenWidth > 600 ? 2 : 1,
  lazyLoading: true,
  nextButton: '.new-arrow-swiper-2-right ',
  prevButton: '.new-arrow-swiper-2-left '
});

$('.new-arrow-swiper-2-left').hide();
newSwiper.on('transitionEnd', function() {
  console.log('*** mySwiper.realIndex', newSwiper.realIndex);
  if(newSwiper.realIndex === 0){
    $('.new-arrow-swiper-2-left').hide();

  }else{
    $('.new-arrow-swiper-2-left').show();
  }
  if(newSwiper.realIndex === 3){
    $('.new-arrow-swiper-2-right').hide();

  }else{
    $('.new-arrow-swiper-2-right').show();
  }
});
 
$('.new-arrow-swiper-2-right').click(function(e){

  newSwiper.slideNext();

});
$('.new-arrow-swiper-2-left ').click(function(e){

  newSwiper.slidePrev();

});
// second swiper ends
// mobile-how-to-use-slider

$('.slick-wrapper').slick({
  nextArrow:"<i id='gonext' class='arrow-right'  ><img class='arrow-img' src='./images/mobile/19_Arrow_Next.png'></i>",
  prevArrow:"<i id='goprev' class='arrow-left'  ><img class='arrow-img' src='./images/mobile/18_Arrow_Previous.png'></i>",
  infinite: false,

})
$('#goprev').hide();
$(document).ready(function(){
  $('.slick-wrapper').on('afterChange', function(event, slick, currentSlide, nextSlide){
  var dataId = $(slick.$slides[currentSlide]).data('index');  
  console.log(dataId)   
  if (dataId === 0){
    $('#goprev').hide();
  }else{
    $('#goprev').show();
  }
  if(dataId ===3){
    $('#gonext').hide();
  }else{
    $('#gonext').show();
  }
});
})

 
// let howTouseMobile = new Swiper('#h2u-mobile', {
//   slidesPerView:  1,
//   paginationClickable: true,
//   spaceBetween:  1,
//   lazyLoading: true,
 

// });



// howTouseMobile.on('transitionEnd', function() {
//   console.log('*** mySwiper.realIndex', howTouseMobile.realIndex);
//   if(howTouseMobile.realIndex === 0){
//     $('#goprev').hide();

//   }else{
//     $('#goprev').show();
//   }
//   if(howTouseMobile.realIndex === 3){
//     $('#gonext').hide();

//   }else{
//     $('#gonext').show();
//   }
// });
 
// $('#gonext').click(function(e){

//   howTouseMobile.slideNext();
 
// });
// $('#goprev').click(function(e){

//   howTouseMobile.slidePrev();
 
// });

 


 


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


// fixing the placholder scrolled

$('.tnc-click').click(function(){
  $('.tnc').fadeIn();

  console.log("clicked");
})
$('.tnc-pp').click(function (){
 
  $('.tnc').fadeIn();
})
$('.tnc-close').click(function(){
  $('.tnc').hide("fast");
 
  console.log("out");
})

$('.tnc-mobile').hide();
$('.tnc-pp').click(function(){
  $('.tnc-mobile').show("slow");
})
$('#tnc-mobile-close').click(function(){
  $('.tnc-mobile').hide();
})


// mobile navigator
$(document).ready(function(){
  $('#slider-close').click(function(){
    $('.slider').removeClass('open')
  })
  $('#slider-open').click(function(){
    $('.slider').addClass('open')
 
  })
})


$('.fas').click(function(){
  if ($('fas').hasClass('fa-plus')){
 $('fa-plus').css('transform','rotate(90deg)','opacity, 0')
  } else if ($('fas').hasClass('fa-minus')){
    $('fa-minus').css('transform','rotate(90deg)','opacity, 0')
  }
  
})


// contact Form 

function handelEmail() {
  fetch("https://formsubmit.co/ajax/ahmd4obad@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
 
      Name: $("#name").val(),
      Last_Name :$('#last-name').val(),
      Telephone: $("#conatct").val(),
      Email: $("#email").val(),
 
      _subject: "New Contact from White Jelly Landing Page",
      _cc: "ahmd4obad@gmail.com",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.success === "true") {
        alert("thank you For your Subsucribtion")
      }
    })

    .catch((error) => alert("Something Wrong Happined Please try Again"));
}



$(window).resize(function(){
if ($( window ).height() <= 598){
  $('.contact-container').css('height','230vh');
  $('.image-of-vedio').css('width','34%')
}
})
