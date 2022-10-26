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
          <div style={{ height: '100vh', overflowY: 'hidden' }}>
            <motion.div
              className="box"
              animate={{
                scale: [1, 1.02, 1.02, 1, 1],
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
