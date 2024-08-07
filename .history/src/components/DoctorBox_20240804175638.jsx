import Man1 from '../assets/man1.jpeg'

const DoctorBox = () => {
  return (
    <div className="flex flex-col items-center relative w-[308px] h-[377px]">
      <div>
        <img src={Man1} alt="man1" className='w-full h-full ' />
      </div>
      <div className='absolute  bg-white w-[260px] h-[139px] bottom-[-40%] rounded-[5px] border-[1px]'>
        <h1>hello</h1>
      </div>
    </div>
  )
}

export default DoctorBox
