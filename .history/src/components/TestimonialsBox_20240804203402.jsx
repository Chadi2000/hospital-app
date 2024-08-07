import { Mangol } from '../assets'
import StarRatings from 'react-star-ratings';

const TestimonialsBox = () => {
  return (
    <div className='flex flex-col w-[632px] h-[592px] bg-services'>
      <img src={Mangol} className='w-full rounded-[5px]' />
      <div className='flex flex-col justify-between py-6'>
        <div className='flex flex-col gap-6 w-full px-4 pl-5 pr-[150px]'>
            <h3 className='font-bold text-[20px] leading-[26.5px] tracking-[5%]'>John Doe</h3>
            <p className='font-medium text-[18px] leading-[25.9px] tracking-[3%]'>The service I felt was very good, the staff and doctors were friendly and provided very clear information.</p>
            <StarRatings rating={2} numberOfStars={5} />
        </div>
        
      </div>
    </div>
  )
}

export default TestimonialsBox
