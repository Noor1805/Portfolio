const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-black mb-7 overflow-hidden min-h-[70vh] md:min-h-screen pt-0 xl:pt-12 flex items-center justify-center"
    >
       {/* Background full-page text */}
      <div className="absolute inset-0 px-6 text-[#363333] opacity-5 font-extrabold text-[12rem] leading-[1.2] whitespace-pre-wrap flex flex-wrap justify-center items-center select-none">
        {"KASHAF NOOR ".repeat(25)}
      </div>

      {/* Main Content Area */}
      <div className="relative container mx-auto px-6 flex flex-row items-start space-x-10 ">
        {/* Left - Vertical Boxes */}
        <div className="flex flex-col space-y-12 ">
          <div className="w-5 h-8 lg:w-10 lg:h-16 border-2 border-[#fef3ec] rounded-md"></div>
          <div className="w-5 h-8 border-2 lg:w-10 lg:h-16  border-[#fef3ec]  rounded-md"></div>
          <div className="w-5 h-8 border-2 lg:w-10 lg:h-16  border-[#fef3ec] rounded-md"></div>
          <div className="w-5 h-8 border-2 lg:w-10 lg:h-16  border-[#fef3ec]  rounded-md"></div>
        </div>

        {/* Right - Text Content */}
        <div className="relative max-w-2xl mt-10 xl:mt-10 lg:mt-20 lg:ml-1 xl:ml-10">
          <div className="-mb-2 sm:-mb-4 lg:-mb-7 2xl:-mb-12  michroma-font text-[clamp(0.625rem,2vw,0.975rem)] uppercase tracking-widest text-[#cbbaad]">
            CODE ✦ DESIGN
          </div>
          <h1 className="whitespace-nowrap text-[clamp(4.7rem,21vw,17rem)] lg:text-[clamp(6rem,20vw,22rem)] Zumma text-[#cbbaad] leading-tight font-bold -mb-3 sm:-mb-6 md:-mb-8 lg:-mb-14 xl:-mb-20 ">
            KASHAF NOOR
          </h1>

          <p className="absolute right-0 md:-right-14 lg:-right-44 xl:right-[-28rem] 2xl:right-[-44rem] top-full text-[clamp(1.2rem,2vw,2rem)] lg:text-[clamp(1.5rem,1.4vw,2rem)] w-[220px] sm:w-64 md:w-60 lg:w-72 xl:w-96 michroma-font text-[#dbd3ce]">
            Where creativity meets code – crafting web experiences that are
            bold, immersive, and unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
