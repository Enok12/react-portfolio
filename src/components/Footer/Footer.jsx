import React from 'react'
import './footer.css'
import {AiFillFacebook,AiOutlineInstagram,AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>ENOK</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/enok.dilshan/" target="_blank"><AiFillFacebook/></a>
        <a href="https://www.instagram.com/enok_dilshan/ " target="_blank"><AiOutlineInstagram/></a>
        <a href="https://github.com/Enok12" target="_blank"><AiFillGithub/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; ENOK DILSHAN. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer