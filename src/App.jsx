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

function App() {

  return (
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
  )
}

export default App
