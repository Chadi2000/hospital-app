import Doctor from '../assets/doctor1.png'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row px-[80px] mt-[50px] gap-[100px]'>
    
      <div className='flex flex-col justify-start gap-6 md:gap-10 md:pt-[200px] md:w-1/2'>
        <h1 className='text-[40px] md:text-[56px] font-bold md:leading-[61px] text-title'>we care about your health</h1>
        <p className='text-[16px] md:text-[20px] font-medium leading-[31.2px] text-txt'>check now your healty with our profesional doctor, completed and modern fasilities services</p>
        <button style={{color:'white'}} className='flex w-[200px] h-[54px] rounded-[5px] bg-btn font-medium text-[18px]
        leading-[27px]'>
            Check Now
        </button>
      </div>


      <div className='relative flex justify-center bg-btn h-[577.1px] w-[577.1px] rounded-full'>

        <img src={Doctor} alt="doctor" className='absolute h-[691.55px] w-full rounded-full bottom-0' />

      </div>


    </div>
  )
}

export default Header
