
// Aos cdn//
AOS.init();
//------------------------------- MODAL PAGE--------------------------------------------// 
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");

document.getElementById("openLogin-2").onclick = () => loginModal.style.display = "block";
document.getElementById("openLogin").onclick = () => loginModal.style.display = "block";
document.getElementById("closeLogin").onclick = () => loginModal.style.display = "none";
document.getElementById("closeRegister").onclick = () => registerModal.style.display = "none";

window.onclick = (e) => {
  if (e.target === loginModal) loginModal.style.display = "none";
  if (e.target === registerModal) registerModal.style.display = "none";
};
// Switch from login to register
document.getElementById("openRegisterFromLogin").onclick = (e) => {
  e.preventDefault();
  loginModal.style.display = "none";
  registerModal.style.display = "block";
};

// Optional: Handle login/register form submit
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Logged in!");
  loginModal.style.display = "none";
});

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Registered successfully!");
  registerModal.style.display = "none";
});

// HAMBURGER TOGGLE//

$(document).ready(function () {
  $('#nav-toggler').click(function () {
    $('#mobile-nav').addClass('active');
    $('#overlay').addClass('active');
  });

  $('#nav-close, #overlay').click(function () {
    $('#mobile-nav').removeClass('active');
    $('#overlay').removeClass('active');
  });
});



/* ---------- price slider ---------- */
const inputMin = document.getElementById("inputMin");
const inputMax = document.getElementById("inputMax");
const priceMin = document.getElementById("priceMin");
const priceMax = document.getElementById("priceMax");
const fill = document.getElementById("fill");

function updateSlider() {
  let minVal = parseInt(inputMin.value);
  let maxVal = parseInt(inputMax.value);

  if (minVal >= maxVal) {
    minVal = maxVal - 100;
    inputMin.value = minVal;
  }

  priceMin.textContent = `$ ${minVal.toLocaleString()}`;
  priceMax.textContent = `$ ${maxVal.toLocaleString()}`;

  const range = inputMax.max - inputMin.min;
  const leftPercent = ((minVal - inputMin.min) / range) * 100;
  const rightPercent = ((maxVal - inputMin.min) / range) * 100;

  fill.style.left = `${leftPercent}%`;
  fill.style.width = `${rightPercent - leftPercent}%`;
}

inputMin.addEventListener("input", updateSlider);
inputMax.addEventListener("input", updateSlider);

updateSlider();

// Live Conting//
const SPEED = 200;   // smaller = faster (affects step size)

const io = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const targetK = +counter.dataset.target;   // value in thousands (e.g., 15)

      const update = () => {
        // Extract numeric part (strip non‑digits) and default to 0
        const displayedK = +counter.innerText.replace(/\D/g, '') || 0;
        const step = Math.ceil(targetK / SPEED); // increment in thousands

        if (displayedK < targetK) {
          counter.innerText = displayedK + step + 'K+';
          requestAnimationFrame(update);
        } else {
          counter.innerText = targetK + 'K+';    // lock final value
          io.unobserve(counter);                 // stop watching
        }
      };

      update();
    });
  },
  { threshold: 0.15 }   // start when ~15 % visible
);

// Observe every counter element on the page
document.querySelectorAll('.counter').forEach(el => io.observe(el));


// Swiper-Explorer//
const swiper = new Swiper('#explore-swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 4,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    947: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1225: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
// Testimonial swiper//
const Testimonial = new Swiper('#testimonial-swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
  },
});


