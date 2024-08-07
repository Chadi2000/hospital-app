
const Navbar = () => {
  return (
    <div className="flex justify-between py-[35px] px-[80px] ">
        
      <div className="flex text-[20px] font-bold leading-[30px] cursor-pointer">
        <div className="text-btn">Hos</div>
        <div className="text-black">pital.</div>
      </div>

        <ul className="hidden  md:flex gap-[35px] justify-between font-medium text-[18px] leading-[27px] ">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Service</li>
        </ul>


      <div className="flex justify-center items-center w-[200px] h-[54px] text-btn border-btn border-[2px] cursor-pointer rounded-[5px]
      font-medium  text-[18px] leading-[27px]">
        Login
      </div>

    </div>
  )
}

export default Navbar
