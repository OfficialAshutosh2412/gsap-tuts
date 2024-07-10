gsap.registerPlugin(ScrollTrigger);
gsap.from(".tc #f", {
  x: -300,
  duration: 2,
  delay: 0.5,
  opacity: 0,
});
gsap.from(".tc #s", {
  y: -300,
  duration: 1,
  delay: 1.5,
  opacity: 0,
  scale: 1.5,
});
gsap.to(".container h1", {
  transform: "translateX(-50%)",
  scrollTrigger: {
    trigger: ".container",
    scroller: "body",
    markers: true,
    start: "top top",
    end: "top -100%",
    scrub: 4,
    pin: true,
  },
});
