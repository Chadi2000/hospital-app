import { Mangol } from '../assets'

const TestimonialsBox = () => {
  return (
    <div className='flex flex-col w-[632px] bg-services'>
      <img src={Mangol} className='w-full rounded-[5px]' />
      <div className='flex flex-col gap-6 w-full px-3 py-4'>
        <h3 className='font-bold text-[20px] leading-[26.5px] tracking-[5%]'>John Doe</h3>
      </div>
    </div>
  )
}

export default TestimonialsBox
