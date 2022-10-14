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
    desc: 'Check out my Portfolio Project which is one the First React Projects developed by me. This project will showcase about Myself, Skills and Experience. As technologies React, SwiperJS and EmailJS are used along with pure CSS stylings'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Inventory System (Laravel, Vue, REST API)',
    github: 'https://github.com/Enok12/inventory-system-vue-laravel',
    desc: 'An Interactive Inventory Management System developed using technologies such as Laravel, VueJS and RESP API. It has features to Manage Employess, Salaries, Expenses, Customers and a POS system '
  },
  {
    id: 3,
    image: IMG3,
    title: 'Facebook Clone (Laravel, Vue, Tailwind)',
    github: 'https://github.com/Enok12/laravel-facebook_clone',
    desc: 'This is a Facebook Clone Project and also considered as a practise project for Tailwind CSS and Test Driven Development. It uses technologies such as Laravel, VueJS and Tailwind CSS'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Dilshan Bookshop Project (Core PHP)',
    github: 'https://github.com/Enok12/dilshan-bookshop-project',
    desc: 'This Project was the Final Project of the BSC Program of Software Engineering and it has been developed using only Pure PHP technology. This project was mainly developed to solve Stock Management Issues faced by certain businesses who handles data manually'
  },
  {
    id: 5,
    image: IMG2,
    title: 'My Bags Frontend Project (React, Material UI)',
    github: 'https//github.com',
    desc: 'This Project is a Frontend Project developed using ReactJS and also considered as a practise project to showcase Material UI Components '

  },
  {
    id: 6,
    image: IMG7,
    title: 'Event Management System (C#,.NET)',
    github: 'https://github.com/Enok12/Event-management-system-C-.NET',
    desc: 'This Project was the First C# project using .NET Framework. This desktop application has features like Creating, Editing, Updating and Deleting Events and further more...... '
  },
  {
    id: 7,
    image: IMG6,
    title: 'Salary Management System (Java)',
    github: 'https://github.com/Enok12/salary-management-system-java',
    desc: 'This proejct was the First Java Project developed using NetBeans IDE. This Desktop Java Application Handles Employee Details and salaries and payrolls'
  }
]


const Portfolio = () => {

  const [modelisOpen, setmodelisOpen] = useState(false)
  const [mdata, setmdata] = useState({ id: '', image: '', title: '', github: '', desc: '' })


  const ModalComponent = (data) => {

    setmodelisOpen(true);
    setmdata({
      id: data.id,
      image: data.image,
      title: data.title,
      github: data.github,
      desc: data.desc
    });
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
          data.map(({ id, image, title, github, desc }) => {
            return (
              <div>
                <article key={id} className='portfolio__item' onClick={() => ModalComponent({ id, image, title, github, desc })}>
                  <div className="portfolio__item-image">
                    <img src={image} alt="" />
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-desc'>
                    {desc.slice(0,150)}.......
                  </div>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                    {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                  </div>
                </article>



              </div>


            )

          })
        }

      </div>

      <Modal isOpen={modelisOpen} className="" closeTimeoutMS={300} style={customStyles} 
           shouldCloseOnOverlayClick={true} onRequestClose={closemodal} >
        <h2 className='modal-color-text'>{mdata.title}</h2>
        <div className='modal-main-container'>
          <div className='modal-image'>
            <img src={mdata.image} alt="" />
          </div>
          <div>
            <h2 className='modal-h2'>Details :</h2>
            <p className='modal-color-text'>{mdata.desc}</p>

            <h2 className='modal-h2'>Technologies :</h2>
            <p className='modal-color-text'>Vue JS, Laravel</p>
          </div>

        </div>

      </Modal>



    </section>

  )
}

export default Portfolio