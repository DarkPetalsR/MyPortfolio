import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent py-4 px-8 flex justify-between items-center text-white font-bold">
      <div className="text-xl">Ridhi Guda</div>
      <ul className="flex space-x-8 text-sm">
        <li><a href="#home" className="hover:text-purple-400">Home</a></li>
        <li><a href="#about" className="hover:text-purple-400">About</a></li>
        <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
