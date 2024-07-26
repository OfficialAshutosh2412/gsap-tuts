var heroAnimation = () => {
  var tl = gsap.timeline();
  tl.from(".brand", {
    y: -30,
    duration: 1,
    delay: 0.5,
    opacity: 0,
  });
  tl.from("nav .menu div", {
    y: -30,
    duration: 0.4,
    delay: 0.1,
    opacity: 0,
    stagger: 0.1,
    ease: "back.out",
  });
  tl.from(".hero .left h1", {
    x: -300,
    duration: 0.5,
    opacity: 0,
    ease: "sine",
  });
  tl.from(".hero .left p", {
    x: -200,
    duration: 0.5,
    opacity: 0,
    ease: "sine",
  });
  tl.from(".hero .left button", {
    x: -100,
    duration: 0.5,
    opacity: 0,
    ease: "sine",
  });
  tl.from(".hero .right img", {
    y: -10,
    duration: 0.5,
    opacity: 0,
    ease: "sine",
  });
};
heroAnimation();
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".image-strip",
    scroller: "body",
    start: "top 50%",
    end: "top 0",
    scrub: 1,
  },
});
tl2.from(".image-strip div", {
  x: -100,
  duration: 0.5,
  opacity: 0,
  stagger: 0.15,
});
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".service",
    scroller: "body",
    start: "top 50%",
    end: "top 0",
    scrub: 2,
  },
});
tl3.from(".service .service-title ", {
  y: -100,
  duration: 1,
  opacity: 0,
});
var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".card-container",
    scroller: "body",
    start: "top 50%",
    end: "top -40%",
    scrub: 1,
  },
});
tl4.from(
  ".card-container .card-flex.first-card .card.card-one ",
  {
    x: -200,
    duration: 1,
    opacity: 0,
  },
  "animate"
);
tl4.from(
  ".card-container .card-flex.first-card .card.card-two ",
  {
    x: 200,
    duration: 1,
    opacity: 0,
  },
  "animate"
);
tl4.from(
  ".card-container .card-flex.second-card .card.card-third ",
  {
    x: -200,
    duration: 1,
    opacity: 0,
  },
  "animate2"
);
tl4.from(
  ".card-container .card-flex.second-card .card.card-fourth ",
  {
    x: 200,
    duration: 1,
    opacity: 0,
  },
  "animate2"
);
var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".proposal",
    scroller: "body",
    start: "top 70%",
    end: "top 0%",
    scrub: 1,
  },
});
tl5.from(".proposal", {
  duration: 1,
  opacity: 0,
  scale: 1.5,
});
tl5.from(
  ".left-prop h1, .left-prop p, .left-prop button",
  {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
  },
  "animate5"
);
tl5.from(
  ".proposal img",
  {
    x: 100,
    opacity: 0,
    duration: 1,
  },
  "animate5"
);
var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".foot-strip-container",
    scroller: "body",
    start: "top 70%",
    end: "top 30%",
    scrub: 1,
  },
});
tl6.from(
  ".foot-strip-container .foot-strip h2, .foot-strip-container .foot-strip p",
  {
    y: -200,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
  }
);

var tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".footnote",
    scroller: "body",
    start: "top 70%",
    end: "top 30%",
    scrub: 1,
  },
});
tl7.from(".footnote", {
  duration: 2,
  opacity: 0,
});
tl7.from(".note", {
  y: -50,
  duration: 2,
  opacity: 0,
  stagger: 0.5,
});
