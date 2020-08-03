let controller;
let slideScene;

function animateSlides() {
  // init controller
  controller = new ScrollMagic.Controller();
  // select some things
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector("nav");
  sliders.forEach((slide, index, slides) => {
    const revealImg = slide.querySelector(".reveal-img");
    //gsap - slideTl
    const slideTl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slideTl.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    //slideTl.fromTo(mainHeader, { y: "-100%" }, { y: "0%" }, "-=0.5");
    // Create Scene Scroll Animation
    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.8,
    })
      //.addIndicators({
      //  colorStart: "black",
      //  colorTrigger: "black",
      //  name: "slide",
      //})
      .setTween(slideTl)
      .addTo(controller);
  });
}
animateSlides();

//get rid of anchor at url
$(document).ready(function () {
  const menuBtn = $("a");

  menuBtn.click(() => {
    setTimeout(() => {
      removeHash();
    }, 5);
  });

  function removeHash() {
    history.replaceState(
      "",
      document.title,
      window.location.origin + window.location.pathname + window.location.search
    );
  }
});
