// page s


const images = [
    './image/image 2.webp',
    './image/nav-1.webp',
    './image/g.png'
];

let current = 0;
const slide = document.getElementById('slide');

function show() {
    slide.style.opacity = 0;
    setTimeout(() => {
        slide.src = images[current];
        slide.style.opacity = 1;
    }, 200);
}

function next() {
    current = (current + 1) % images.length;
    show();
}

function prev() {
    current = (current - 1 + images.length) % images.length;
    show();
}


// read 

var know = document.getElementById("know")
know.addEventListener("click", function () {

    document.querySelector(".para").style.display = "inline"
    document.querySelector(".know").style.display = "none"

})

var less = document.getElementById("less")
less.addEventListener("click", function () {

    document.querySelector(".para").style.display = "none"
    document.querySelector(".know").style.display = "inline"
})


// inage

function scrollLeft() {
    const container = document.getElementById('scroll-container');
    container.scrollBy({
        left: -300, // adjust scroll distance
        behavior: 'smooth'
    });
}

function scrollRight() {
    const container = document.getElementById('scroll-container');
    container.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

setInterval(() => {
    document.getElementById('scroll-container').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}, 3000); // every 1 seconds


// announcement

const scrollText = document.getElementById('scrolling-text');
let position = window.innerWidth;

function scrollMarquee() {
    position -= 1;
    if (position < -scrollText.offsetWidth) {
        position = window.innerWidth;
    }
    scrollText.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(scrollMarquee);
}

scrollMarquee();

//   perfume s

function showSection(sectionId) {
    const sections = ['art'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (id === sectionId) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });
}
function showSection(sectionId) {
    const sections = ['perfume'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (id === sectionId) {
            el.classList.remove('add');
        } else {
            el.classList.add('add');
        }
    });
}





// searc menu
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const searchBox = document.getElementById("searchBox");

menuBtn.addEventListener("click", () => {
    searchBox.classList.remove("hidden");
    menuBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
});


closeBtn.addEventListener("click", () => {
    searchBox.classList.add("hidden");
    menuBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
});

// searcc a

const btn = document.getElementById('searchBtn');
const alertMsg = document.getElementById('alertMsg');

btn.addEventListener('click', () => {
    alertMsg.classList.remove('hidden');

    // Hide alert after 3 seconds
    setTimeout(() => {
        alertMsg.classList.add('hidden');
    }, 3000);
});




// Show first banner on load
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById("banner1").classList.remove("right-[-100%]");
        document.getElementById("banner1").classList.add("right-5");
    }, 600);
});

// Show second banner, hide first
function showBanner2() {
    const b1 = document.getElementById("banner1");
    const b2 = document.getElementById("banner2");
    b1.classList.remove("right-5");
    b1.classList.add("right-[-100%]");

    setTimeout(() => {
        b2.classList.remove("right-[-100%]");
        b2.classList.add("right-5");
    }, 300);
}

// Dismiss all banners
function dismissAll() {
    document.getElementById("banner1").classList.add("right-[-100%]");
    document.getElementById("banner1").classList.remove("right-5");
    document.getElementById("banner2").classList.add("right-[-100%]");
    document.getElementById("banner2").classList.remove("right-5");
}

// product

const container = document.getElementById('productContainer');
const scrollAmount = 300;

document.getElementById('scrollLeft').addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

document.getElementById('scrollRight').addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

window.addEventListener("DOMContentLoaded", function () {
    const isHome = window.location.pathname === "/" || window.location.pathname.includes("index.html");

    // Detect if this is NOT a reload (type === "reload")
    const navType = performance.getEntriesByType("navigation")[0]?.type;

    if (isHome && navType === "navigate" && !sessionStorage.getItem("bannerShown")) {
        setTimeout(() => {
            const banner = document.getElementById("banner1");
            banner.classList.remove("right-[-100%]");
            banner.classList.add("right-5");

            sessionStorage.setItem("bannerShown", "true");
        }, 600);
    }
});

// review

const slider = document.getElementById('slider');
const totalSlides = slider.children.length;
let currentIndex = 0;

function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Slide every 3 seconds
setInterval(autoSlide, 3000);


