gsap.to(".box1", {
  x: 1400,
  y: 900,
  duration: 10,
  delay: 1,
  rotate: 6520,

  backgroundColor: "black",
  border: 5,
  borderColor: "white",
  scale: 1,
  repeat: -1,
  yoyo: true,
});
gsap.to(".box2", {
  x: 800,
  duration: 20,
  delay: 3,
  rotate: 9990,
  backgroundColor: "black",
  border: 5,
  borderColor: "white",
  scale: 1.1,
  repeat: -1,
  yoyo: true,
  scale: 2,
});
gsap.to(".box3", {
  x: 1000,
  duration: 12,
  delay: 1,
  rotate: 11000,
  backgroundColor: "black",
  border: 5,
  borderColor: "white",
  scale: 3,
  repeat: -1,
  yoyo: true,
});

gsap.from("h2", {
  y: 1000,
  stagger: 1,
  duration: 1,
  yoyo: true,
  ease: "bounce.inOut",
  scale: 2,
  rotate: 20,
  opacity: 0,
});

gsap.from("h3", {
  x: 60,
  opacity: 0,
  duration: 2,
  delay: 4,
  ease: "slow(0.7,0.7,false)",
});
