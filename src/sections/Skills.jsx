import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const animationDefaults = { duration: 0.6, ease: "expo" };
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  // ✨ Letter Reveal Animation
  useEffect(() => {
    const letters = headingRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { 
        clipPath: "inset(0 100% 0 0)", 
        opacity: 0,
        x: 80, 
        rotateX: 45 
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
    );}, []);
  
  // ---------------- Left/Right Hover Marquee Logic ----------------
  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const leftDist = mouseX ** 2 + (mouseY - height / 2) ** 2;
    const rightDist = (mouseX - width) ** 2 + (mouseY - height / 2) ** 2;
    return leftDist < rightDist ? "left" : "right";
  };

  const handleMouseEnter = (ev, marqueeRef, marqueeInnerRef, itemRef) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, {
        x: edge === "left" ? "-101%" : "101%",
        y: "0%",
      })
      .set(marqueeInnerRef.current, {
        x: edge === "left" ? "101%" : "-101%",
        y: "0%",
      })
      .to([marqueeRef.current, marqueeInnerRef.current], { x: "0%" });
  };

  const handleMouseLeave = (ev, marqueeRef, marqueeInnerRef, itemRef) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { x: edge === "left" ? "-101%" : "101%" })
      .to(marqueeInnerRef.current, { x: edge === "left" ? "101%" : "-101%" });
  };

  // ---------------- Skill Item ----------------
  const SkillItem = ({ num, skill }) => {
    const itemRef = useRef(null);
    const marqueeRef = useRef(null);
    const marqueeInnerRef = useRef(null);

    const repeatedMarqueeContent = (
      <>
        {Array.from({ length: 6 }).map((_, idx) => (
          <span
            key={idx}
            className="text-[#060010] uppercase font-bold text-[3vh] leading-[1.2] px-[1vw] whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </>
    );

    return (
      <div
        ref={itemRef}
        className="relative overflow-hidden text-center border-b border-white/80 pb-3 cursor-pointer"
        onMouseEnter={(ev) =>
          handleMouseEnter(ev, marqueeRef, marqueeInnerRef, itemRef)
        }
        onMouseLeave={(ev) =>
          handleMouseLeave(ev, marqueeRef, marqueeInnerRef, itemRef)
        }
      >
        <div className="flex justify-between items-center">
          <span className="text-2xl sm:text-3xl md:text-3xl font-extrabold">
            {num}
          </span>
          <span className="text-xl sm:text-2xl md:text-2xl font-bold uppercase">
            {skill}
          </span>
        </div>

        {/* Hover marquee effect */}
        <div
          ref={marqueeRef}
          className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-[#cbbaad] translate-x-[101%]"
        >
          <div ref={marqueeInnerRef} className="h-full w-[200%] flex">
            <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
              {repeatedMarqueeContent}
              {repeatedMarqueeContent}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ---------------- Skill Lists ----------------
  const leftSkills = [
    { num: "01", skill: "React" },
    { num: "02", skill: "Next JS" },
    { num: "03", skill: "JavaScript" },
    { num: "04", skill: "Tailwind CSS" },
  ];

  const rightSkills = [
    { num: "05", skill: "GSAP" },
    { num: "06", skill: "Node JS" },
    { num: "07", skill: "Mongo DB" },
    { num: "08", skill: "Express JS" },
  ];

  return (
    <section
      id="skills"
      className="relative w-full bg-black text-[#cbbaad] flex flex-col items-center py-16 px-6 sm:px-10 lg:px-20"
    >
      {/* Background full-page text */}
      <div className="absolute inset-0 px-6 text-[#363333] opacity-10 font-extrabold text-[12rem] leading-[1.2] whitespace-pre-wrap flex flex-wrap justify-center items-center select-none">
        {"KASHAF NOOR ".repeat(5)}
      </div>

      {/* Heading with letter split */}
      <div className="text-center mb-14 overflow-hidden">
        <h2
          ref={headingRef}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl Zumma font-extrabold tracking-normal flex justify-center gap-2"
        >
          {"SKILLS".split("").map((ch, i) => (
            <span key={i} className="letter inline-block">
              {ch}
            </span>
          ))}
        </h2>
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl uppercase opacity-80"
        >
          Summary of my technical and professional skill
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10 max-w-6xl w-full">
        <div className="flex flex-col gap-8">
          {leftSkills.map((item) => (
            <SkillItem key={item.num} {...item} />
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {rightSkills.map((item) => (
            <SkillItem key={item.num} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;




