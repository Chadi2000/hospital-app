/* eslint-disable react/no-unescaped-entities */
import TestimonialsBox from './TestimonialsBox'
import { test } from '../data'

const Testimonials = () => {
  return (
    <div className='flex flex-col pt-[60px] text-center md:text-start md:pt-[100px] px-6 md:px-[80px] gap-8'>
      <h6 className='font-semibold text-title text-[20px] heading-[50px] tracking-[5%]'>Testimonials</h6>
      <h3 className='font-semibold text-title text-[30px] md:text-[40px] heading-[50px] tracking-[5%] xl:w-[60%]'>what they say after visiting our hospital</h3>
      <div className='flex flex-col md:items-start md:flex-row gap-5 justify-center md:justify-start flex-wrap'>
        {test.map((test,index) =>(
            <TestimonialsBox key={index} name={test.name} img={test.img} text={test.text} />
        ))}
      </div>
      <div className='flex flex-col justify-between bg-black w-full h-[248px] md:h-[348px] py-5 md:py-8 px-7 md:px-12'>
        <h3 className='text-white text-[25px] md:text-[32px] lg:text-[40px] leading-[50px] font-semibold tracking-[5%] '>Let's consult your health with our doctor</h3>
        <div className='flex gap-2 items-center flex-col md:flex-row justify-between'>
            <p className='text-white text-[18px] leading-[28px] font-semibold tracking-[5%]'>we will provide the best service.</p>
            <button className='w-[216px] h-[54px] rounded-[5px] bg-btn text-white text-center font-medium text-[18px] leading-[27px] tracking-[5%]'>
                Contact Us
            </button>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Testimonials
