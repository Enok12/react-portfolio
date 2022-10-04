import React from 'react'
import './experience.css'
import { BsShieldFillCheck } from 'react-icons/bs'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination,Mousewheel,Autoplay } from "swiper";

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

      <div>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
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
       
        pagination={true}
        modules={[EffectCoverflow, Pagination,Mousewheel,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  )
}

export default Experience