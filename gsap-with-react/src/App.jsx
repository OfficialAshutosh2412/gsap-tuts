// import gsap from "gsap";
import { useRef } from "react";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function App() {
  // const boxRef = useRef();
  //if you don't want to use useref hook then use gsap hook with scope parameter
  useGSAP(
    () => {
      gsap.from(".box", {
        x: -100,
        opacity: 0,
        duration: 1,
        rotate: 45,
        ease: "back.inOut",
      });
    },
    { scope: ".container" }
  );

  return (
    <>
      <main>
        <div className="container">
          <div className="circle"></div>
          <div className="box"></div>
        </div>
        <div className="container2">
          <div className="circle"></div>
          <div className="box"></div>
        </div>
      </main>
    </>
  );
}

export default App;
