import React from 'react'
import './testimonial.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

import {Pagination} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Autoplay } from "swiper";


// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";



const data = [
  {
    avatar: AVT1,
    name: 'Shemalka Nishen',
    review: 'Great service man I got more than I was expecting and it was such a good website to use for my business! Definitely impressed with the content that I paid for and definitely will go back to him whenever I need a website made. '
  },
  {
    avatar: AVT2,
    name: 'Samdani Pasanya',
    review: 'Enok was exceptional throughout the entire process. He was responsive, direct, professional, and helpful. He over-delivered early. I would definitely recommend Enok if this is your first website build. Enok walks you through and communicates exactly what he needs to complete the project! '
  },
  {
    avatar: AVT3,
    name: 'Nalinda Dilshan',
    review: 'Very thorough in his replies and explanations. Not afraid to ask for everything and go above and beyond.'
  },
  {
    avatar: AVT4,
    name: 'Steve Mel',
    review: 'Enok was amazing. Was very responsive and quick with any revisions we wanted. He also is very knowledgeable about what he does and gave me a lot of great information. Will definitely use in the future. Amazing!!'
  }
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      modules={[Pagination,Autoplay]}
      spaceBetween={40}
      loop={true}
      slidesPerView={1}
      pagination={{ clickable:true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
  
      >

        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key= {index}className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonial