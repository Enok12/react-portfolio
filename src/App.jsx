import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'

import './index.css'

import { useEffect, useState } from 'react'
import HashLoader from "react-spinners/HashLoader";
import { motion } from "framer-motion";

import ME from './assets/unnamed.png'




function App() {

  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)

    }, 5000)
  }, [])

  return (
    <>

      {
        loading ?

          //Profile Picture
          <div style={{ height: '100vh', overflowY: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div
              className="box"
              animate={{
                scale: [1, 1.02, 1.02, 1, 1],
                boxShadow: [
                  `0 0 18.2rem #fff,0 0 .2rem #fff,0 0 2rem #4db5ff,0 0 0.8rem #5fb7f6,0 0 2.8rem #71b8eb,inset 0 0 1.3rem #89c0e8 `,
                  `0 0 14.2rem #fff,0 0 .2rem #fff,0 0 2rem #4db5ff,0 0 0.8rem #5fb7f6,0 0 2.8rem #71b8eb,inset 0 0 1.3rem #89c0e8 `,
                  `0 0 12.2rem #fff,0 0 .2rem #fff,0 0 2rem #4db5ff,0 0 0.8rem #5fb7f6,0 0 2.8rem #71b8eb,inset 0 0 1.3rem #89c0e8 `,
                  `0 0 10.2rem #fff,0 0 .2rem #fff,0 0 2rem #4db5ff,0 0 0.8rem #5fb7f6,0 0 2.8rem #71b8eb,inset 0 0 1.3rem #89c0e8 `,
                  `0 0 8.2rem #fff,0 0 .2rem #fff,0 0 2rem #4db5ff,0 0 0.8rem #5fb7f6,0 0 2.8rem #71b8eb,inset 0 0 1.3rem #89c0e8 `
                ],
              }}

              transition={{
                duration: 1,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
              }}
            >
              <div>
                <img src={ME} alt="" />
              </div>

            </motion.div>
            <br />

            {/* Basic Information */}
            <div className='loader-info'>
              <h1>Enok Dilshan</h1>
              <h5>Full Stack Web Developer</h5>
            </div>

            <br />
            <br />

            {/* Loader */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <HashLoader
                color={'#4db5ff'}
                loading={loading}
                size={50}
                speedMultiplier={1.7}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          </div>


          :

          <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
          </>
      }



    </>
  )
}

export default App
