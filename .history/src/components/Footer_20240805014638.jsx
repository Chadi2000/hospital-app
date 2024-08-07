/* eslint-disable react/no-unescaped-entities */
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='flex justify-between bg-services py-[150px] px-[80px]'>

        

        <div className="flex flex-col justify-between">
            <h6 className='font-semibold text-[20px] leading-[50px] tracking-[5%] cursor-pointer'>Menus</h6>
            <p className='font-normal text-[18px] leading-[28px] tracking-[5%] cursor-pointer' >About</p>
            <p className='font-normal text-[18px] leading-[28px] tracking-[5%] cursor-pointer'>Home</p>
            <p className='font-normal text-[18px] leading-[28px] tracking-[5%] cursor-pointer'>Service</p>
        </div>

        <div className="flex flex-col justify-between">
            <h6 className='font-semibold text-[20px] leading-[50px] tracking-[5%]'>Get Medical Checkup Voucher</h6>
            <input type="email" className="w-full h-74px pl-4 bg-input text-white font-semibold text-[20px] leading-[50px] tracking-[5%]" placeholder="Enter Your Email" />
            <button className=" bg-btn w-[216px] h-[63px] rounded-[5px] font-medium text-[18px] leading-[27px] tracking-[5%] cursor-pointer text-white">Subscribe</button>
        </div>

    </div>
  )
}

export default Footer
