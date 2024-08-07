/* eslint-disable react/no-unescaped-entities */
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='flex justify-between bg-services py-[200px] px-[80px]'>

        <div className='flex flex-col justify-between w-[40%]'>
            <div className='flex'>
                <p className='text-btn font-bold text-[20px] leading-[30px] tracking-[5%]'>Hos</p>
                <p className='font-bold text-[20px] leading-[30px] tracking-[5%]'>pital.</p>
            </div>
            <p className='font-normal text-[18px] leading-[34px] tracking-[5%]'>Our hospital tries to answer the challenges in the community's need for quality dental health services but still affordable by a wide audience.</p>
            <div className="flex gap-4">
                <FaFacebook />
                <FaInstagram />
                <FaWhatsapp />
                <FaLinkedin />
                <FaYoutube />
            </div>
        </div>

        <div className="flex flex-col justify-between">
            <h6 className='font-semibold text-[20px] leading-[50px] tracking-[5%]'>Menus</h6>
            <p className='font-normal text-[18px] leading-[28px] tracking-[5%]'>About</p>
            <p className='font-normal text-[18px] leading-[28px] tracking-[5%]'>Home</p>
            <p className='font-normal text-[18px] leading-[28px] tracking-[5%]'>Service</p>
        </div>

        <div className="flex flex-col justify-between">
            <h6 className='font-semibold text-[20px] leading-[50px] tracking-[5%]'>Get Medical Checkup Voucher</h6>
        </div>

    </div>
  )
}

export default Footer
