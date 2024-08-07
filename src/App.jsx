import './App.css'
import AboutUs from './components/AboutUs'
import Header from './components/Header'
import Navbar from './components/Navbar'
import OurDoctors from './components/OurDoctors'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  return (
    <div className='flex flex-col md:gap-10'>
      <Navbar />
      <Header />
      <Services />
      <AboutUs />
      <OurDoctors />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
