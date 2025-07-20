import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Work from "./components/Work";
import Globe from "./components/Globe";

const App = () => {
  return (
    <div className="relative text-white font-poppins">
      {/* 3D Background (Globe) */}
      <Globe />

      {/* Foreground content */}
      <div className="relative z-10">
        <Navbar />
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="work"><Work /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
};

export default App;
