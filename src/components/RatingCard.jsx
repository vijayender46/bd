
import bd_rating from '../assets/bd_rating.png'
import PropTypes from 'prop-types';

export default function RatingCard({
    title, 
    star,
    auther
  }) {
  return (
    <div className="bd_rating bg-[#eaeaea] shadow-xl md:shadow-none m-2 md:bg-[#fff] p-4 text-center md:text-left">
        <div className="inline-block rating_img pointer-none">
            <img className='w-[145px]' src={bd_rating} alt={star} />
        </div>
        <h2 className='text-xl md:text-2xl font-medium py-5 leading-7 md:leading-8 min-h-40'>{title}</h2>
        <h3 className='text-lg md:text-[20px] font-medium py-5 leading-8'>{auther}</h3>
    </div>
  )
}

RatingCard.propTypes = {
    title: PropTypes.string.isRequired,
    auther: PropTypes.string.isRequired,
    star: PropTypes.string.isRequired,
  };