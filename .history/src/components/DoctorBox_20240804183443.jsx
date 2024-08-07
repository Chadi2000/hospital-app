import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import PropTypes from 'prop-types';

const DoctorBox = ({img, name, major}) => {
  return (
    <div className="flex flex-col items-center relative w-[308px] h-[377px]">
      <div>
        <img src={img} alt="man1" className='w-[308px] h-[377px] ' />
      </div>
      <div className='absolute  bg-white w-[260px] h-[139px] bottom-[-40%] rounded-[5px] border-[1px] px-5 py-3 flex flex-col justify-between'>
        <div className='flex gap-5'>
            <FaFacebook size={22} color='black' className='cursor-pointer' />
            <FaInstagram  size={22} color='black' className='cursor-pointer' />
            <FaLinkedin  size={22} color='black' className='cursor-pointer' />
            <FaWhatsapp size={22} color='black' className='cursor-pointer' />
        </div>
         <div className='font-bold text-[20px] leading-[26.5px] tracking-[5%] capitalize'>
            {name}
         </div>
         <div className='font-normal text-[16px] leading-[24.5px] tracking-[5%]'>
            {major}
         </div>
      </div>
    </div>
  )
}

DoctorBox.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
  };

export default DoctorBox
