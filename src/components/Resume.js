import React from "react";

import Bar from "./Bar";
import { motion } from "framer-motion";
import { tools, languages } from "./data/resume_data";

const Resume = () => {
  const resume_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="container resume"
      variants={resume_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">
              Master of Computer Application
            </h5>
            <p className="resume-card__name">
              Academy of Technology(2015-2018)
            </p>
            <h5 className="resume-card__title">INTERNSHIP(2018 jan-may)</h5>
            <p className="resume-card__name">
              Worked as an intern at "Dextrouslabs, Bangalore".
            </p>
            <h5 className="resume-card__title">
              Key responsibilities included:
            </h5>
            <p className="resume-card__name">
              Analyzing Information, General Programming Skills, Software
              Design, Software Debugging, Software Documentation, Software
              Testing, Problem Solving, Teamwork, Software Development
              Fundamentals, Software Development Process, Software Requirements
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">1. Developer Support Core Microsoft (2019-2020)</h5>
            <p className="resume-card__name">Microsoft (2019-2020)</p>
            <h5 className="resume-card__title">
              Key responsibilities included:
            </h5>
            <p className="resume-card__name">
            Developers code review and isolating the issue to the specific component(Debugging developers code).Mainly from Data Access and Managed code standpoint. (I mean C#, OLEDB, ODBC,ADO.net)
            </p>
          </div>
          <div className="resume-card__body">
            <h5 className="resume-card__title">
              2. Front-End Engineer (March 2020 - Present)
            </h5>
            <p className="resume-card__name">XYX Company name</p>
            <p className="resume-card__details">
              Working as a Front-End Engineer mainly on JS frontend libraries
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Language and Framework</h5>
          <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
