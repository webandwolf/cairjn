// PARALLAX ELEMENTS

// Hero Image
window.addEventListener('scroll', function () {
    const element = document.querySelector('.hero-image');
    let scrollPosition = window.pageYOffset;

    element.style.transform = 'translateY(' + scrollPosition * .1 + 'px)';
});

// Hero Cairjn Logo
window.addEventListener('scroll', function () {
    const element = document.querySelector('.hero-cairjn-logo-parallax');
    let scrollPosition = window.pageYOffset;

    element.style.transform = 'translateY(' + scrollPosition * .15 + 'px)';
});

// Hero Text
window.addEventListener('scroll', function () {
    const element = document.querySelector('.hero-text-parallax');
    let scrollPosition = window.pageYOffset;

    element.style.transform = 'translateY(' + scrollPosition * .05 + 'px)';
});

// Left Hero
window.addEventListener('scroll', function () {
    const element = document.querySelector('.left-hero');
    let scrollPosition = window.pageYOffset;

    element.style.transform = 'translateY(' + scrollPosition * .1 + 'px)';
});

// Bottles Desktop
window.addEventListener('scroll', function () {
    const element = document.querySelector('.bottles-desktop');
    let scrollPosition = window.pageYOffset;

    element.style.transform = 'translateY(' + scrollPosition * .05 + 'px)';
});

// Bottles Mobile
window.addEventListener('scroll', function () {
    const element = document.querySelector('.bottles-mobile');
    let scrollPosition = window.pageYOffset;

    element.style.transform = 'translateY(' + scrollPosition * .05 + 'px)';
});


// About Image
window.addEventListener('scroll', function () {
    const element = document.querySelector('.about-block-image');
    let scrollPosition = window.pageYOffset;

    element.style.transform = 'translateY(' + scrollPosition * .01 + 'px)';
});

// Coloured Box 2
window.addEventListener('scroll', function () {
    const element = document.querySelector('.coloured-box-2-parallax');
    let scrollPosition = window.pageYOffset;

    element.style.transform = 'translateY(' + scrollPosition * -.03 + 'px)';
});

// Coloured Box 2
window.addEventListener('scroll', function () {
    const element = document.querySelector('.about-text-parallax');
    let scrollPosition = window.pageYOffset;

    element.style.transform = 'translateY(' + scrollPosition * .05 + 'px)';
});
