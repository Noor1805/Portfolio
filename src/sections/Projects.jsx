import { useEffect, useRef, useState } from 'react';
import InfiniteMenu from './InfiniteGridMenu'; // yeh file wahi hai jisme tumhara pura WebGL code hai

const defaultItems = [
  {
    image: '/assets/capsule.png',
    link: 'https://noor1805.github.io/Capsule/',
    title: 'Capsule',
  },
  {
    image: '/assets/thirtysix.png',
    link: 'https://noor1805.github.io/Thirtysixstudio/',
    title: 'Thirtysix studio',
  },
  {
    image: '/assets/rockstar.png',
    link: 'https://noor1805.github.io/GTA-5/',
    title: 'GTA-6',
  },
  {
    image: '/assets/ai.jpg',
    link: 'https://noor1805.github.io/ai-enhancer//',
    title: 'AI-Image Enhancer',
  }
];


export default function ProjectInfiniteMenu() {
  const [items] = useState(defaultItems);

  return (
    <div className="flex mt-5 flex-col items-center justify-center min-h-screen bg-black text-[#cbbaad] p-4">
       {/* Background full-page text */}
      <div className="absolute inset-0 px-6 text-[#363333] opacity-10 font-extrabold text-[12rem] leading-[1.2] whitespace-pre-wrap flex flex-wrap justify-center items-center select-none">
        {"KASHAF NOOR ".repeat(5)}
      </div>
      <h1 className="text-[clamp(7rem,8vw,10rem)] font-bold Zumma ">Project</h1>
      <div className="-mt-2 w-full h-[70vh] sm:h-[80vh] md:h-[90vh] rounded-2xl overflow-hidden border border-[#cbbaad]">
        <InfiniteMenu items={items} />
      </div>
    </div>
  );
}






