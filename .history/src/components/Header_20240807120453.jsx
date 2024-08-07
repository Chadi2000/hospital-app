import Doctor from '../assets/doctor1.png'

const Header = () => {
  return (
    <div className='container mx-auto flex flex-col items-center md:flex-row px-[40px] md:px-[30px] mt-[50px] gap-[100px]'>
    
      <div className='flex flex-col items-center md:items-start justify-start gap-4 md:gap-10 lg:pt-[200px] md:w-1/2'>
        <h1 className='text-[40px] md:text-[56px] font-bold md:leading-[61px] text-title ca'>we care about your health</h1>
        <p className='text-[16px] md:text-[20px] font-medium leading-[31.2px] text-txt'>check now your healty with our profesional doctor, completed and modern fasilities services</p>
        <button style={{color:'white'}} className=' w-[200px] h-[54px] rounded-[5px] bg-btn font-medium text-[18px]
        leading-[27px]'>
            Check Now
        </button>
      </div>


      <div className='relative  flex bg-btn w-[277.1px] h-[377.1px] md:[377.1px] lg:h-[577.1px] lg:w-[577.1px] rounded-full'>

        <img src={Doctor} alt="doctor" className='absolute h-[450px] lg:h-[691.55px] w-full object-contain rounded-full bottom-0' />

      </div>


    </div>
  )
}

export default Header
