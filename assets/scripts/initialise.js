document.addEventListener('scroll',function(){
  if(document.documentElement.scrollTop > 10) {
    document.documentElement.classList.add('scrolled');
  }
  else {
    document.documentElement.classList.remove('scrolled');
  }
});


document.addEventListener('DOMContentLoaded',function(){
  var sliderImagesLoaded = 0;
  var sliderImages = document.querySelectorAll('#hero-image-slider img');
  var ldLoaded = false;

  function imageLoaded(image){
    sliderImagesLoaded++;
    console.log('image loaded');
    if(sliderImagesLoaded >= sliderImages.length && ldLoaded == false) {
      // sliderImages.forEach(image => {
      //   image.removeEventListener('load',imageLoaded());
      // });
      ldLoaded = true;
      document.documentElement.scrollTop = -100;
      setTimeout(function(){
        document.documentElement.classList.remove('js-loading');
        document.documentElement.scrollTop = -100;
        simpleslider.getSlider({
          container: document.getElementById('hero-image-slider'),
          prop: 'opacity',
          init: 0,
          show: 1,
          end: 0,
          unit: '',
          duration: 1
        });
      },4000);
    }
  }
  document.documentElement.classList.add('js-loading');
  sliderImages.forEach(image => {
    image.addEventListener('load',imageLoaded(image));
  });
});

