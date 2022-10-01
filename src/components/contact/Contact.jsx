import React from 'react'
import './contact.css'
import {AiOutlineMail,AiOutlineWhatsApp} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';




const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_spkybub', 'template_xzx7f15', form.current, 'ltapqBCf8OiwNS60f')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Cotant Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>enokdilshan115@gmail.com</h5>
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCHrgmQLXRZwfrVlnLXKFzjlcDXCrDTwMdSJQVqkrbRZwLQngwZnrJbcxPfRFnPtsWVKdckL" target='_blank'>Send a Message</a>

          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Enok Dilshan</h5>
              <a href="https://m.me/enok.dilshan" target='_blank'>Send a Message</a>

          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+940773561146</h5>
              <a href="https://wa.me/0094773561146" target='_blank'>Send a Message</a>

          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>SEND</button>
        </form>
      </div>
    </section>
  )
}

export default Contact