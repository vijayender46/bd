import { useState } from 'react';
import { caseColors } from '../constants';
import Title from './Title';
import Button from './Button';

const ColorSwatch = () => {
  const [selectedImage, setSelectedImage] = useState(caseColors[0].image);

  const handleColorClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="md:flex w-full h-full lg:py-28">
      <div className="md:flex-1 block">
        <img
          src={selectedImage}
          alt="Selected"
          className="max-w-full h-auto transition-opacity duration-500 ease-in-out opacity-100"
        />
      </div>

      {/* Left Side: Color Swatches */}
      <div className="md:flex-1 block md:pl-4">
        <div className='bd_boggle_cases lg:pl-6'>
            <Title titleCss='md:text-5xl text-3xl leading-10 font-medium text-dark' titleText='Shop by accessories.' />
            <h3 className='text-2xl font-medium text-dark max-w-md leading-8 mt-6 md:mt-10'>
                Clear stylish protective cases for your boggles and our ultra soft microfibre cleaning cloth to keep everything looking shiny and new.</h3>
            <div className='flex gap-4 mt-4'>
            {caseColors.map((color, index) => (
                <div
                    key={index}
                    className="w-[22px] h-[22px] md:mt-3 mt-1 rounded-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
                    style={{ backgroundColor: color.color }}
                    onClick={() => handleColorClick(color.image)}
                ></div>
                ))}
            </div>
        </div>
        <Button buttonClass="md:ml-8 mt-6 mb-14 md:mb-2 text-light bg-dark hover:bg-blue" buttonText='Shop accessories' />
      </div>
    </div>
  );
};

export default ColorSwatch;