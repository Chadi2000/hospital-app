
import PropTypes from 'prop-types';

const ServicesCard = ({ img, title, text }) => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center relative bg-white w-[208px] md:w-[258px] lg:w-[308px]
     h-[129px] md:h-[179px] lg:h-[229px] rounded-[5px] px-[40px]'>
      <div className='absolute top-[-30%]'>
        <img src={img} alt="" className='h-[80px] md:h-[95px] lg:h-[111px]' />
      </div>
      <div className='text-title font-semibold text-[20px] leading-[31.2px]'>
        {title}
      </div>
      <div className='text-title font-medium text-[18px] leading-[28px] text-center'>
        {text}
      </div>
    </div>
  );
};

// Define prop types for the component
ServicesCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ServicesCard;
