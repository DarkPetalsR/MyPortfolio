import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projects = [
  {
    name: "AI Image Colorization",
    description: "A CNN-based model that improved color fidelity by 25%.",
    bullets: [
      "Used OpenCV, Matplotlib, and Keras.",
      "Trained on grayscale datasets to restore vibrant color."
    ],
    tech: ["Python", "Keras", "OpenCV"],
  },
  {
    name: "Geolocation Data Clustering",
    description: "GPS clustering with K-Means & HDBSCAN; 30% faster processing.",
    bullets: [
      "Visualized spatial data on interactive maps.",
      "Improved anomaly detection via density-based clustering."
    ],
    tech: ["Python", "Scikit-learn", "HDBSCAN"],
  },
  {
    name: "Amazon Price Prediction",
    description: "Achieved R² of 0.87 with regression models.",
    bullets: [
      "Engineered features from pricing trends.",
      "Improved interpretability by 20%."
    ],
    tech: ["Pandas", "XGBoost", "Matplotlib"],
  },
  {
    name: "Share Hive",
    description: "Voice-assisted multilingual learning app.",
    bullets: [
      "Increased session engagement by 30%.",
      "Built cross-platform app with multilingual support."
    ],
    tech: ["React Native", "Google Speech API", "Firebase"],
  },

  { 
      name: "Portfolio",
      description: "My personal portfolio showcasing projects and skills.",
      bullets: [
        "Built with React and Tailwind CSS.",
        "Used AOS for animations.",
        "Styled using Tailwind CSS."
      ],
      tech: ["React", "Tailwind CSS", "AOS"],
    },

  { //New Project this is
      name: "Revenue Insights Hospitality Domain (Power BI)",
      description: "An interactive Power BI dashboard analyzing hotel performance across cities, properties, and booking platforms.",
      bullets: [
        "Built with Power BI",
        "Used AOS for animations.",
        "Styled using Tailwind CSS."
      ],
      tech: ["Power BI", "Excel", "GitHub"],
    },
  
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-20 px-6 md:px-16 bg-transparent" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-[#1c1c1c] rounded-xl p-6 shadow-lg transform hover:scale-[1.02] transition duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{project.name}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
            <ul className="list-disc ml-5 text-sm text-gray-600 dark:text-gray-400 mb-3">
              {project.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tag, i) => (
                <span key={i} className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
