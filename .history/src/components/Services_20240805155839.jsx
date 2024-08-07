import ServicesCard from './ServicesCard'
import { services } from '../data'

const Services = () => {
  return (
    <div className='bg-services mt-8 lg:mt-14 flex flex-col gap-10 items-center py-[50px] md:py-[70px] lg:py-[100px] '>

      <h6 className='text-title font-semibold text-[20px] leading-[50px]'>Our Services</h6>

      <h3 className='font-semibold  text-[25px] md:text-[30px] lg:text-[40px] leading-[50px]'>4 step easy we care your health</h3>

      <div className='flex flex-col md:flex-row justify-between gap-[80px]  md:gap-[150px] mt-[100px]'>
        {services.map((service,index) =>(
            <ServicesCard key={index} text={service.text} title={service.title} img={service.img} />
        ))}
        {services.map((service,index) =>(
            <ServicesCard key={index} text={service.text} title={service.title} img={service.img} />
        ))}
      </div>

    </div>
  )
}

export default Services
