var main = document.querySelector(".main");
var cursors = document.querySelector(".cursor");
var imageDiv = document.querySelector(".image");

main.addEventListener("mousemove", (props) => {
  gsap.to(cursors, {
    x: props.x,
    y: props.y,
    background: "transparent",
  });
});
imageDiv.addEventListener("mouseenter", (data) => {
  gsap.to(cursors, {
    css: {
      scale: 5,
      backgroundColor: "transparent",
      backdropFilter: "invert(1)",
      filter: "contrast(-500%)",
      border: "none",
      cursor: "none",
    },
    duration: 0.5,
    ease: "back.out(1,7)",
  });
});
imageDiv.addEventListener("mouseleave", (data) => {
  cursors.innerHTML = "";
  gsap.to(cursors, {
    css: {
      scale: 1,
      backgroundColor: "transparent",
      backdropFilter: "invert(0)",
      filter: "contrast(-500%)",
      border: "3px dashed rgb(249, 249, 249)",
    },
    duration: 0.5,
    ease: "back.out(1,7)",
  });
});
