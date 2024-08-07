import Doctor from '../assets/doctor1.png'

const Header = () => {
  return (
    <div className='flex px-[80px] border-[10px] mt-[50px]'>
    
      <div className='flex flex-col justify-start gap-10 border-[1px] pt-[200px] w-1/2'>
        <h1 className='text-[56px] font-bold leading-[61px]'>we care about your health</h1>
        <p>check now your healty with our profesional doctor, completed and modern fasilities services</p>
        <div>Check Now</div>
      </div>

      <div className=' flex justify-center items-center'>
        <div className='bg-btn h-[577.1px] w-[577.1px] rounded-full'></div>
        
      </div>

    </div>
  )
}

export default Header
