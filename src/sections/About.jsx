import { FaLinkedin, FaGithub } from "react-icons/fa";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  
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

  
  useEffect(() => {
    const boxes = containerRef.current.querySelectorAll(".box");

    gsap.fromTo(
      boxes,
      {
        opacity: 0,
        y: 80,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3, 
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div
      id="about"
      className="relative min-h-screen bg-black text-black flex items-center justify-center p-4 overflow-hidden"
    >
      
      <div className="absolute top-96 inset-0 px-6 text-[#363333] opacity-10 font-extrabold text-[12rem] leading-[1.2] whitespace-pre-wrap flex flex-wrap justify-center items-center select-none">
        {"KASHAF NOOR ".repeat(5)}
      </div>

      
      <div
        ref={containerRef}
        className="relative z-10 max-w-6xl w-full grid gap-4 md:gap-4 grid-cols-1 lg:grid-cols-4"
      >
        
        <div className="lg:col-span-4 bg-[#cbbaad] rounded-2xl shadow p-6 flex items-center justify-center 
                        h-[100px] sm:h-[110px] md:h-[130px] lg:h-[150px]">
          <h1
            ref={headingRef}
            className="text-6xl Zumma sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-wide text-black"
          >
            {"ABOUT".split("").map((ch, i) => (
              <span key={i} className="letter inline-block">
                {ch}
              </span>
            ))}
            <span className="inline-block mx-[0.5rem]"></span>
            {"ME".split("").map((ch, i) => (
              <span key={i + 100} className="letter inline-block">
                {ch}
              </span>
            ))}
          </h1>
        </div>

        
        <div className="lg:col-span-1 flex flex-col gap-4">
          
          <div className="box bg-[#cbbaad] rounded-2xl shadow p-6 
              h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] 
              flex flex-col justify-center">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-xl font-bold leading-snug">
              CREATIVE DIRECTION <br /> GROUNDED IN CLARITY <br /> AND EMOTION.
            </p>
            <span className="text-sm sm:text-base md:text-base italic mt-2">
              Noor
            </span>
          </div>

          
          <div className="box bg-[#cbbaad] rounded-2xl shadow p-6 
              h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] lg:w-full 
              flex items-center">
            <p className="text-sm sm:text-base md:text-lg lg:text-base font-medium">
              PASSIONATE FRONTEND DEVELOPER SKILLED IN REACT, NEXT.JS &
              TAILWIND. EXPLORING MERN STACK AND CLOUD ENGINEERING TO BUILD
              IMPACTFUL WEB EXPERIENCES.
            </p>
          </div>
        </div>

        
        <div className="lg:col-span-1 flex flex-col gap-4">
          
          <div className="box bg-[#cbbaad] rounded-2xl shadow p-6
              h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] 
              lg:w-full  flex items-center text-left">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-xl font-bold">
              B.TECH IN <br /> COMPUTER SCIENCE <br /> & ENGINEERING <br /> (2ND
              YEAR)
            </p>
          </div>

          
          <div className="box relative bg-[#cbbaad] rounded-2xl shadow p-6
              h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] 
              lg:w-full flex flex-col justify-end">
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-wide">
              Have some questions?
            </p>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-bold">
              CONTACT ME
            </h2>
            <a href="#contact" className="absolute top-3 right-3 text-2xl">
              ↗
            </a>
          </div>
        </div>

        
        <div className="lg:col-span-2 flex flex-col gap-4">
          
          <div className="box bg-[#cbbaad] rounded-2xl shadow p-8 sm:p-10 flex flex-col 
              h-[320px] sm:h-[360px] md:h-[400px] lg:h-[390px]  
              lg:max-w-full  lg:ml-0 ">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-2xl font-bold mb-4 md:mb-6">
              EXPERIENCE
            </h2>
            <ul className="text-sm sm:text-base md:text-lg lg:text-base xl:text-base font-medium flex flex-col justify-between h-full">
              <li className="pb-2 border-b border-black/20">
                OPEN SOURCE CONTRIBUTOR – GSSOC 2024
              </li>
              <li className="py-2 border-b border-black/20">
                FRONTEND INTERN – RITZZ DIGITAL
              </li>
              <li className="py-2 border-b border-black/20">
                HACKATHON – TECH UTSAV 3.0 (1ST PLACE)
              </li>
              <li className="pt-2">
                HACKATHON – CBNCC CODE BUSTER X GDG RANCHI (TOP 10)
              </li>
            </ul>
          </div>

          
          <div className="box bg-[#cbbaad] rounded-2xl shadow p-6
              h-[70px] sm:h-[75px] md:h-[80px] lg:h-[40px]  
              lg:w-full lg:ml-0
              flex items-center justify-between">
            <a
              href="https://www.linkedin.com/in/kashaf-noor-29380332a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
            </a>
            <a
              href="https://github.com/Noor1805"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl cursor-pointer hover:text-gray-800" />
            </a>
            <a
              href="https://x.com/noor36758"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-2xl cursor-pointer hover:text-slate-800">
                𝕏
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
