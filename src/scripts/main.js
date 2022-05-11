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
});
