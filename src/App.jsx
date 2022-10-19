import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'

import './index.css'
import Services from './components/Services/Services'
import { useEffect, useState } from 'react'
import HashLoader from "react-spinners/HashLoader";


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
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <HashLoader
              color={'#4db5ff'}
              loading={loading}
              size={150}
              speedMultiplier={1.7}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
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
