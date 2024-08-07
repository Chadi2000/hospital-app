import DoctorBox from "./DoctorBox"

const OurDoctors = () => {
  return (
    <div className='flex flex-col items-center bg-services gap-[40px]'>
      <h6 className='text-title font-semibold text-[20px] leading-[50px] tracking-[5%] pt-[100px]' >Our Doctors</h6>
      <h3 className='capitalize text-[40px] leading-[50px] font-semibold tracking-[5%] text-center'>visit our professional specialists</h3>
      <div className="h-full">
        <DoctorBox />
      </div>
    </div>
  )
}

export default OurDoctors
