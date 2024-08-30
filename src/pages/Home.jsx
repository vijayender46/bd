import ImageSection from "../components/ImageSection";
import TextSection from "../components/TextSection";
import NotificationBar from "../components/NotificationBar";
import { NOTIFICATION_TEXT } from "../constants";
import CustomCarousel from "../components/CustomCarousel";
import Title from "../components/Title";

import BD_Bogle_Hero from '../assets/BD_Bogle_Hero.png'
import BD_selfcare from '../assets/bd_selfcare.png'
import BD_selfcare_boggles from '../assets/bd_slfcare_boggles.png'
// import { productsData } from "../constants";
import ProductCard from "../components/ProductCard";
import ColorSwatch from "../components/ColorSwatch";
import Button from "../components/Button";

// product images
import bd_boggles_blue from '../assets/bd_boggles_blue.png';
import bd_boggles_blue_hover from '../assets/bd_boggles_blue_hover.png';
import bd_boggles_clear from '../assets/bd_boggles_clear.png';
import bd_boggles_clear_hover from '../assets/bd_boggles_clear_hover.png';
import bd_boggles_purple from '../assets/bd_boggles_purple.png';
import bd_boggles_purple_hover from '../assets/bd_boggles_purple_hover.png';
import bd_boggles_pink from '../assets/bd_boggles_pink.png';
import bd_boggles_pink_hover from '../assets/bd_boggles_pink_hover.png';
import bd_boggles_black from '../assets/bd_boggles_black.png';
import bd_boggles_black_hover from '../assets/bd_boggles_black_hover.png';
import bd_boggles_aqua from '../assets/bd_boggles_aqua.png';
import bd_boggles_aqua_hover from '../assets/bd_boggles_aqua_hover.png';
import bd_boggles_grey from '../assets/bd_boggles_grey.png';
import bd_boggles_grey_hover from '../assets/bd_boggles_grey_hover.png';
import { useState } from "react";



const productsData = [
  {
    id: 1,
    productLink: '/product/1',
    defaultImage: bd_boggles_blue,
    hoverImage: bd_boggles_blue_hover,
    title: 'BD Boggle Blue',
    price: 'from £1000.00',
    badgeColor: '#4D92AD',
  },
  {
    id: 2,
    productLink: '/product/2',
    defaultImage: bd_boggles_clear,
    hoverImage: bd_boggles_clear_hover,
    title: 'BD Boggle Clear',
    price: 'from £1000.00',
    badgeColor: '#ccc',
  },
  {
    id: 3,
    productLink: '/product/3',
    defaultImage: bd_boggles_purple,
    hoverImage: bd_boggles_purple_hover,
    title: 'BD Boggle Purple',
    price: 'from £1000.00',
    badgeColor: '#9B8FAB',
  },
  {
    id: 4,
    productLink: '/product/4',
    defaultImage: bd_boggles_pink,
    hoverImage: bd_boggles_pink_hover,
    title: 'BD Boggle Pink',
    price: 'from £1000.00',
    badgeColor: '#E8C6CB',
  },
  {
    id: 5,
    productLink: '/product/5',
    defaultImage: bd_boggles_black,
    hoverImage: bd_boggles_black_hover,
    title: 'BD Boggle Black',
    price: 'from £1000.00',
    badgeColor: '#414442',
  },
  {
    id: 6,
    productLink: '/product/6',
    defaultImage: bd_boggles_aqua,
    hoverImage: bd_boggles_aqua_hover,
    title: 'BD Boggle Aqua Blue',
    price: 'from £1000.00',
    badgeColor: '#78AF9E',
  },
  {
    id: 7,
    productLink: '/product/7',
    defaultImage: bd_boggles_grey,
    hoverImage: bd_boggles_grey_hover,
    title: 'BD Boggle Grey',
    price: 'from £1000.00',
    badgeColor: '#868686',
  },
  // Add more products as needed...
];


