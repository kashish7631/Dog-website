// nav bar 
let menulist = document.getElementById("menulist")
menulist.style.maxHeight = "0px";

function toggleMenu(){
  if(menulist.style.maxHeight == "0px")
  {
    menulist.style.maxHeight = "300px";
  }
  else{
    menulist.style.maxHeight = "0px";
  }
}
// nav bar end


// sider
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons =document.querySelectorAll(".slide-icon");

const numberOfSlides = slides.length;
var slideNumber = 0;

    //image slider next button
nextBtn.addEventListener("click", () =>{
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });
  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

    //image slider next button

    prevBtn.addEventListener("click", () =>{
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });
      slideNumber--;
    
      if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
      }
    
      slides[slideNumber].classList.add("active");
      slideIcons[slideNumber].classList.add("active");
    });
    

    // image slider auto play
    var playSlider;

    var repeater = () => {
      playSlider = setInterval(function(){
        slides.forEach((slide) => {
          slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
          slideIcon.classList.remove("active");
        });
        slideNumber++;
      
        if(slideNumber > (numberOfSlides - 1)){
          slideNumber = 0;
        }
      
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
      }, 4000);
    }
    repeater();

    // stop the image slider autoplay on mouseover
    slider.addEventListener("mouseover",() =>{
      clearInterval(playSlider);
    });

    slider.addEventListener("mouseout",() =>{
      repeater();
    });

// slider end


// clouse slider
document.addEventListener('DOMContentLoaded', () => {
  
  //------ Slider Begin
	const CaroS = document.querySelector('.Carousel-slider');
	const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
	const hammer = new Hammer(CaroS);
	const CaroSTimer = 2000;
	let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    
  //------- Mouseenter Event
	CaroS.onmouseenter = function(e) {
		clearInterval(CaroAutoplay); 
		console.log(e.type + ' mouse detected');
	}
  
  //----- Mouseleave Event
	CaroS.onmouseleave = function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' mouse detected');
	}
  
  //----- Mouseclick Event
	CaroS.onclick = function(e) {
		clearInterval(CaroAutoplay); 
		console.log(e.type + ' mouse detected');
	}
  
  //------ Gesture Tap Event
	hammer.on('tap', function(e) {
		clearInterval(CaroAutoplay);
		console.log(e.type + ' gesture detected');
	});
  
  //----- Gesture Swipe Event
	hammer.on('swipe', function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' gesture detected');
	});

  let slideLink = document.querySelectorAll('.slider-item');
  if (slideLink && slideLink !== null && slideLink.length > 0){
    slideLink.forEach( el => el.addEventListener('click', e => {
      e.preventDefault();
      let href = el.dataset.href;
      let target = el.dataset.target;
      if (href !== '#') window.open(href, target);
    }));
  }
  
  //---- Slider End
  
});

// clouser slider end


// review slider

var swiper = new Swiper(".review-slider", {
   loop:true,
  spaceBetween: 20,

  autoplay:{
    delay:7500,
    disableOnInteraction:false,
  },
  
 pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

// review slider