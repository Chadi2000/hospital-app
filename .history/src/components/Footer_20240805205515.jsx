/* eslint-disable react/no-unescaped-entities */
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-10 bg-services py-[90px] md:py-[150px] px-[50px] md:px-[80px]'>

        <div className='flex flex-col justify-between md:w-[30%] gap-6'>
            <div className='flex'>
                <p className='text-btn font-bold text-[20px] leading-[30px] tracking-[5%]'>Hos</p>
                <p className='font-bold text-[20px] leading-[30px] tracking-[5%]'>pital.</p>
            </div>
            <p className='font-normal text-[18px] leading-[34px] tracking-[5%]'>Our hospital tries to answer the challenges in the community's need for quality dental health services but still affordable by a wide audience.</p>
            <div className="flex gap-4">
                <FaFacebook size={32} className="cursor-pointer" />
                <FaInstagram size={32} className="cursor-pointer" />
                <FaWhatsapp size={32} className="cursor-pointer" />
                <FaLinkedin size={32} className="cursor-pointer" />
                <FaYoutube size={32} className="cursor-pointer" />
                
            </div>
        </div>

        <div className="flex flex-col justify-between gap-6">
            <h6 className='font-semibold text-[20px] leading-[50px] tracking-[5%] cursor-pointer'>Menus</h6>
            <p className='font-normal text-[18px] leading-[28px] tracking-[5%] cursor-pointer' >About</p>
            <p className='font-normal text-[18px] leading-[28px] tracking-[5%] cursor-pointer'>Home</p>
            <p className='font-normal text-[18px] leading-[28px] tracking-[5%] cursor-pointer'>Service</p>
        </div>

        <div className="flex flex-col items-startjustify-between gap-6">
            <h6 className='font-semibold text-[20px] leading-[50px] tracking-[5%]'>Get Medical Checkup Voucher</h6>
            <input type="email" className="w-full h-74px pl-4 bg-input text-white font-semibold text-[20px] leading-[50px] tracking-[5%]" placeholder="Enter Your Email" />
            <button className=" bg-btn w-[216px] h-[63px] rounded-[5px] font-medium text-[18px] leading-[27px] tracking-[5%] cursor-pointer text-white">Subscribe</button>
        </div>

    </div>
  )
}

export default Footer
