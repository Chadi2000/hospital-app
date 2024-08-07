import './App.css'
import AboutUs from './components/AboutUs'
import Header from './components/Header'
import Navbar from './components/Navbar'
import OurDoctors from './components/OurDoctors'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <div className='flex flex-col'>
      <Navbar />
      <Header />
      <Services />
      <AboutUs />
      <OurDoctors />
      <Testimonials />
    </div>
  )
}

export default App
