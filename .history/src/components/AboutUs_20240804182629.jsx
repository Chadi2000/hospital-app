import Doctora from '../assets/;

const AboutUs = () => {
  return (
    <div className='flex gap-[150px] px-[100px] py-[100px]'>
      
      <div className='bg-aboutus w-[602px] h-[602px] rounded-[316px] relative'>
        <img src={Doctora} alt="" className='h-[602px]' />
      </div>

      <div className='flex flex-col items-start gap-10 pt-14 w-[50%]'>
        <h6 className='font-semibold text-[20px] leading-[50px] text-title'>About Us</h6>
        <h3 className='font-semibold text-[40px] leading-[50px] text-title'>we help your health</h3>
        <p className='font-medium text-[18px] leading-[33.03px] tracking-[3%]'>This profile describes the activities of health services and medical support as well as the facilities and conditions of the General Hospital which is reflected in the general public served from all groups, religions and beliefs, ethnicity and the level and frequency of bed occupancy which continues to increase significantly.</p>

        <div className='flex items-center justify-center mt-[40px] py-[13px] px-[63px] rounded-[5px] bg-btn text-white font-medium text-[18px] leading-[27px] cursor-pointer'>
            More About Us
        </div>

      </div>

      

    </div>
  )
}

export default AboutUs
