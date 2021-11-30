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

jQuery(document).ready(function ($) {
  var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww < 964) {
      $('.nav-listitem').addClass('disable');
      $('.nav-dropdown li').addClass('disable');
    } else if (ww >= 964) {
      $('.nav-listitem').removeClass('disable');
      $('.nav-dropdown li').removeClass('disable');
    }
  };
  $(window).resize(function () {
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});

const navItems = document.querySelectorAll('.nav-listitem');

function removeShow(arr, item) {
  arr.forEach((element) => {
    if (element !== item) {
      element.classList.remove('show');
    }
  });
}

function removeRotate(arr, item) {
  arr.forEach((element) => {
    if (element !== item) {
      element.classList.remove('rotate');
    }
  });
}

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    removeShow(navItems, item);
    item.classList.toggle('show');

    removeRotate(navItems, item);
    item.classList.toggle('rotate');
  });
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

navSlide();

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => nav.classList.remove('burger-active'));

//Get the button:
mybutton = document.getElementById('top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.transform = 'scale(1)';
  } else {
    mybutton.style.transform = 'scale(0)';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
