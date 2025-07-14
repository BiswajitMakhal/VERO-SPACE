$(document).ready(function () {
    $("#nav-toggler").click(function () {
        $("#mobile-nav").slideToggle("slow");
    });
});

/* ========= Dual Price Slider (Top section) ========= */
const inputMin = document.getElementById("inputMin");
const inputMax = document.getElementById("inputMax");
const priceMinText = document.getElementById("priceMin");
const priceMaxText = document.getElementById("priceMax");
const fill = document.getElementById("fill");

function updateTopPriceSlider() {
    let minVal = parseInt(inputMin.value);
    let maxVal = parseInt(inputMax.value);

    if (minVal >= maxVal) {
        minVal = maxVal - 100;
        inputMin.value = minVal;
    }

    priceMinText.textContent = `$ ${minVal.toLocaleString()}`;
    priceMaxText.textContent = `$ ${maxVal.toLocaleString()}`;

    const range = inputMax.max - inputMin.min;
    const leftPercent = ((minVal - inputMin.min) / range) * 100;
    const rightPercent = ((maxVal - inputMin.min) / range) * 100;

    fill.style.left = `${leftPercent}%`;
    fill.style.width = `${rightPercent - leftPercent}%`;
}

inputMin.addEventListener("input", updateTopPriceSlider);
inputMax.addEventListener("input", updateTopPriceSlider);
window.addEventListener("load", updateTopPriceSlider);


/* ========= Square Feet Slider (Sidebar) ========= */
const sqftMin = document.getElementById("sqft-min");
const sqftMax = document.getElementById("sqft-max");
const sqftMinLabel = document.getElementById("min-label");
const sqftMaxLabel = document.getElementById("max-label");

function updateSqftSlider() {
    let minVal = parseInt(sqftMin.value);
    let maxVal = parseInt(sqftMax.value);

    if (minVal > maxVal - 100) sqftMin.value = maxVal - 100;
    if (maxVal < minVal + 100) sqftMax.value = minVal + 100;

    sqftMinLabel.textContent = `${sqftMin.value} sqft.`;
    sqftMaxLabel.textContent = `${sqftMax.value} sqft.`;

    const minPercent = (sqftMin.value - sqftMin.min) / (sqftMin.max - sqftMin.min);
    const maxPercent = (sqftMax.value - sqftMax.min) / (sqftMax.max - sqftMax.min);

    sqftMinLabel.style.left = `calc(${minPercent * 100}% - 30px)`;
    sqftMaxLabel.style.left = `calc(${maxPercent * 100}% - 30px)`;
}

sqftMin.addEventListener("input", updateSqftSlider);
sqftMax.addEventListener("input", updateSqftSlider);
window.addEventListener("load", updateSqftSlider);


/* ========= Price Range (Sidebar) ========= */
const priceMin2 = document.getElementById("price-min");
const priceMax2 = document.getElementById("price-max");
const priceMinLabel2 = document.getElementById("price-min-label");
const priceMaxLabel2 = document.getElementById("price-max-label");

function formatCurrency(value) {
    return `$${parseInt(value).toLocaleString()}`;
}

function updateSidebarPriceSlider() {
    let minVal = parseInt(priceMin2.value);
    let maxVal = parseInt(priceMax2.value);

    if (minVal > maxVal - 1000) priceMin2.value = maxVal - 1000;
    if (maxVal < minVal + 1000) priceMax2.value = minVal + 1000;

    priceMinLabel2.textContent = formatCurrency(priceMin2.value);
    priceMaxLabel2.textContent = formatCurrency(priceMax2.value);

    const minPercent = (priceMin2.value - priceMin2.min) / (priceMin2.max - priceMin2.min);
    const maxPercent = (priceMax2.value - priceMax2.min) / (priceMax2.max - priceMax2.min);

    priceMinLabel2.style.left = `calc(${minPercent * 100}% - 30px)`;
    priceMaxLabel2.style.left = `calc(${maxPercent * 100}% - 30px)`;
}

priceMin2.addEventListener("input", updateSidebarPriceSlider);
priceMax2.addEventListener("input", updateSidebarPriceSlider);
window.addEventListener("load", updateSidebarPriceSlider);


/* ========= Swiper Sliders ========= */
const swiper = new Swiper('#explore-swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const tabletSwiper = new Swiper('#tablet-swiper', {
    direction: 'horizontal',
    slidesPerView: 4,
    loop: true,
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
