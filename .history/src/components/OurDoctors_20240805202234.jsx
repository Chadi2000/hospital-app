import DoctorBox from "./DoctorBox"
import { doctors } from "../data"


const OurDoctors = () => {
  return (
    <div className='flex flex-col items-center bg-services gap-[40px] py-[150px]'>
      <h6 className='text-title font-semibold text-[20px] leading-[50px] tracking-[5%]'>Our Doctors</h6>
      <h3 className='capitalize text-[40px] leading-[50px] font-semibold tracking-[5%] text-center'>visit our professional specialists</h3>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-5">
        {doctors.map((doctor,index) =>(
            <DoctorBox key={index} img={doctor.img} name={doctor.name} major={doctor.major} />
        ))}
      </div>
    </div>
  )
}

export default OurDoctors
