AOS.init();
var acc = document.getElementsByClassName("accordion-header");
var i;
const $cursor = document.querySelector('.cursor__circle');
const $hover = document.querySelectorAll('.main-heading');


if($hover.length){
  $hover[0].addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hover.length; i++) { $hover[i].addEventListener('mouseenter', onMouseHover); $hover[i].addEventListener('mouseleave', onMouseHoverOut);
}
}

function onMouseMove(e) {
  TweenMax.to($cursor, .4, {
    x: e.pageX - 16,
    y: e.pageY - 16
  })
}


function onMouseHover() {
  TweenMax.to($cursor, .4, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to($cursor, .4, {
    scale: 0
  })
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
var swiper3 = new Swiper(".team-slider", {
  autoplay: {
    delay: 1500,
  },
  centeredSlides: true,
  roundLengths: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    560: {
      slidesPerView: 3,
    },
    // when window width is >= 480px
    1040: {
      slidesPerView: 5,
    },
    // when window width is >= 640px
  },
  loop: true,
  navigation: {
    nextEl: ".team-slider-next",
    prevEl: ".team-slider-prev",
  },
});
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelectorAll(".myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
