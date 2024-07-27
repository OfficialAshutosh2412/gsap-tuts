window.addEventListener("wheel", (props) => {
  if (props.deltaY > 0) {
    gsap.to(".move ", {
      duration: 5,
      transform: "translateX(-220%)",
      repeat: -1,
      ease: "none",
    });
    gsap.to(".move img", {
      rotate: 180,
      duration: 1,
      ease: "none",
    });
  } else {
    gsap.to(" .move", {
      duration: 5,
      transform: "translateX(0%)",
      repeat: -1,
      ease: "none",
    });
    gsap.to(".move img", {
      rotate: 0,
      duration: 1,
      ease: "none",
    });
  }
});
