import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import "./Experience.css"
//import { styles } from "../../styles.js";
import { educationalQualification } from "../../constants/index.js";
import  SectionWrapper  from "../../hoc/SectionWrapper.js";
import { textVariant } from "../../utils/motion.js";


const ExperienceCard = ({ item }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#ffff99",
        color: "black",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #16213e" }}
      date={item.date}
      >
      <div>
        <h3 className="text-black text-[24px] font-bold">{item.title}</h3>
        <p
          className="text-black text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {item.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {item.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
    <section id="education">
      <motion.div variants={textVariant()}>
        <p className="exp-p">
        From Classroom to Career
        </p>
        <h2 className="exp-h2">
        My Educational Journey
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educationalQualification.map((item, index) => (
            <ExperienceCard key={`item-${index}`} item={item} />
          ))}
        </VerticalTimeline>
      </div>
      </section>
    </>
  );
};

export default SectionWrapper(Experience, "work");
