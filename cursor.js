var main = document.querySelector(".main");
var cursors = document.querySelector(".cursor");
var imageDiv = document.querySelector(".image");

main.addEventListener("mousemove", (props) => {
  gsap.to(cursors, {
    x: props.x,
    y: props.y,
  });
});
imageDiv.addEventListener("mouseenter", (data) => {
  cursors.innerHTML = "zoom in";
  gsap.to(cursors, {
    scale: 3,
  });
});
imageDiv.addEventListener("mouseleave", (data) => {
  cursors.innerHTML = "";
  gsap.to(cursors, {
    scale: 1,
  });
});
