import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);

  const toggleMobileMenu = () =>{
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <div className="flex relative justify-between py-[35px] sm:px-[40px] lg:px-[80px] ">
        
      <div className="flex text-[20px] font-bold leading-[30px] cursor-pointer">
        <div className="text-btn">Hos</div>
        <div className="text-black">pital.</div>
      </div>

        <ul className="hidden  md:flex gap-[35px] justify-between font-medium text-[18px] leading-[27px] ">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Service</li>
        </ul>


      <div className="hidden  md:flex justify-center items-center w-[200px] h-[54px] text-btn border-btn border-[2px] cursor-pointer rounded-[5px]
      font-medium  text-[18px] leading-[27px]">
        Login
      </div>

      <div className="flex md:hidden cursor-pointer" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} /> }
      </div>

      {isMobileMenuOpen && (
        <div className="absolute text-center right-[40px] flex flex-col pr-[40px] border-[1px] items-end  top-20 bg-white md:hidden">
          <ul className="flex flex-col gap-4 py-4 font-medium text-[18px] leading-[27px]">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Service</li>
            <li className="cursor-pointer">Login</li>
          </ul>
        </div>
      )}

    </div>
  )
}

export default Navbar
