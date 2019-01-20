document.addEventListener('scroll',function(){
  var scrolled = false;
  if(document.documentElement.scrollTop < 10 ) {
    document.documentElement.classList.remove('scrolled');
    scrolled = false;
  }
  else if(!scrolled) {
    document.documentElement.classList.add('scrolled');
    scrolled = true;
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

document.addEventListener('DOMContentLoaded',function(){

  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

    var aos = {
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 400,
      disable: !1,
      once: !1,
      startEvent: "DOMContentLoaded"
    };

    document.body.classList.add('aos');
    document.body.setAttribute("data-aos-easing", aos.easing),
    document.body.setAttribute("data-aos-duration", aos.duration);
    document.body.setAttribute("data-aos-delay", aos.delay);

    var options = {
      threshold: [0,.25,.5,.75],
      rootMargin: '30px 30px'
    };

    var aos = document.querySelectorAll("[data-aos]");

    var callback =  function(entries, observer) {
      entries.forEach(entry => {
        if(entry.intersectionRatio >= .5) {
          entry.target.classList.add('aos-animate');
        }
        else if(entry.intersectionRatio == 0) {
          entry.target.classList.remove('aos-animate');
        }
      });
    }

    var observer = new IntersectionObserver(callback, options);

    aos.forEach(image => {
      observer.observe(image);
    });
  }
  
});

