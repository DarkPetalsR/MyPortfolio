import React from 'react';
import profilePic from "../assets/PP.jpeg";

const About = () => {
  return (
    <section className="bg-[#0f0f1c] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
            <img src={profilePic} alt="Ridhi" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4">Overview.</h2>
          <ul className="space-y-3 text-lg leading-relaxed">
            <li>💻 I'm a Data Scientist with strong experience in ML and cloud tools.</li>
            <li>🎓 Recently graduated with a Master's in CS from Purdue University.</li>
            <li>⚙️ I love building, automating, and optimizing systems for real impact.</li>
            <li>💡 Always exploring, always learning.</li>
          </ul>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            {/* 
            <a href="/resume.pdf" className="bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 rounded-lg font-bold text-white">
            Resume
            </a> 
            */}
            <a href="https://www.linkedin.com/in/rguda28/" className="bg-blue-500 px-5 py-2 rounded-lg font-bold text-white">LinkedIn</a>
            <a href="https://github.com/DarkPetalsR" className="bg-gray-800 px-5 py-2 rounded-lg font-bold text-white">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
