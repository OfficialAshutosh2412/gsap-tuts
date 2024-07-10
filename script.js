gsap.to(".box1", {
  x: 1400,
  y: 900,
  duration: 10,
  delay: 1,
  rotate: 6520,

  backgroundColor: "blue",
  border: 5,
  borderColor: "pink",
  scale: 1,
  repeat: -1,
  yoyo: true,
});
gsap.to(".box2", {
  x: 800,
  duration: 20,
  delay: 1,
  rotate: 9990,
  backgroundColor: "cyan",
  border: 5,
  borderColor: "pink",
  scale: 1.1,
  repeat: -1,
  yoyo: true,
  scale: 5,
});
gsap.to(".box3", {
  x: 1000,
  duration: 12,
  delay: 1,
  rotate: 11000,
  backgroundColor: "yellow",
  border: 5,
  borderColor: "pink",
  scale: 3,
  repeat: -1,
  yoyo: true,
});

gsap.to("h1", {
  x: -200,
  stagger: 1,
  duration: 3,
  repeat: -1,
  yoyo: true,
});
