import React from 'react'
import './services.css'
import {GiCheckMark} from 'react-icons/gi'



const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className="service">
          <div className="service__head">
            <h3>Desktop Application Develpment</h3>
          </div>
          <ul className="service__list">
            <li><GiCheckMark className='service__list-icon'/>
            <p>I have experience in developing desktop applications with Java and c#</p>
            </li>
            
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li><GiCheckMark className='service__list-icon'/>
            <p>I develop web applications with front end technologies such as VueJS, ReactJS and back end technologies such as Laravel, Express etc....</p>
            </li>

          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Graphic Desisgn</h3>
          </div>
          <ul className="service__list">
            <li><GiCheckMark className='service__list-icon'/>
            <p>Adobe Photoshop  </p>
            </li>
            <li><GiCheckMark className='service__list-icon'/>
            <p>Adobe Illustrator  </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services