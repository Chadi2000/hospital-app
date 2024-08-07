/* eslint-disable react/no-unescaped-entities */
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between  gap-10 bg-services py-[90px] md:py-[150px] px-[50px] md:px-[80px]'>

        <div className='flex flex-col justify-between items-center md:items-start lg:w-[30%] gap-6'>
            <div className='flex'>
                <p className='text-btn font-bold text-[20px] leading-[30px] tracking-[5%]'>Hos</p>
                <p className='font-bold text-[20px] leading-[30px] tracking-[5%]'>pital.</p>
            </div>
            <p className='font-normal text-[18px] leading-[34px] tracking-[5%]'>Our hospital tries to answer the challenges in the community's need for quality dental health services but still affordable by a wide audience.</p>
            <div className="flex flex- gap-4">
                <FaFacebook className="cursor-pointer text-[20px] md:text-[26px] lg:text-[32px]" />
                <FaInstagram className="cursor-pointer text-[20px] md:text-[26px] lg:text-[32px]" />
                <FaWhatsapp className="cursor-pointer text-[20px] md:text-[26px] lg:text-[32px]" />
                <FaLinkedin className="cursor-pointer text-[20px] md:text-[26px] lg:text-[32px]" />
                <FaYoutube className="cursor-pointer text-[20px] md:text-[26px] lg:text-[32px]" />
                
            </div>
        </div>

        <div className="flex flex-col text-center justify-between gap-6">
            <h6 className='font-semibold text-[20px] leading-[50px] tracking-[5%] cursor-pointer'>Menus</h6>
            <p className='font-normal text-[18px] leading-[28px] tracking-[5%] cursor-pointer' >About</p>
            <p className='font-normal text-[18px] leading-[28px] tracking-[5%] cursor-pointer'>Home</p>
            <p className='font-normal text-[18px] leading-[28px] tracking-[5%] cursor-pointer'>Service</p>
        </div>

        <div className="flex flex-col items-center md:items-start justify-between gap-6">
            <h6 className='font-semibold text-[16px] md:text-[20px] leading-[50px] tracking-[5%]'>Get Medical Checkup Voucher</h6>
            <input type="email" className="w-full h-50px  pl-4 bg-input text-white font-semibold text-[16px] md:text-[20px] leading-[40px] md:leading-[50px] tracking-[5%]" placeholder="Enter Your Email" />
            <button className=" bg-btn w-[180px] md:w-[216px] h-[53px] md:h-[63px] rounded-[5px] font-medium text-[18px] leading-[27px] tracking-[5%] cursor-pointer text-white">Subscribe</button>
        </div>

    </div>
  )
}

export default Footer
