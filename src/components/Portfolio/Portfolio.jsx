import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'React Portfolio Project',
    github: 'https://github.com/Enok12/react-portfolio',
    demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'Inventory System (Laravel, Vue, REST API)',
    github: 'https://github.com/Enok12/inventory-system-vue-laravel',
    demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: 'Facebook Clone (Laravel, Vue, Tailwind)',
    github: 'https://github.com/Enok12/laravel-facebook_clone',
    demo: ''
  },
  {
    id: 4,
    image: IMG4,
    title: 'Dilshan Bookshop Project (Core PHP)',
    github: 'https://github.com/Enok12/dilshan-bookshop-project',
    demo: ''
  },
  {
    id: 5,
    image: IMG2,
    title: 'My Bags Frontend Project (React, Material UI)',
    github: 'https//github.com',
  
  },
  {
    id: 6,
    image: IMG2,
    title: 'Event Management System (C#,.NET)',
    github: 'https://github.com/Enok12/Event-management-system-C-.NET',
  
  },
  {
    id: 6,
    image: IMG2,
    title: 'Salary Management System (Java)',
    github: 'https://github.com/Enok12/salary-management-system-java',
   
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container ">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio