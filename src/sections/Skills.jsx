import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-black text-[#cbbaad] flex flex-col items-center py-16 px-6 sm:px-10 lg:px-20"
    >
      {/* Background full-page text */}
      <div className="absolute inset-0 px-6 text-[#363333] opacity-10 font-extrabold text-[12rem] leading-[1.2] whitespace-pre-wrap flex flex-wrap justify-center items-center select-none">
        {"KASHAF NOOR ".repeat(5)}
      </div>

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl Zumma font-extrabold tracking-wide">
          SKILLS
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl uppercase opacity-80">
          Summary of my technical and professional skill
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10 max-w-6xl w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          {[
            { num: "01", skill: "React" },
            { num: "02", skill: "Next JS" },
            { num: "03", skill: "JavaScript" },
            { num: "04", skill: "Tailwind CSS" },
          ].map((item) => (
            <div
              key={item.num}
              className="flex justify-between items-center border-b border-white/80 pb-3"
            >
              <span className="text-2xl sm:text-3xl md:text-3xl font-extrabold">
                {item.num}
              </span>
              <span className="text-xl sm:text-2xl md:text-2xl font-bold uppercase">
                {item.skill}
              </span>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          {[
            { num: "05", skill: "GSAP" },
            { num: "06", skill: "Communication" },
            { num: "07", skill: "Time Management" },
            { num: "08", skill: "Adaptability" },
          ].map((item) => (
            <div
              key={item.num}
              className="flex justify-between items-center border-b border-white/80 pb-3"
            >
              <span className="text-2xl sm:text-3xl md:text-3xl font-extrabold">
                {item.num}
              </span>
              <span className="text-xl sm:text-2xl md:text-2xl font-bold uppercase">
                {item.skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


