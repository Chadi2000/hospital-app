import Doctora from '../assets/doctora.png';

const AboutUs = () => {
  return (
    <div className='flex gap-[200px] px-[100px] py-[100px]'>
      
      <div className='bg-aboutus w-[602px] h-[602px] rounded-[316px] relative '>
        <img src={Doctora} alt="" className='h-[602px]' />
      </div>

      <div className='flex flex-col gap-10'>
        <h6 className='font-semibold text-[20px] leading-[50px] text-title'>About Us</h6>
      </div>

    </div>
  )
}

export default AboutUs
