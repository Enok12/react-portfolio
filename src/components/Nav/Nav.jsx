import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser,AiOutlineBook} from 'react-icons/ai'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {

  const [activeNav,setactiveNav] = useState('#')

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active':''}
      onClick={() => setactiveNav('#')}>
        <AiOutlineHome />
      </a>
      <a href="#about" className={activeNav === '#about' ? 'active':''}
      onClick={() => setactiveNav('#about')}>
        <AiOutlineUser />
      </a>
      <a href="#experience" className={activeNav === '#experience' ? 'active':''}
      onClick={() => setactiveNav('#experience')}>
        <AiOutlineBook />
      </a>
      <a href="#services" className={activeNav === '#services' ? 'active':''}
      onClick={() => setactiveNav('#services')}>
        <RiServiceFill />
      </a>
      <a href="#contact" className={activeNav === '#contact' ? 'active':''}
      onClick={() => setactiveNav('#contact')}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav