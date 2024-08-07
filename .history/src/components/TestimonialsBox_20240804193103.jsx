import { Mangol } from '../assets'

const TestimonialsBox = () => {
  return (
    <div className='flex flex-col w-[632px] bg-services gap-'>
      <img src={Mangol} className='w-full rounded-[5px]' />
      <h3 className='font-bold text-[20px] leading-[26.5px] tracking-[5%]'>John Doe</h3>
    </div>
  )
}

export default TestimonialsBox
