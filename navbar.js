// gsap.from(".lt", {
//   duration: 2,
//   x: -10,
//   scale: 13,
//   opacity: 0,
//   rotate: 100,
//   ease: "bounce.out",
// });
// gsap.from(".gt", {
//   duration: 2,
//   x: -100,
//   scale: 5,
//   opacity: 0,
//   rotate: 100,
//   ease: "bounce.out",
//   color: "white",
// });
// gsap.from(".first", {
//   duration: 1,
//   x: -100,
//   scale: 5,
//   opacity: 0,
//   color: "white",
// });
// gsap.from(".rest-name", {
//   duration: 2,
//   y: -200,
//   opacity: 0,
//   color: "white",
// });
// gsap.from(".surname", {
//   duration: 2,
//   y: -200,
//   opacity: 0,
//   color: "white",
// });
gsap.from("nav .brand div", {
  stagger: 0.5,
  y: -50,
  x: -500,
  opacity: 0,
  duration: 2.5,
  delay: 0,
  ease: "back.inOut",
  rotate: 50000,
  color: "white",
  scale: 20,
});
gsap.from(".menu", {
  duration: 1,
  x: -100,
  y: -100,
  opacity: 0,
  ease: "back.out",
  delay: 0.5,
});
