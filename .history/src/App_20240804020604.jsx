import './App.css'
import AboutUs from './components/AboutUs'
import Header from './components/Header'
import Navbar from './components/Navbar'
import OurDoctors from './components/OurDoctors'
import Services from './components/Services'

function App() {

  return (
    <div className='flex flex-col'>
      <Navbar />
      <Header />
      <Services />
      <AboutUs />
      <OurDoctors />
    </div>
  )
}

export default App
