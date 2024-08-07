import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';

const TestimonialsBox = ({name, img, text}) => {
  return (
    <div className='flex flex-col flex-grow w-full md:w-1/2 bg-services'>
      <img src={img} className='w-full lg:h-[600px]  rounded-[5px]' />
      <div className='flex flex-col justify-between py-6'>
        <div className='flex flex-col gap-6 w-full px-4 pl-5 lg:pr-[100px]'>
            <h3 className='font-bold text-[17px] md:text-[20px] leading-[20px] md:leading-[26.5px] tracking-[5%]'>{name}</h3>
            <p className='font-medium text-[15px]  md:text-[18px] leading-[25.9px] tracking-[3%]'>{text}</p>
        </div>
        <div className='text-center pt-2'>
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
