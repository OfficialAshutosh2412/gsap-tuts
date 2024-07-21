gsap.from("nav .brand div", {
  stagger: 0.15,
  y: -50,
  x: -500,
  opacity: -10,
  duration: 2,
  delay: 0,
  ease: "sine.inOut",
  rotate: 5000,
  color: "white",
  scale: -20,
});
gsap.from(".menu", {
  duration: 2,
  x: 900,
  opacity: 0,
  ease: "back.out",
  delay: 0.5,
});
var open = document.querySelector(".menu");
var close = document.querySelector(".mobile-nav label");
var tl = gsap.timeline();
tl.pause();
tl.to(".mobile-nav", {
  right: "0%",
  duration: 0.1,
});
tl.from(".mobile-nav div", {
  x: 800,
  duration: 0.5,
  stagger: 0.2,
  ease: "circ.out",
});
tl.from(".mobile-nav label", {
  duration: 0.5,
  y: -100,
  ease: "circ.out",
  opacity: -5,
});

open.addEventListener("click", function () {
  tl.play();
});
close.addEventListener("click", function () {
  tl.reverse();
});
