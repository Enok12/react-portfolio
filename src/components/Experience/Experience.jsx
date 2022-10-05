import React from 'react'
import './experience.css'
import { BsShieldFillCheck } from 'react-icons/bs'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Mousewheel, Autoplay } from "swiper";

//import logos

import LOGO1 from '../../assets/Language/HTML.jpg'
import LOGO2 from '../../assets/Language/Java.jpg'
import LOGO3 from '../../assets/Language/Javascript.jpg'
import LOGO4 from '../../assets/Language/Vue.jpg'
import LOGO5 from '../../assets/Language/React.jpg'
import LOGO6 from '../../assets/Language/Wordpress.jpg'
import LOGO7 from '../../assets/Language/Bootstrap.jpg'
import LOGO8 from '../../assets/Language/Tailwind CSS.jpg'
import LOGO9 from '../../assets/Language/MUI.jpg'
import LOGO10 from '../../assets/Language/PHP.jpg'
import LOGO11 from '../../assets/Language/Laravel.jpg'
import LOGO12 from '../../assets/Language/Node JS.jpg'
import LOGO13 from '../../assets/Language/Express.jpg'
import LOGO14 from '../../assets/Language/SQL.jpg'
import LOGO15 from '../../assets/Language/c++.jpg'



const frontend_data = [
  {
    name: "HTML",
    experience: "Experienced"
  },
  {
    name: "CSS",
    experience: "Experienced"
  },
  {
    name: "JavaScript",
    experience: "Experienced"
  },
  {
    name: "Vue JS",
    experience: "Experienced"
  },
  {
    name: "React JS",
    experience: "Experienced"
  },
  {
    name: "Bootstrap",
    experience: "Experienced"
  },
  {
    name: "Tailwind CSS",
    experience: "Intermediate"
  },
  {
    name: "AJAX",
    experience: "Intermediate"
  },
  {
    name: "jQuery",
    experience: "Intermediate"
  },

]

const backend_data = [
  {
    name: "PHP",
    experience: "Experienced"
  },
  {
    name: "Laravel",
    experience: "Experienced"
  },
  {
    name: "Express",
    experience: "Intermediate"
  },
  {
    name: "MySQL",
    experience: "Experienced"
  },
  {
    name: "SQL",
    experience: "Experienced"
  },
  {
    name: "MongoDB",
    experience: "Intermediate"
  },
  {
    name: "Java",
    experience: "Experienced"
  },
  {
    name: "C#",
    experience: "Experienced"
  },
  {
    name: "C++",
    experience: "Intermediate"
  }


]


const logoData = [
  { image: LOGO1 },
  { image: LOGO2 },
  { image: LOGO3 },
  { image: LOGO4 },
  { image: LOGO5 },
  { image: LOGO6 },
  { image: LOGO7 },
  { image: LOGO8 },
  { image: LOGO9 },
  { image: LOGO10 },
  { image: LOGO11 },
  { image: LOGO12 },
  { image: LOGO13 },
  { image: LOGO14 },
  { image: LOGO15 }
]
const Experience = () => {
  return (
    <section id='experience' >
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">

          <h3>Front End Development</h3>
          <div className="experience__content">

            {
              frontend_data.map(({ name, experience }, index) => {
                return (

                  <article className='experience__details' key={index}>
                    <BsShieldFillCheck className='experience__details-icon' />
                    <div>
                      <h4>{name}</h4>
                      <small className='text-light'>{experience}</small>
                    </div>
                  </article>
                )
              })
            }

          </div>
        </div>

        <div className="experience__frontend">

          <h3>Back End Development</h3>
          <div className="experience__content">

            {
              backend_data.map(({ name, experience }, index) => {
                return (

                  <article className='experience__details' key={index}>
                    <BsShieldFillCheck className='experience__details-icon' />
                    <div>
                      <h4>{name}</h4>
                      <small className='text-light'>{experience}</small>
                    </div>
                  </article>
                )
              })
            }

          </div>
        </div>
      </div>

      <div className='container logo-swiper'>
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 5,
            },
          }}
          // mousewheel={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 950,
            disableOnInteraction: false,
          }}
          
          

          modules={[EffectCoverflow, Pagination, Mousewheel, Autoplay]}
          className="mySwiper"
        >

          {
            logoData.map(({ image }, index) => {
              return (
                <SwiperSlide key = {index}>
                  <img src = {image} className="logo-swiper__image" />
                </SwiperSlide>
              )
            })
          }

                

        </Swiper>
      </div>
    </section>
  )
}

export default Experience