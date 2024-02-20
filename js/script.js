// AOS.init();
var acc = document.getElementsByClassName("accordion-header");
var i;


document.onreadystatechange = function() {
  var state = document.readyState
  console.log(state)
  if (state == 'complete') {
    console.log("ssss")
    const loader= document.querySelector('.loader')
    if(loader){
       loader.remove()
    }
    
  }
};







const $cursor = document.querySelector(".ddfsasdsdaiv");
const $hover = document.querySelectorAll(".main-heading span");

if ($hover.length) {
  document.body.addEventListener("mousemove", onMouseMove);
  for (let i = 0; i < $hover.length; i++) {
    $hover[i].addEventListener("mouseenter", onMouseHover);
    $hover[i].addEventListener("mouseleave", onMouseHoverOut);
  }
}


function onMouseMove(e) {
  let x = e.pageX - 170;
  let y = e.pageY - 270;
  let ratio = window.devicePixelRatio;
  let zoom = 1 / document.documentElement.clientWidth * window.innerWidth;
  TweenMax.to($cursor, 0.4, {
    "--x": `${x * ratio * zoom}px`,
    "--y": `${y * ratio * zoom}px`,
  });
}

function onMouseHover(e) {
  let x = e.pageX - 170;
  let y = e.pageY - 270;
  let ratio = window.devicePixelRatio;
  let zoom = 1 / document.documentElement.clientWidth * window.innerWidth;
  TweenMax.to($cursor, 0.4, {
    "--x": `${x * ratio * zoom}px`,
    "--y": `${y * ratio * zoom}px`,
    "--size": "160px",
    "--sizesd": "160px",
  });
}

function onMouseHoverOut(e) {
  //reset the size of the circle to the original value
  TweenMax.to($cursor, 0.4, {
    "--size": "0px",
    "--sizesd": "0px",
  });
}
const moreAccordion=document.querySelector(".more-accordion");
const accordionHidden=document.querySelector(".accordion-hidden")

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    console.log(this.nextElementSibling);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.borderWidth = "0px";
      panel.style.marginBottom = "0px";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.borderWidth = "1px";
      panel.style.marginBottom = "20px";
    }
  });
}


if(moreAccordion){
  moreAccordion.addEventListener("click",function(){
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      accordionHidden.classList.remove("active");
    } else {
      this.classList.add("active");
      accordionHidden.classList.add("active");
    }
  
  })
}


// var swiper = new Swiper(".brands-slider", {
//   slidesPerView: 5,
//   autoplay: {
//     delay: 2000,
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 60,
//     },
//     420: {
//       slidesPerView: 3,
//       spaceBetween: 60,
//     },
//     // when window width is >= 480px
//     640: {
//       slidesPerView: 4,
//       spaceBetween: 80,
//     },
//     // when window width is >= 640px
//     1040: {
//       slidesPerView: 5,
//       spaceBetween: 100,
//     },
//   },
//   loop: true,
//   spaceBetween: 20,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
// var swiper2 = new Swiper(".brands-slider-2", {
//   slidesPerView: 5,
//   autoplay: {
//     delay: 1500,
//     reverseDirection: true,
//   },

//   loop: true,

//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 60,
//     },
//     420: {
//       slidesPerView: 3,
//       spaceBetween: 60,
//     },
//     // when window width is >= 480px
//     640: {
//       slidesPerView: 4,
//       spaceBetween: 80,
//     },
//     // when window width is >= 640px
//     1040: {
//       slidesPerView: 5,
//       spaceBetween: 100,
//     },
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
var swiper3 = new Swiper(".client-slider", {
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    560: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    860: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    // when window width is >= 640px
  },
  loop: true,
  Infinity,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


jQuery(document).ready(function($) {
  $('.slick.marquee').slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnHover:true
  });
});

jQuery(document).ready(function($) {
  $('.slick.marquee2').slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnHover:true
  });
});
// var swiper3 = new Swiper(".our-work-home-slider", {
//   slidesPerView: 1, // Adjust this number based on the desired number of slides to be visible at a time
//   spaceBetween: 0,
//   loop:true,
//   autoplay: {
//   delay: 1, 
//   disableOnInteraction: false, 
// },
// slidesPerView: 'auto',
// speed: 3000,
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     560: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     // when window width is >= 480px
//     860: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//     // when window width is >= 640px
//   },
//   loop: true,
//   // Infinity:true
  
// });
// var swiper3 = new Swiper(".team-slider", {
//   autoplay: {
//     delay: 1500,
//   },
//   centeredSlides: true,
//   roundLengths: true,
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//     },
//     480: {
//       slidesPerView: 2,
//     },
//     560: {
//       slidesPerView: 3,
//     },
//     // when window width is >= 480px
//     1040: {
//       slidesPerView: 5,
//     },
//     // when window width is >= 640px
//   },
//   loop: true,
//   navigation: {
//     nextEl: ".team-slider-next",
//     prevEl: ".team-slider-prev",
//   },
// });

var swiper = new Swiper(".career-swiper", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".career-swiper-pagination",
    clickable: true,
  },
  autoplay: {
        delay: 4500,
      },
      centeredSlides: true,
      roundLengths: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var modal = document.getElementById("myModal");
var modalCareer = document.getElementById("myModalCareer");
let getStartInput=document.querySelector(".gstd input");
let getStartBtn=document.querySelector(".gstd button");
// Get the button that opens the modal
var btn = document.querySelectorAll(".myBtn");
var btnCareer = document.querySelectorAll(".myBtnCareer");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var spanCareer;
if(modalCareer){
 spanCareer = modalCareer.querySelector(".close");

}
if(getStartBtn){
  getStartBtn.onclick = function (e) {
    modal.querySelector("input[name=email]").value=getStartInput.value
    e.preventDefault();
    // modal.style.display = "flex";
    window.location.href="/bookacall.html"

  };
}
if(btnCareer.length){
  btnCareer.forEach(btn_element=>{
    btn_element.onclick = function (e) {
      e.preventDefault();
      modalCareer.style.display = "flex";
    };
    
  })
}
// When the user clicks on the button, open the modal
btn.forEach(btn_element=>{
  btn_element.onclick = function (e) {
    e.preventDefault();
    // modal.style.display = "flex";
    window.location.href="/bookacall.html"
  };
  
})
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

if(spanCareer){
  spanCareer.onclick = function () {
    modalCareer.style.display = "none";
  };
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if(event.target==modalCareer){
    modalCareer.style.display = "none";
    
  }
};


const dropBtnStart=document.querySelectorAll(".drop-form button")


if(dropBtnStart.length){

  dropBtnStart.forEach(v=>{
    v.onclick = function (){
      const dropinputEmail=this.previousElementSibling
      localStorage.setItem("write_email",dropinputEmail.value)
    window.location.href="/bookacall.html"

    }
  })
}


const video = document.querySelector('.video')
const videoPlaybtn = document.querySelector('.video-play')

if (video&&videoPlaybtn) {
  videoPlaybtn.onclick= function(e){
    video.currentTime = 0; // Set video to start
    video.play();
    videoPlaybtn.remove()
  }
}