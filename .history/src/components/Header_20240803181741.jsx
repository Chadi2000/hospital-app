import Doctor from '../assets/doctor1.png'

const Header = () => {
  return (
    <div className='flex px-[80px] border-[10px] mt-[50px]'>
    
      <div className='flex flex-col justify-start gap-10 pt-[200px] w-1/2'>
        <h1 className='text-[56px] font-bold leading-[61px]'>we care about your health</h1>
        <p className='text-[20px] font-medium leading-[31.2px]'>check now your healty with our profesional doctor, completed and modern fasilities services</p>
        <button style={{color:'white'}} className='w-[200px] h-[54px] rounded-[5px] bg-btn font-medium text-[18px]
        leading-[27px]'>
            Check Now
        </button>
      </div>

      <div className='flex  items-center text-center'>
        <div className='relative flex items-center justify-center bg-btn h-[577.1px] w-[577.1px] rounded-full'>
            <div className='absolute bottom-0 rounded-full '>
                <img src={Doctor} alt="doctor" className='h-[691.55px] rounded-[30%]' />
            </div>
        </div>
        
      </div>

    </div>
  )
}

export default Header
