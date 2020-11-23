let carouselInner = document.querySelector('.carousel-container-inner');
let carousels = document.querySelectorAll('.carousel-item');
let totalCarousel = carousels.length;
let carouselWidth = carousels[0].clientWidth;
let currentSlide = carouselWidth*1;
let allCarouselWidth = carouselWidth*totalCarousel-currentSlide;
let singleScroll = carouselInner.clientWidth;
let timeForChangeSlide = 3000;
let carouselRotation = 0;
let carouselRotate=(e)=>{
    carouselRotation += (-carouselWidth);
    carouselRotation = carouselRotation<(-allCarouselWidth)?0:carouselRotation;
    carouselInner.style.transform="translate3d("+(carouselRotation)+"px,0px,0px)";
    console.log(carouselWidth);
}
setInterval(carouselRotate,timeForChangeSlide);