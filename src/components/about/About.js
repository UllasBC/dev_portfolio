import React from 'react';


import Skillcard from './../Skillcard';
import { motion } from 'framer-motion'
import skills from './../data/about_data'
import './about.css'

const About = () => {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="about"

            variants={about_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h6 className="about__intro">
            To contribute towards the growth of the organization by utilizing the knowledge gained from work and experience in diverse technologies and ability to implement them for multiple clients.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">Technical Skills</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;