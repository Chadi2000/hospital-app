import TestimonialsBox from './TestimonialsBox'
import { test } from '../data'

const Testimonials = () => {
  return (
    <div className='flex flex-col pt-[100px] px-[80px] gap-8'>
      <h6 className='font-semibold text-[20px] heading-[50px] tracking-[5%]'>Testimonials</h6>
      <h3 className='font-semibold text-[40px] heading-[50px] tracking-[5%] w-[50%]'>what they say after visiting our hospital</h3>
      <div className='flex gap-5 justify-center flex-wrap'>
        {test.map((test,index) =>(
            <TestimonialsBox key={index} name={test.name} img={test.img} text={test.text} />
        ))}
      </div>
      <div className='bg-black w-full py-8 px-12'>

      </div>
      <div></div>
    </div>
  )
}

export default Testimonials
