import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="bg-[#0f0f1c] py-16 text-white">
      <div className="text-center mb-12">
        <p className="text-gray-400 text-lg">WHAT I HAVE STUDIED SO FAR</p>
        <h2 className="text-5xl font-extrabold mt-2">Education.</h2>
      </div>

      <VerticalTimeline lineColor="#915EFF">
        {/* Purdue University */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#2b2046", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #2b2046" }}
          date="2023 – 2025"
          iconStyle={{ background: "#fff", color: "#915EFF" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-lg">
            Master of Science in Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-gray-300">
            Purdue University, Fort Wayne, USA
          </h4>
          <p>Graduated in May 2025</p>
        </VerticalTimelineElement>

        {/* JNTU */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#2b2046", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #2b2046" }}
          date="2016 – 2020"
          iconStyle={{ background: "#fff", color: "#915EFF" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-lg">
            Bachelor of Technology in Information Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-gray-300">
            Jawaharlal Nehru Technological University, Hyderabad, India
          </h4>
          <p>Graduated in 2020</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Education;
