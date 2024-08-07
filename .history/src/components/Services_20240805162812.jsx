import ServicesCard from './ServicesCard'
import { services } from '../data'

const Services = () => {
  return (
    <div className='bg-services mt-8 lg:mt-14 flex flex-col gap-10 py-[50px] md:py-[70px] lg:py-[100px] w-full'>

      <h6 className='text-title text-center font-semibold text-[20px] leading-[50px]'>Our Services</h6>

      <h3 className='font-semibold text-center text-[25px] md:text-[30px] lg:text-[40px] leading-[50px]'>4 step easy we care your health</h3>

      <div className='flex items-center md:items-start lg:justify-center md:flex-wrap flex-col md:flex-row px-[40px] lg:px-[100px] md:gap-[70px] mt-[100px]'>
        {services.map((service,index) =>(
            <ServicesCard key={index} text={service.text} title={service.title} img={service.img} />
        ))}
        
      </div>

    </div>
  )
}

export default Services
