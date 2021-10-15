function scrollNav() {
  const nav = document.querySelector(".navbar-custom");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) nav.classList.add("scroll-nav");
  else nav.classList.remove("scroll-nav");
}
window.addEventListener("scroll", scrollNav);

/* Card Slider - Swiper */
var cardSlider = new Swiper(".card-slider", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    // when window is <= 992px
    992: {
      slidesPerView: 2,
    },
    // when window is <= 768px
    768: {
      slidesPerView: 1,
    },
  },
});

/**
 * Porfolio isotope and filter
 */

window.addEventListener("load", () => {
  let portfolioContainer = document.querySelector(".portfolio-container");
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    let portfolioFilters = document.querySelectorAll(
      "#portfolio-flters li",
      true
    );
    document.querySelectorAll("#portfolio-flters li").forEach((item) =>
      item.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          item.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: item.getAttribute("data-filter"),
          });
        },
        true
      )
    );
  }
});

/**
 * Initiate portfolio lightbox
 */
const portfolioLightbox = GLightbox({
  selector: ".portfokio-lightbox",
});

/*---------counter---------------*/
const counters = document.querySelectorAll(".number-count");
const speed = 100;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute("data-count"));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
/*-------------SCROLL UP----------------*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*---------------SCROLL SECTIONS ACTIVE LINK------------------*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar-nav a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navbar-nav a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/**
 * Animation on scroll
 */
// Init AOS
function aos_init() {
  AOS.init({
    duration: 1000,
    once: true,
  });
}
window.addEventListener("load", () => {
  aos_init();
});
