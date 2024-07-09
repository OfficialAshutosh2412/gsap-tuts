var tl = gsap.timeline();
tl.from(".brand", {
  y: -50,
  opacity: 0,
  duration: 0.5,
  delay: 0.3,
  scale: 1.2,
});

tl.from(".menu li", {
  y: -50,
  opacity: 0,
  duration: 0.7,
  delay: 0.3,
  scale: 1.2,
  stagger: 0.1,
});

tl.from(".name", {
  x: -500,
  duration: 1,
  delay: 0.1,
  opacity: 0,
});

tl.from(".surname", {
  y: -50,
  duration: 1.5,
  delay: 0,
  opacity: 0,
  scale: 1.7,
});
