var initial_path = `M 200 100 Q 600 100 1200 100`;
var final_path = `M 200 100 Q 600 100 1200 100`;

let string = document.querySelector(".string");
string.addEventListener("mousemove", function (properties) {
  initial_path = `M 200 100 Q ${properties.x} ${properties.y} 1200 100`;
  console.log(initial_path);
  gsap.to("svg path", {
    attr: {
      d: initial_path,
    },
    duration: 0.2,
    ease: "power3.out",
  });
});
string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: {
      d: final_path,
    },
    duration: 1.5,
    ease: "elastic.out(1,0.1)",
  });
});
