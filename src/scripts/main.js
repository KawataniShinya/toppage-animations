document.addEventListener("DOMContentLoaded", function () {
  const hero = new HeroSlider(".swiper-container");
  hero.start();

  const callbackTextAnimation = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();
    }
  };

  const callbackTweenTextAnimation = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  };

  const soText = new ScrollObserver(".animate-title", callbackTextAnimation);
  const soTween = new ScrollObserver(".tween-animate-title", callbackTweenTextAnimation);
  


  const _inviewAnimation = function(el, inview) {
    if(inview) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  }

  const soInview = new ScrollObserver(".cover-slide", _inviewAnimation);

  const header = document.querySelector('.header')
  const _navAnimation = function(el, inview) {
    if(inview) {
      header.classList.remove('triggered');
    } else {
      header.classList.add('triggered');
    }
  }

  const soNav = new ScrollObserver(".nav-trigger", _navAnimation, {once: false});

  new MobileMenu();
});