export default function Home() {

  const [hasSwiped, setHasSwiped] = useState(false);

  const handleAfterChange = () => {
    if (!hasSwiped) {
      setHasSwiped(true);
    }
  };

  return (
    <>
      <section 
      className="bd-hero-img flex justify-center container-full bg-right bg-no-repeat bg-contain lg:min-h-dvh"
      style={{ 
        backgroundImage: `url(${BD_Bogle_Hero})` 
      }}>

        <section className="container mx-auto md:flex">

          {/* Text Section */}
          <TextSection
            widthCss="flex justify-items-center items-center box-border text-center md:text-left p-[30px] sm:p-0 sm:py-10"
            titleFont="md:text-5xl text-3xl font-medium" 
            subTitleFont="md:text-2xl text-xl font-medium text-gray my-2 md:my-4  md:pr-[80px] tracking-wide"
            title="BD Boggles."
            subtitle="Mind-boggling eye protection for the whole team."
            bottomTitle="Now with new polarised lens options"
            bottomTitleFont="md:my-4 my-2 md:text-2xl text-xl font-medium text-dark"
            buttonText="Shop Now"
            buttonLink="/"
            buttonClass="text-light bg-dark hover:bg-blue"
          />

          {/* Image Section */}
          <ImageSection
            widthCss="flex-1 md:invisible"
            imageSrc={BD_Bogle_Hero}
            imgCss='inline-block'
            isBackgroundImage={false} // Change to false to use <img> tag instead
          />

        </section>
      </section>
      <section className="w-full bg-blue">
        <NotificationBar 
          notificationText={NOTIFICATION_TEXT.promotionMessage}
          notificationCss="text-center bg-blue-500 py-7 text-lg px-4 md:px-1 md:text-2xl font-medium text-light"
          textColor="text-white"
        />
      </section>

      <Title 
      titleCss='w-full mx-auto text-center md:text-5xl text-3xl font-medium my-8 md:my-12' 
      titleText='Shop by colour' />

      <section className={`container-full mx-auto ${hasSwiped ? "swiped" : ""}`}>        
        <CustomCarousel 
        afterChange={handleAfterChange}
        autoPlay={false} 
        deviceType="desktop"
        showDots={false}
        >
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              productLink={product?.productLink}
              defaultImage={product?.defaultImage}
              hoverImage={product?.hoverImage}
              title={product.title}
              price={product.price}
              badgeColor={product.badgeColor}
            />
          ))}
           
        </CustomCarousel>
      </section>

      <section className="container mx-auto">
        <ColorSwatch />
      </section>

      <section className="md:container md:flex mx-auto mb-20">
        <div className="flex flex-1 items-end bg-cover bg-center bg-no-repeat text-center" 
          style={{ 
            backgroundImage: `url(${BD_selfcare})` 
          }}>
            <div className="bd_selfcare_content w-full justify-center my-10">
            <h3 
            className="mx-auto p-4 max-w-xl lg:text-5xl text-3xl text-light font-medium leading-[1.1] mb-5"
            >
              UV blocking, blue light blocking, anti fog, 360 degree medical grade protection for your eyes.</h3>
            <Button buttonClass='bg-light hover:bg-blue text-dark hover:text-light' buttonText='Shop Now' buttonLink='/' />
            </div>
            </div>
        <div className="flex-1 justify-center text-center box-border px-10">
          <div className="inline-block text-center">
            <img src={BD_selfcare_boggles} alt={BD_selfcare_boggles} />
            <Title 
            titleText='Eye care is self care.'
            titleCss='lg:text-5xl text-3xl text-dark font-medium text-center'
            />
            <h3 className="max-w-lg mx-auto md:text-2xl text-xl text-gray font-medium">
            <p className="mt-3">As an optics company, it’s safe to say we’re a little obsessive about vision. Can you blame us?</p> 
            <p className="mt-4">We know that vision can change the world. That’s why we developed safety goggles that you will actually want to wear.</p>
            </h3>
            <Button buttonText='Shop Now' buttonClass='bg-dark text-light inline-block mb-14 mt-7' />
          </div>

        </div>
      </section>    

  </>
  )
}
