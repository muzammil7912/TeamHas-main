AOS.init();
var acc = document.getElementsByClassName("accordion-header");
var i;

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

var swiper = new Swiper(".brands-slider", {
  slidesPerView: 5,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    420: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
    // when window width is >= 640px
    1040: {
      slidesPerView: 5,
      spaceBetween: 100,
    },
  },
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper2 = new Swiper(".brands-slider-2", {
  slidesPerView: 5,
  autoplay: {
    delay: 1500,
    reverseDirection: true,
  },

  loop: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    420: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
    // when window width is >= 640px
    1040: {
      slidesPerView: 5,
      spaceBetween: 100,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
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
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function (e) {
  e.preventDefault();
  modal.style.display = "flex";
};

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
