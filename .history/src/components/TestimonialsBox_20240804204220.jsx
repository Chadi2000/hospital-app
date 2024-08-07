import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';

const TestimonialsBox = ({name, img, text}) => {
  return (
    <div className='flex flex-col w-[632px]  bg-services'>
      <img src={img} className='w-full rounded-[5px]' />
      <div className='flex flex-col justify-between py-6'>
        <div className='flex flex-col gap-6 w-full px-4 pl-5 pr-[150px]'>
            <h3 className='font-bold text-[20px] leading-[26.5px] tracking-[5%]'>{name}</h3>
            <p className='font-medium text-[18px] leading-[25.9px] tracking-[3%]'>{text}</p>
        </div>
        <div className='text-center'>
            <StarRatings starRatedColor='#0099FF' starDimension='20px'  rating={2} numberOfStars={5} />
        </div>
        
      </div>
    </div>
  )
}

TestimonialsBox.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

export default TestimonialsBox
