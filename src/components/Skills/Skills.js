import React from "react";
// import { motion } from "framer-motion";
// import { textVariant } from "../../utils/motion.js";
// import {styles} from "../../styles.js"
import SectionWrapper from "../../hoc/SectionWrapper.js";
import { technologies } from "../../constants/index.js";
import "./Skills.css"

const Skills = () => {
  return (
    <div className="py-5">
      <div>
        <h1 className="ski-h1">Technical Skills</h1>
      </div>
      <section id="skills">
        

<marquee width="100%" height="200" direction="left" scrollamount="15">
  <div className="flex gap-20 ">
    {technologies.map((technology) => (
      <img src={technology.icon} alt="icon" className="tech-img" />
    ))}
  </div>
</marquee>
      </section>
    </div>
  );
};

export default SectionWrapper(Skills, "");

