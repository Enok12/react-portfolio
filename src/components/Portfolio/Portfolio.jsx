import React, { useState } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio4.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.webp'
import Modal from 'react-modal'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Mousewheel, Autoplay } from "swiper";

const customStyles = {
  overlay:{
    zIndex :1020,
    backgroundColor: 'rgba(44, 44, 108,0.75)',
    backdropFilter: 'blur(5px)',
    overflow: 'hidden',

  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-15%',
    transform: 'translate(-50%, -50%)',
    borderRadius : '2rem',
    background:'#2c2c6c',
    boxShadow:
    `rgba(22, 31, 39, 0.42) 0px 60px 123px -25px,
    rgba(19, 26, 32, 0.08) 0px 35px 75px -35px`
    
  },
};



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'React Portfolio Project (React JS, CSS)',
    github: 'https://github.com/Enok12/react-portfolio',
    desc: 'Check out my Portfolio Project which is one the First React Projects developed by me. This project will showcase about Myself, Skills and Experience. As technologies React, SwiperJS and EmailJS are used along with pure CSS stylings',
    techstack:'ReactJS, CSS',
    demo:'https://react-portfolio-en.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Inventory System (Laravel, Vue, REST API)',
    github: 'https://github.com/Enok12/inventory-system-vue-laravel',
    desc: 'An Interactive Inventory Management System developed using technologies such as Laravel, VueJS and RESP API. It has features to Manage Employess, Salaries, Expenses, Customers and a POS system ',
    techstack:'Laravel, Vue, REST API'

  },
  {
    id: 3,
    image: IMG3,
    title: 'Facebook Clone (Laravel, Vue, Tailwind, TDD)',
    github: 'https://github.com/Enok12/laravel-facebook_clone',
    desc: 'This is a Facebook Clone Project and also considered as a practise project for Tailwind CSS and Test Driven Development. It uses technologies such as Laravel, VueJS and Tailwind CSS',
    techstack:'Laravel, Vue, Tailwind',
    demo:'https://laravel-facebook-clone.herokuapp.com/'

  },
  {
    id: 4,
    image: IMG4,
    title: 'Dilshan Bookshop Project (Core PHP)',
    github: 'https://github.com/Enok12/dilshan-bookshop-project',
    desc: 'This Project was the Final Project of the BSC Program of Software Engineering and it has been developed using only Pure PHP technology. This project was mainly developed to solve Stock Management Issues faced by certain businesses who handles data manually',
    techstack:'Core PHP, HTML, CSS, JavaScript'

  },
  {
    id: 5,
    image: IMG5,
    title: 'My Bags Frontend Project (React, Material UI)',
    github: 'https//github.com',
    desc: 'This Project is a Frontend Project developed using ReactJS and also considered as a practise project to showcase Material UI Components ',
    techstack:'React, Material UI'

  },
  {
    id: 6,
    image: IMG7,
    title: 'Event Management System (C#,.NET)',
    github: 'https://github.com/Enok12/Event-management-system-C-.NET',
    desc: 'This Project was the First C# project using .NET Framework. This desktop application has features like Creating, Editing, Updating and Deleting Events and further more',
    techstack:'C#,.NET'

  },
  {
    id: 7,
    image: IMG6,
    title: 'Salary Management System (Java)',
    github: 'https://github.com/Enok12/salary-management-system-java',
    desc: 'This proejct was the First Java Project developed using NetBeans IDE. This Desktop Java Application Handles Employee Details and salaries and payrolls',
    techstack:'Java'

  }
]


const Portfolio = () => {

  const [modelisOpen, setmodelisOpen] = useState(false)
  const [mdata, setmdata] = useState({ id: '', image: '', title: '', github: '', desc: '',techstack:'' })


  const ModalComponent = (data) => {
    setmdata({
      id: data.id,
      image: data.image,
      title: data.title,
      github: data.github,
      desc: data.desc,
      techstack :data.techstack
    });
    setmodelisOpen(true);
    
  }

  const closemodal = () => {
    setmodelisOpen(false);
  }

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container ">


        {
          data.map(({ id, image, title, github, desc,techstack,demo }) => {
            return (
              
                <article key={id} className='portfolio__item' onClick={() => ModalComponent({ id, image, title, github, desc,techstack })}>
                  <div className="portfolio__item-image">
                    <img src={image} alt="" />
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-desc'>
                    {desc.slice(0,150)}.......
                  </div>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                    {
                      demo ? <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>: null
                    }
                  </div>
                </article>
                
            )

          })
        }

      </div>

      <div className='container logo-swiper mobile-slider-portfolio'>
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
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
            delay: 5000,
            disableOnInteraction: false,
          }}
          
          

          modules={[EffectCoverflow, Pagination, Mousewheel, Autoplay]}
          className="mySwiper"
        >

          {
            data.map(({ id, image, title, github, desc,techstack,demo }) => {
              return (
                <SwiperSlide key = {id}>
                 <article key={id} className='portfolio__item' onClick={() => ModalComponent({ id, image, title, github, desc,techstack })}>
                    <div className="portfolio__item-image">
                      <img src={image} alt="" />
                    </div>
                    <h3>{title}</h3>
                    <div className='portfolio__item-desc'>
                      {desc.slice(0,150)}.......
                    </div>
                    <div className="portfolio__item-cta">
                      <a href={github} className='btn' target='_blank'>Github</a>
                      {
                        demo ? <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>: null
                      }
                    </div>
                  </article>
                </SwiperSlide>
                  
                  
              )
  
            })
          }

                

        </Swiper>
      </div>

      <h2> </h2>

      <Modal isOpen={modelisOpen} className="" closeTimeoutMS={300} style={customStyles} 
           shouldCloseOnOverlayClick={true} onRequestClose={closemodal} >
        <h2 className='modal-heading'>{mdata.title}</h2>
        <div className='modal-main-container'>
          <div className='modal-image'>
            <img src={mdata.image} alt="" />
          </div>
          <div>
            <h2 className='modal-heading'>Details :</h2>
            <p className='modal-p'>{mdata.desc}</p>

            <h2 className='modal-heading'>Technologies :</h2>
            <p className='modal-p'>{mdata.techstack}</p>
          </div>

        </div>

      </Modal>



    </section>

  )
}

export default Portfolio