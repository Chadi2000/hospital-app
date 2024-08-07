import ServicesCard from './ServicesCard'
import { services } from '../data'

const Services = () => {
  return (
    <div className='bg-services mt-14 flex flex-col gap-10 items-center py-[100px] '>

      <h6 className='text-title font-semibold text-[20px] leading-[50px]'>Our Services</h6>

      <h3 className='font-semibold text-[40px] leading-[50px]'>4 step easy we care your health</h3>

      <div className='flex justify-between flex-wrap gap-7 mt-[100px] w-full'>
        {services.map((service,index) =>(
            <ServicesCard key={index} text={service.text} title={service.title} img={service.img} />
        ))}
      </div>

    </div>
  )
}

export default Services
