splitText = () => {
  var h1 = document.querySelector("h1");
  var lengthOfName = Math.floor(h1.textContent.length / 2);
  console.log(lengthOfName);
  var splitname = h1.textContent.split("");
  var clutter = "";

  splitname.forEach((element, idx) => {
    if (idx < 4) {
      clutter = clutter + `<span class="a">${element}</span>`;
    } else {
      clutter = clutter + `<span class="b">${element}</span>`;
    }
  });
  console.log(clutter);

  h1.innerHTML = clutter;
};

splitText();

gsap.from("h1 .a ", {
  duration: 0.5,
  y: 70,
  opacity: 0,
  stagger: 0.25,
  ease: "sine.inOut",
  delay: 0.2,
  background: "white",
  borderRadius: "50px",
  padding: "5px",
});
gsap.from("h1 .b ", {
  duration: 0.5,
  y: 70,
  opacity: 0,
  stagger: -0.25,
  ease: "sine.inOut",
  delay: 0.2,
  background: "white",
  borderRadius: "50px",
  padding: "5px",
});
