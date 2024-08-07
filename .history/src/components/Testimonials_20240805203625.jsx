/* eslint-disable react/no-unescaped-entities */
import TestimonialsBox from './TestimonialsBox'
import { test } from '../data'

const Testimonials = () => {
  return (
    <div className='flex flex-col pt-[60px] md:pt-[100px] px-6 md:px-[80px] gap-8'>
      <h6 className='font-semibold text-[20px] heading-[50px] tracking-[5%]'>Testimonials</h6>
      <h3 className='font-semibold text-[40px] heading-[50px] tracking-[5%] w-[50%]'>what they say after visiting our hospital</h3>
      <div className='flex gap-5 justify-center flex-wrap'>
        {test.map((test,index) =>(
            <TestimonialsBox key={index} name={test.name} img={test.img} text={test.text} />
        ))}
      </div>
      <div className='flex flex-col justify-between bg-black w-full h-[348px] py-8 px-12'>
        <h3 className='text-white text-[40px] leading-[50px] font-semibold tracking-[5%] '>Let's consult your health with our doctor</h3>
        <div className='flex justify-between'>
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
