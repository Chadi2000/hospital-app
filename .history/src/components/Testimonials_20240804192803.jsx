import TestimonialsBox from './TestimonialsBox'

const Testimonials = () => {
  return (
    <div className='flex flex-col pt-[100px] px-[80px] gap-8'>
      <h6 className='font-semibold text-[20px] heading-[50px] tracking-[5%]'>Testimonials</h6>
      <h3 className='font-semibold text-[40px] heading-[50px] tracking-[5%] w-[50%]'>what they say after visiting our hospital</h3>
      <div>
        <TestimonialsBox />
      </div>
      <div></div>
    </div>
  )
}

export default Testimonials
