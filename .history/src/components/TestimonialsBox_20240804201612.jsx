import { Mangol } from '../assets'
import { Rating } from 'react-simple-star-rating'

const TestimonialsBox = () => {
  return (
    <div className='flex flex-col w-[632px] h-[692px] bg-services'>
      <img src={Mangol} className='w-full rounded-[5px]' />
      <div className='flex justify-between py-6'>
        <div className='flex flex-col gap-6 w-full px-4 pl-5 pr-[150px]'>
            <h3 className='font-bold text-[20px] leading-[26.5px] tracking-[5%]'>John Doe</h3>
            <p className='font-medium text-[18px] leading-[25.9px] tracking-[3%]'>The service I felt was very good, the staff and doctors were friendly and provided very clear information.</p>
        </div>
      <div className='flex'>
      <Rating ratingValue={40} readonly size={30} initialValue={2} />
      </div>
      </div>
    </div>
  )
}

export default TestimonialsBox
