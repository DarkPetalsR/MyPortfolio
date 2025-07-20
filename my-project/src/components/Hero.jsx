import React from "react";
import Background from "./Background";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden text-white font-poppins">
      <Background />

      <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-16 bg-black/50">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-purple-400">Ridhi!</span>
        </h1>
        <p className="text-xl md:text-2xl font-semibold mb-2">
          I'm a <span className="text-purple-300">Data Scientist</span>
        </p>
        <p className="max-w-lg text-sm md:text-base text-white/90">
          Welcome to my portfolio. Here you'll find my projects, skills, and experiences in the world of data science and machine learning.
        </p>
      </div>
    </div>
  );
};

export default Hero;
