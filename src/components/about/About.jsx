import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {TbFolders} from 'react-icons/tb'





const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3 yrs+</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <TbFolders className='about__icon'/>
              <h5>Projects</h5>
              <small>20+</small>
            </article>

          </div>
          <p>ahsbdkjasdgasdhasd aslbd hbdsakdbsad hadbd hbds dabdal dbasdlsabd asldbasdasbasdhas adb adlsabd sadas
            asodh asid haildh iashdiashdasid hasihd asli dhasdsaid halsidshd aislhd ald
            asdoh aslidh asidhasild hsadasildhas dliashdh aasi dhasldh 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About