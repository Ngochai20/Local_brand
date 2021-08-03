const swiper = new Swiper(".swiper-container", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 5
        },
    }
});

let rightTitle = document.querySelector('.right-title');
rightTitle.innerHTML = rightTitle.textContent.replace(/\S/g, '<span class="letter">$&</span>');

const tl = gsap.timeline();
tl.from('.left-bg', 1.5, { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', ease: "power2.out" });
tl.from('.left-icon', .1, { opacity: 0},'-=.5');
tl.staggerFrom('.left-icon a', .2, { opacity: 0, skewX: 20, x: -20 }, .05, '-=.5');
tl.to('.left-line', 1, { clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)', ease: "back.out(1.7)" });
tl.from('.left-avt', 1, { opacity: 0, scale: 0, ease: "back.out(1.7)" }, '-=1');

tl.from('.right-content', 1.2, { opacity: 0, x: 70, skewX: -20, ease: "back.out(1.7)" }, '-=2');
tl.from('.right-address', 1.2, { opacity: 0, skewX: -50, x: 50, ease: "back.out(1.7)" }, '-=1');
tl.to('.right-title .letter', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: 0.06 }, '-=1');
tl.from('.detail-txt-ft', .8, { opacity: 0, y: 50, ease: "back.out(1.7)" }, '-=1');
tl.from('.detail-slide', 1, { opacity: 0, scale: 0, ease: "back.out(1.7)" }, '-=1');

let rightAddress = document.querySelector('.right-address');
let lordIcon = document.querySelector('.lord-icon')
rightAddress.addEventListener('mouseover', () => {
    lordIcon.setAttribute('trigger', 'loop');
    setTimeout(() => {
        lordIcon.removeAttribute('trigger');
    }, 5000);
})