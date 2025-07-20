import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";

const Work = () => {
  return (
    <section id="work" className="bg-[#0f0f1c] py-16 text-white">
      <h2 className="text-center text-5xl font-extrabold mb-4">Work Experience</h2>
      <p className="text-center text-lg text-gray-400 mb-10">My professional journey</p>

      <div className="max-w-6xl mx-auto">
        <VerticalTimeline lineColor="#9333ea">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1c1b2a", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #9333ea" }}
            date="Dec 2022 - Aug 2023"
            iconStyle={{ background: "#9333ea", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-xl">
              Data Scientist
            </h3>
            <h4 className="vertical-timeline-element-subtitle italic">
              IT Curve
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1c1b2a", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #9333ea" }}
            date="May 2021 - Dec 2022"
            iconStyle={{ background: "#9333ea", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-xl">
              Systems Engineer (Data Science)
            </h3>
            <h4 className="vertical-timeline-element-subtitle italic">
              Tata Consultancy Services
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1c1b2a", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #9333ea" }}
            date="Jan 2019 - May 5, 2021"
            iconStyle={{ background: "#9333ea", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-xl">
              Business Intelligence Analyst
            </h3>
            <h4 className="vertical-timeline-element-subtitle italic">
              Madhusudan and Co. Tax Consultants
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Work;
