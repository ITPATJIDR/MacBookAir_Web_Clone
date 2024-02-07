import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { macbook, text_macbook } from "../assets/media/index";

const TimeLine = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeLine = gsap.timeline({
      scrollTrigger:
        {
          trigger: ".bigBox",
          start: "+=10:",
          end: "+=3000",
          scrub: true,
          pin: true,
	  markers:true
        },
    });

    timeLine
      .from(".box1", {
        scale: 0.5,
        duration: 10,
      })
      .to(".box1", {
        scale: 4,
        duration: 10,
      });

    timeLine
      .from(".box2", {
        currentTime: 0,
        duration: 10,
      })
      .to(".box2", {
        currentTime: 4,
        duration: 10,
      },">");

    timeLine.to(".box3", { x: 300, duration: 2 }, "<");
    timeLine.to(".box4", { x: 400, duration: 3 });
  }, []);

  return (
    <div className="bigBox flex items-center justify-center w-screen h-[400vh] bg-red-300">
      <div>
        <div className="h-[100vh] flex items-center justify-center">
		<img className="box1" src={text_macbook} alt="text_macbook"/>
        </div>
        <div className="h-[100vh] flex items-center justify-center">
          <video className="box2 object-fill" controls={false}>
            <source src={macbook} type="video/mp4" />
          </video>
        </div>
        <div className="h-[100vh] flex items-center justify-center">
          <div className="box3 w-[20vw] h-[10vh] bg-slate-700 rounded-2xl mt-10"></div>
        </div>
        <div className="h-[100vh] flex items-center justify-center">
          <div className="box4 w-[20vw] h-[10vh] bg-slate-500 rounded-2xl mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
