import { useRef, useState } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { macbook, text_macbook } from "../assets/media/index";

const PlayVideo = () => {
  const timeVideo = useRef(null);

  useGSAP(() => {
	gsap.registerPlugin(ScrollTrigger);

	var tl = gsap.timeline({
		scrollTrigger: {
			trigger: timeVideo.current,
			start: "+=100",
			end: "+=2000",
			scrub: true,
			pin:true,
			markers:true
		}
	})

	tl.from(timeVideo.current, {
		currentTime:0,
		duration: 10
	})
	.to(timeVideo.current, {
		currentTime:5,
		duration:10
	})
	
    
	// gsap.to(timeVideo.current,{
	// 	scrollTrigger: {
	// 		trigger: timeVideo.current,
	// 		start: "top center",
	// 		end: "bottom center",
	// 		scrub: true,
	// 		pin:true,
			
	// 	},
	// 	currentTime: 0,
	// 	duration:4
	// })
  },[])

  return (
    <div className="h-[400vh]">
      <div className="flex items-center justify-center h-[150vh]">
        <video
          ref={timeVideo}
          className="macbookVideo object-fill"
          controls={false}
        >
          <source src={macbook} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PlayVideo;
