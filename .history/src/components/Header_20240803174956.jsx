import Doctor from '../assets/doctor1.png'

const Header = () => {
  return (
    <div className='flex px-[80px]'>
    
      <div className='flex flex-col justify-start items-center gap-10 border-'>
        <h1 >we care about your health</h1>
        <p>check now your healty with our profesional doctor, completed and modern fasilities services</p>
        <div>Check Now</div>
      </div>

      <div className='relative flex items-center'>
        
            <img src={Doctor} alt="doctor" />
        
      </div>

    </div>
  )
}

export default Header
