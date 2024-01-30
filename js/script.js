// AOS.init();
var acc = document.getElementsByClassName("accordion-header");
var i;
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
  TweenMax.to($cursor, 0.4, {
    "--x": `${e.pageX - 316}px`,
    "--y":  `${e.pageY - 316}px`,
  });
}

function onMouseHover(e) {
  TweenMax.to($cursor, 0.4, {
    "--x": `${e.pageX - 316}px`,
    "--y":  `${e.pageY - 316}px`,
    "--size": "160px",
    "--sizesd": "160px",
  });
}

function onMouseHoverOut(e) {
  TweenMax.to($cursor, 0.4, {
    "--x": `${e.pageX - 316}px`,
    "--y":  `${e.pageY - 316}px`,
    "--size": "31px",
  });
}

const moreAccordion=document.querySelector(".more-accordion");
const accordionHidden=document.querySelector(".accordion-hidden")

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
  autoplay: {
    delay: 1500,
  },
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
    // when window width is >= 640px
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper3 = new Swiper(".our-work-home-slider", {
  speed:10000,
autoplay: {
    delay: 0,
    disableOnInteraction: true,
    
},
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
    // when window width is >= 640px
  },
  loop: true,
  // Infinity:true
  
});
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
    modal.style.display = "flex";
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
    modal.style.display = "flex";
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
