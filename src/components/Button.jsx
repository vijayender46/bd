import { Link } from 'react-router-dom'


const Button = ({ buttonLink, buttonClass, buttonText }) => {
  if (buttonLink) {
    return (
      <Link to={buttonLink} className={`rounded-full font-medium px-8 mb-2 py-3 inline-block ${buttonClass}`}>
        {buttonText}
      </Link>
    );
  }

  // Otherwise, render a button element
  return (
    <button className={`rounded-full font-medium px-8 mb-2 py-3 inline-block ${buttonClass}`}>
      {buttonText}
    </button>
  );
};

export default Button;

