
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom
import PropTypes from 'prop-types'; // Import PropTypes for type-checking
import Title from './Title'; // Import the Title component

const ProductCard = ({ 
  productLink, 
  defaultImage, 
  hoverImage, 
  title, 
  titleCss, 
  // subtitle, 
  price, 
  badgeColor,
  badgeCss 
}) => {
  return (
    <div className="product_card group mb-8">
      <Link to={productLink} className="w-full">
        <div className="product_model_img relative overflow-hidden">
          {/* The default image */}
          <div className="active_img">
            <img src={defaultImage} alt={title} />
          </div>

          {/* The hover image */}
          <div className="hover_img absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-450">
            <img src={hoverImage} alt={`${title} Hover`} />
          </div>
        </div>

        <div className="product_card_info inline-block">
          <Title titleText={title} titleCss={`text-xl md:text-2xl leading-7 ${titleCss}`} />
          <h4 className="font-medium md:text-xl text-lg text-gray">{price}</h4>
          <span className={`inline-block w-[18px] h-[18px] rounded-full mt-2 ${badgeCss} duration-450`} style={{ backgroundColor: badgeColor }}></span>
        </div>
      </Link>
    </div>
  );
};

// Define PropTypes for type-checking
ProductCard.propTypes = {
  productLink: PropTypes.string.isRequired,
  defaultImage: PropTypes.string.isRequired,
  hoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleCss: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.string.isRequired,
  badgeColor: PropTypes.string,
  badgeCss: PropTypes.string,
};

ProductCard.defaultProps = {
  titleCss: 'mt-6 font-medium text-2xl',
  badgeCss: 'bg-[#4D92AD]',
};

export default ProductCard;