$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 25,
  nav: false,
  responsive: {
    100: {
      items: 1,
    },
    600: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

const carouselSlide = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumb');

function removeActive(arr) {
  arr.forEach((item) => item.classList.remove('active'));
}

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    removeActive(thumbnails);
    thumb.classList.add('active');
    showSlide(index);
  });
});

let counter = 0;
const size = slides[0].clientWidth;

function showSlide(index) {
  console.log(size * index);
  counter = index;
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
}

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

const navSlide = () => {
  burger.addEventListener('click', () => {
    nav.style.opacity = '1';
    nav.classList.toggle('burger-active');
  });
};

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => nav.classList.remove('burger-active'));

navSlide();
