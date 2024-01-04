import {useRef, useState} from "react"
import {gsap, ScrollTrigger} from "gsap/all"
import {useGSAP} from "@gsap/react"
import {macbook, text_macbook} from "../assets/media/index"

const Basic = () => {

  const [visible, setVisible] = useState(false)
  const timeVideo = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".macbookText", { scale: 0.01 });

    gsap.to(".macbookText", {
      scrollTrigger: {
        trigger: ".macbookText",
        pin: true,
        start: "top center",
        end: "-=100",
        scrub: true,
      },
      scale: 200,
      x: -5000,
      duration: 50,
      onComplete: () => {
        setVisible(true)
      },
    });

	var tl = gsap.timeline({
		scrollTrigger: {
			trigger: timeVideo.current,
			start: "top center",
			end: "bottom center",
			scrub: true,
		}
	})

	tl.from(timeVideo.current, {
		currentTime:0,
		duration: 10
	})
	.to(timeVideo.current, {
		currentTime:4,
		duration:10
	})

  }, []);


  return (
    <div className="h-[200vh]">
      <div className="flex items-center justify-center h-[100vh]">
        <img
          className={`macbookText ${visible ? "hidden" : ""}`}
          src={text_macbook}
          alt="MacBook"
        />
        {visible ? (
            <video ref={timeVideo} className="macbookVideo object-fill" controls={false}>
              <source src={macbook} type="video/mp4" />
            </video>
        ) : null}
      </div>
    </div>
  );
}

export default Basic
