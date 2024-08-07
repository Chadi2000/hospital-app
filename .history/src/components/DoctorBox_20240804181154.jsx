import Man1 from '../assets/man1.jpeg'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const DoctorBox = () => {
  return (
    <div className="flex flex-col items-center relative w-[308px] h-[377px]">
      <div>
        <img src={Man1} alt="man1" className='w-full h-full ' />
      </div>
      <div className='absolute  bg-white w-[260px] h-[139px] bottom-[-40%] rounded-[5px] border-[1px] p-5 flex flex-col justify-between'>
        <div className='flex gap-4'>
            <FaFacebook size={22} color='black' className='cursor-pointer' />
            <FaInstagram  size={22} color='black' className='cursor-pointer' />
            <FaLinkedin  size={22} color='black' className='cursor-pointer' />
            <FaWhatsapp size={22} color='black' className='cursor-pointer' />
        </div>
         <div className='font-bold text-[20px] leading-[26.5px] tracking-[5%]'>
            dr. Moeharman, Sp. THT.KL
         </div>
      </div>
    </div>
  )
}

export default DoctorBox
