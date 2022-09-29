import React from 'react'
import './testimonial.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

import {Pagination} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";



const data = [
  {
    avatar: AVT1,
    name: 'NAME1',
    review: 'Testing Testing Testing TestingTesting Testing TestingTestingTestingTesting Testing TestingTestingTestingTestingTestingTestingTestingTesting Testing TestingTestingTesting Testing Testing Testing Testing Testing '
  },
  {
    avatar: AVT2,
    name: 'NAME2',
    review: 'Testing Testing Testing TestingTesting Testing TestingTestingTestingTesting Testing TestingTestingTestingTestingTestingTestingTestingTesting Testing TestingTestingTesting Testing Testing Testing Testing Testing '
  }
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable:true }}
  
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