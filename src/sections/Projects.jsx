import { useEffect, useRef, useState } from "react";
import InfiniteMenu from "./InfiniteGridMenu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const defaultItems = [
  {
    image: "/assets/capsule.png",
    link: "https://noor1805.github.io/Capsule/",
    title: "Capsule",
  },
  {
    image: "/assets/thirtysix.png",
    link: "https://noor1805.github.io/Thirtysixstudio/",
    title: "Thirtysix studio",
  },
  {
    image: "/assets/rockstar.png",
    link: "https://noor1805.github.io/GTA-5/",
    title: "GTA-6",
  },
  {
    image: "/assets/ai.jpg",
    link: "https://noor1805.github.io/ai-enhancer//",
    title: "AI-Image Enhancer",
  },
];

export default function ProjectInfiniteMenu() {
  const [items] = useState(defaultItems);

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
  return (
    <div
      id="projects"
      className="flex mt-5 flex-col items-center justify-center min-h-screen bg-black text-[#cbbaad] p-4"
    >
      <h1
        ref={headingRef}
        className="text-[clamp(7rem,8vw,10rem)] font-bold Zumma "
      >
        {"PROJECT".split("").map((ch, i) => (
          <span key={i} className="letter inline-block">
            {ch}
          </span>
        ))}
      </h1>
      <div className="-mt-2 w-full h-[70vh] sm:h-[80vh] md:h-[90vh] rounded-2xl overflow-hidden border border-[#cbbaad]">
        <InfiniteMenu items={items} />
      </div>
    </div>
  );
}
