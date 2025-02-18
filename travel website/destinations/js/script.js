// Theme toggle functionality with localStorage
let themeBtn = document.querySelector('#theme-btn');

// Check for saved theme preference
if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('active');
    themeBtn.classList.add('fa-sun');
}

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');
    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('active');
        localStorage.setItem('theme', 'light');
    }
};

// Initialize image gallery slider
var swiper = new Swiper(".gallery-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    speed: 1000,
    effect: "slide",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Add custom navigation
    navigation: {
        nextEl: '.gallery-nav-btn.next',
        prevEl: '.gallery-nav-btn.prev',
    },
});

// Add hover effect for navigation buttons
const navBtns = document.querySelectorAll('.gallery-nav-btn');
navBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        swiper.autoplay.stop();
    });
    btn.addEventListener('mouseleave', () => {
        swiper.autoplay.start();
    });
}); 