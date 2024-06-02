// Chuyển silde ảnh banner-main
const sildeswrap = document.querySelector('.wrap-slides');
const buttonleft = document.querySelector('.click-left');
const buttonright = document.querySelector('.click-right');

buttonright.addEventListener('click', () => {
    sildeswrap.classList.add('active');
});

buttonleft.addEventListener('click', () => {
    sildeswrap.classList.remove('active');
});


const slides = document.querySelector(".wrap-slides");  
const slideList = slides.querySelectorAll("img");

let currentSlide = 0;

function startSlideShow() {
  setInterval(() => {
    slides.classList.add("active");

    setTimeout(() => {
      currentSlide = (currentSlide + 1) % slideList.length;
      slides.classList.remove("active");
    }, 4000);

  }, 8000);

}

startSlideShow();



