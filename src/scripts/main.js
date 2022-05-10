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

  const sota = new ScrollObserver(".animate-title", callbackTextAnimation);
  const sotta = new ScrollObserver(".tween-animate-title", callbackTweenTextAnimation);
});
