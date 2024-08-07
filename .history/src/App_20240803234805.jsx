import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {

  return (
    <div className='flex flex-col'>
      <Navbar />
      <Header />
      <Services />
    </div>
  )
}

export default App
