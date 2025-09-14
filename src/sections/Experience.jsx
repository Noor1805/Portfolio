import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  // ✨ Letter Reveal Animation (Heading)
  useEffect(() => {
    const letters = headingRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
        x: 80,
        rotateX: 45,
      },
      {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        x: 0,
        rotateX: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  // ✨ Cards Animation (Right Side → ek ek karke)
  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { x: 150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      id="experience"
      className="relative w-full mt-5 bg-black text-[#cbbaad] flex flex-col lg:flex-row min-h-screen overflow-hidden"
    >
      {/* Background full-page text */}
      <div className="absolute inset-0 px-6 text-[#363333] opacity-10 font-extrabold text-[12rem] leading-[1.2] whitespace-pre-wrap flex flex-wrap justify-center items-center select-none">
        {"KASHAF NOOR ".repeat(5)}
      </div>

      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col mt-10 justify-start items-start px-8 lg:px-20 py-12 lg:py-20">
        <h2
          ref={headingRef}
          className="text-8xl sm:text-9xl md:text-8xl lg:text-9xl xl:text-[10rem] Zumma font-extrabold tracking-wide"
        >
          {"EXPERIENCE".split("").map((ch, i) => (
            <span key={i} className="letter inline-block">
              {ch}
            </span>
          ))}
        </h2>
        <p className="uppercase text-lg sm:text-lg md:text-2xl max-w-sm opacity-80 font-Zumma">
          A glimpse into the projects, internships, and programs that shaped my
          journey as a developer.
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-12 lg:py-20 divide-y divide-gray-600">
        {/* Card 1 */}
        <div
          className="py-10"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          <span className="text-4xl sm:text-6xl lg:text-6xl font-extrabold Zumma tracking-wide">
            01
          </span>
          <h3 className="mt-3 tracking-wide text-4xl sm:text-5xl font-semibold Zumma">
            GSSOC – Contributor
          </h3>
          <p className="mt-2 uppercase text-md sm:text-lg lg:text-xl opacity-80 font-Zumma leading-relaxed">
            Worked on open source features and collaborated with developers
            worldwide.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="py-10"
          ref={(el) => (cardsRef.current[1] = el)}
        >
          <span className="tracking-wide text-4xl sm:text-6xl lg:text-6xl font-extrabold Zumma">
            02
          </span>
          <h3 className="mt-3 text-4xl sm:text-5xl font-semibold Zumma tracking-wide">
            RITZZ Digital – Intern
          </h3>
          <p className="mt-2 text-md uppercase sm:text-lg lg:text-xl opacity-80 font-Zumma leading-relaxed">
            Created responsive websites, improved performance, and delivered
            client-ready solutions.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="py-10"
          ref={(el) => (cardsRef.current[2] = el)}
        >
          <span className="text-4xl tracking-wide sm:text-6xl lg:text-6xl font-extrabold Zumma">
            03
          </span>
          <h3 className="mt-3 text-4xl tracking-wide sm:text-5xl font-semibold Zumma">
            Hackathon 1
          </h3>
          <p className="mt-2 uppercase text-md sm:text-lg lg:text-2xl opacity-80 font-Zumma leading-relaxed">
            Secured 1st place by developing an innovative project under tight
            deadlines.
          </p>
        </div>

        {/* Card 4 */}
        <div
          className="py-10"
          ref={(el) => (cardsRef.current[3] = el)}
        >
          <span className="text-4xl tracking-wide sm:text-6xl lg:text-6xl font-extrabold Zumma">
            04
          </span>
          <h3 className="mt-3 tracking-wide text-4xl sm:text-5xl font-semibold Zumma">
            Hackathon 2
          </h3>
          <p className="mt-2 uppercase text-md sm:text-lg lg:text-2xl opacity-80 font-Zumma leading-relaxed">
            Built a project in limited time, focusing on problem-solving and
            teamwork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
