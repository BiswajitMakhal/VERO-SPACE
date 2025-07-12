$(document).ready(function () {
    $("#nav-toggler").click(function () {
        $("#mobile-nav").slideToggle("slow");
    });
});

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




// Team section//
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
        1270: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});