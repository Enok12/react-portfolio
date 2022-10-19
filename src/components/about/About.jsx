import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { BsAward } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { TbFolders } from 'react-icons/tb'
import { motion } from "framer-motion"
import { useRef } from "react";
import { useInView } from "framer-motion";






const About = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id='about' ref={ref}>
      <motion.h5 initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}>Get to Know</motion.h5>
      <motion.h2 initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}>About Me</motion.h2>

      <div
        className="container about__container">

        <motion.div initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1 }} className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </motion.div>
        <div className="about__content">
          <div className="about__cards">
            <motion.article initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 1 }} className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>3 yrs+</small>
            </motion.article>

            <motion.article initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 1.2 }} className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>50+ </small>
            </motion.article>

            <motion.article initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 1.4 }} className='about__card'>
              <TbFolders className='about__icon' />
              <h5>Projects</h5>
              <small>20+</small>
            </motion.article>

          </div>

          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}  >
            <p>Well-versed in technology and writing code to create reliable and user-friendly systems. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs, highlight its core competencies, and further its success.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About