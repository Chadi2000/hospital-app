
const Navbar = () => {
  return (
    <div className="flex justify-between py-[35px] px-[80px] ">
        
      <div className="text-blue-500 flex text-[20px] font-bold leading-[30px]  ">Hos<div className="text-black">pital.</div> </div>

        <ul className="flex gap-[35px] justify-between ">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Service</li>
        </ul>


      <div></div>

    </div>
  )
}

export default Navbar
