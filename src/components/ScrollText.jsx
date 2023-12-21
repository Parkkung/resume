import React, { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

// Register the ScrollTrigger plugin within the component
gsap.registerPlugin(ScrollTrigger);

const ScrollText = ({
  text1,
  text2,
  animationDuration = 0.1,
  startTrigger = "center 80%",
  endTrigger = "center top",
}) => {
  const quoteRef = useRef(null);
  const targetSection = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: animationDuration },
    });

    timeline
      .fromTo(quoteRef.current.querySelector(".about-1"), { opacity: 0.2 }, { opacity: 1 })
      .to(quoteRef.current.querySelector(".about-1"), { opacity: 0.2, delay: 0.5 })
      .fromTo(quoteRef.current.querySelector(".about-2"), { opacity: 0.2 }, { opacity: 1 }, "<")
      .to(quoteRef.current.querySelector(".about-2"), { opacity: 0.2, delay: 1 });

    ScrollTrigger.create({
      trigger: targetSection.current,
      start: startTrigger,
      end: endTrigger,
      scrub: 0,
      animation: timeline,
    });
  }, [animationDuration, startTrigger, endTrigger]);

  return (
    <section className="w-full relative select-none" ref={targetSection}>
      <div className="pt-28 pb-16">
        <h1 ref={quoteRef} className=" max-container font-medium text-4xl max-sm:text-3xl text-center text-indigo-600">
          <span className="about-1 leading-tight">{text1}</span>
          <span className="about-2 leading-tight">{text2}</span>
        </h1>
      </div>
    </section>
  );
};

export default ScrollText;
