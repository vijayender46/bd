import { useState } from 'react';
// import { caseColors } from '../constants';
import Title from './Title';
import Button from './Button';
import bd_case_pink from '../assets/bd_case_pink.png';
import bd_case_black from '../assets/bd_case_black.png';
import bd_case_blue from '../assets/bd_case_blue.png';
import bd_case_aqua from '../assets/bd_case_aqua.png';
import bd_case_clear from '../assets/bd_case_clear.png';
import bd_case_purple from '../assets/bd_case_purple.png';


const caseColors = [
  { color: '#E8C6CB', image: bd_case_pink },
  { color: '#111111', image: bd_case_black },
  { color: '#4D92AD', image: bd_case_blue },
  { color: '#868686', image: bd_case_black },
  { color: '#78AF9E', image: bd_case_aqua },
  { color: '#cccccc', image: bd_case_clear },
  { color: '#9B8FAB', image: bd_case_purple },
];

const ColorSwatch = () => {
  const [selectedImage, setSelectedImage] = useState(caseColors[0].image);

  const handleColorClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="md:flex w-full h-full lg:py-28 px-6 md:px-0">
      <div className="md:flex-1 block">
        <img
          src={selectedImage}
          alt="Selected"
          className="max-w-full h-auto transition-opacity duration-500 ease-in-out opacity-100"
        />
      </div>

      {/* Left Side: Color Swatches */}
      <div className="md:flex-1 block md:pl-4 text-center md:text-left mb:mb-0 mb-14">
        <div className='bd_boggle_cases lg:pl-6 '>
            <Title titleCss='md:text-5xl text-3xl leading-10 font-medium text-dark' titleText='Shop by accessories.' />
            <h3 className='md:text-2xl text-xl font-medium text-dark max-w-md leading-6 md:leading-8 mt-4 md:mt-10'>
                Clear stylish protective cases for your boggles and our ultra soft microfibre cleaning cloth to keep everything looking shiny and new.</h3>
            <div className='flex gap-4 mt-4 justify-center md:justify-start'>
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
        <Button buttonClass="lg:ml-8 mt-6 md:mb-2 text-light bg-dark hover:bg-blue" buttonText='Shop accessories' />
      </div>
    </div>
  );
};

export default ColorSwatch;