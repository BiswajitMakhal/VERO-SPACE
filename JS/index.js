$(document).ready(function () {
  $("#nav-toggler").click(function () {
    $("#mobile-nav").slideToggle("slow");
  });
});



/* ---------- price slider ---------- */
(function () {
  const wrap = document.getElementById('price-slider');
  if (!wrap) return;                       // bail out if slider not on page

  const minInput = document.getElementById('inputMin');
  const maxInput = document.getElementById('inputMax');
  const fill = document.getElementById('fill');
  const badgeMin = document.getElementById('priceMin');
  const badgeMax = document.getElementById('priceMax');
  const maxVal = +minInput.max;          // 20000

  const fmt = v => '$\u202F' + (+v).toLocaleString(); // narrow‑NBSP after $

  function update() {
    /* keep thumbs from crossing */
    if (+minInput.value > +maxInput.value) {
      [minInput.value, maxInput.value] = [maxInput.value, minInput.value];
    }

    const pctMin = (minInput.value / maxVal) * 100;
    const pctMax = (maxInput.value / maxVal) * 100;

    /* fill bar */
    fill.style.left = pctMin + '%';
    fill.style.width = (pctMax - pctMin) + '%';

    /* badges */
    const w = wrap.clientWidth;
    badgeMin.style.left = (pctMin / 100 * w) + 'px';
    badgeMax.style.left = (pctMax / 100 * w) + 'px';
    badgeMin.textContent = fmt(minInput.value);
    badgeMax.textContent = fmt(maxInput.value);
  }

  update();
  [minInput, maxInput].forEach(i => i.addEventListener('input', update));
  window.addEventListener('resize', update);
})();

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
    1200: {
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


