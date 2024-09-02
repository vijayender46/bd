import ImageSection from "../components/ImageSection";
import TextSection from "../components/TextSection";
import NotificationBar from "../components/NotificationBar";
import { NOTIFICATION_TEXT } from "../constants";
import CustomCarousel from "../components/CustomCarousel";
import Title from "../components/Title";

import BD_Bogle_Hero from '../assets/BD_Bogle_Hero.png'
import bd_vision from '../assets/bd_vision.png'
import switch_polarised from '../assets/switch_to_polarise_bg.png'
import bd_look_good from '../assets/bd_look_good.png'
import bd_prescription from '../assets/bd_prescription.png'
import bd_goodbye_fog from '../assets/bd_goodbye_fog.png'
import BD_selfcare from '../assets/bd_selfcare.png'
import BD_selfcare_boggles from '../assets/bd_slfcare_boggles.png'
import smart_safe_stylist from '../assets/smart_safe_stylist.png'
// import { productsData } from "../constants";
import { ratingData } from "../constants";
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
import RatingCard from "../components/RatingCard";



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

const ratingResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

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
            widthCss="flex justify-items-center items-center max-w-md box-border text-center md:text-left p-[30px] sm:p-0 sm:py-10"
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

      <section className="md:container md:flex mx-auto md:mb-20">
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
        <div className="flex-1 justify-center text-center box-border px-10 md:mb-0 mb-10">
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

      <section className="switch-to-polarised py-10 bg-[#e6e9f1] bg-right bg-no-repeat bg-cover relative"
      style={{ 
        backgroundImage: `url(${switch_polarised})` 
      }}>
        <div className="container flex mx-auto md:py-20 py-14 relative z-10">
             {/* Text Section */}
              <TextSection
                widthCss="flex justify-items-center items-center box-border max-w-lg text-center md:text-left px-[30px]"
                titleFont="lg:text-5xl text-4xl leading-[45px] lg:leading-[54px] font-medium" 
                subTitleFont="md:text-2xl text-xl font-medium text-gray my-2 md:my-4  md:pr-[80px] tracking-wide"
                title="Switch to polarised dazzle-defend lenses for patient protection."
                subtitle="Give your patients mind boggling eye protection, with our signature dazzle defend polarised lens option - so you can work under incredible lighting without compromising on patient satisfaction."
                bottomTitle=""
                bottomTitleFont="md:my-4 my-2 md:text-2xl text-xl font-medium text-dark"
                buttonText="Shop Now"
                buttonLink="/"
                buttonClass="text-light px-10 bg-dark hover:bg-blue"
              />

              {/* Image Section */}
              <ImageSection
                widthCss="flex-1 md:invisible"
                imageSrc={switch_polarised}
                imgCss='inline-block'
                isBackgroundImage={false} // Change to false to use <img> tag instead
              />
        </div>
      </section>  

      <section className="w-full smart_safe_stylist py-20 md:py-40 bg-[#EBEBEF] bg-no-repeat bg-left bg-cover relative"
      style={{ 
        backgroundImage: `url(${smart_safe_stylist})` 
      }}>
        <div className="container mx-auto">
          {/* Image Section */}
              <ImageSection
                widthCss="flex-1 md:invisible"
                imageSrc={smart_safe_stylist}
                imgCss='inline-block'
                isBackgroundImage={true} // Change to false to use <img> tag instead
              />

          {/* Text Section */}
          <TextSection
                widthCss="flex justify-items-center relative z-10 ml-auto items-center box-border max-w-lg text-center md:text-left md:pl-28 lg:pl-4 pr-4"
                titleFont="lg:text-5xl text-4xl leading-[45px] lg:leading-[54px] font-medium" 
                subTitleFont="md:text-2xl text-xl font-medium text-gray my-2 md:my-4 md:pl-2 tracking-wide"
                title="Smart, safe, stylish."
                subtitle="Our boggles contain 3 different kinds of protection, as well as anti fog coatings that actually work. These are safety glasses as you’ve never seen them before."
                bottomTitle=""
                bottomTitleFont="md:my-4 my-2 md:text-2xl text-xl font-medium text-dark"
                buttonText="Shop Now"
                buttonLink="/"
                buttonClass="text-light px-10 bg-dark hover:bg-blue"
              />

          
        </div>
      </section>

      <section className="w-full py-14">
        <div className="container mx-auto">
          <CustomCarousel
          responsive={ratingResponsive}
          showDots={false}
          >
            {ratingData.map((rating) => (
              <RatingCard
                key={rating.id}
                title={rating.title}
                star={rating.star}
                auther={rating.auther}
              />
            ))}
          </CustomCarousel>
        </div>
      </section>

      <section 
      className="bd-vision flex justify-center container-full bg-right bg-no-repeat bg-cover lg:min-h-dvh md:py-2 py-8"
      style={{ 
        backgroundImage: `url(${bd_vision})` 
      }}>

        <section className="container mx-auto md:flex">

          {/* Text Section */}
          <TextSection
            widthCss="flex justify-items-center items-center max-w-md box-border text-center md:text-left p-8 sm:p-0 sm:py-10"
            titleFont="inline-block md:text-5xl text-3xl font-medium max-w-sm leading-[60px]" 
            subTitleFont="md:text-2xl text-xl font-medium text-gray my-2 md:my-4  md:pr-[80px] tracking-wide"
            title="Great clinicians have vision."
            subtitle="Boggles take care of your eyes, so your vision can change the world."
            buttonText="Shop Now"
            buttonLink="/"
            buttonClass="text-light bg-dark hover:bg-blue mt-6 md:mt-2"
          />

        </section>
      </section>

      <section className="w-full">
        <div className="md:container md:flex mx-auto my-20">
          <div className="flex flex-1 items-end bg-cover bg-bottom justify-center bg-no-repeat text-center min-h-dvh" 
            style={{ 
              backgroundImage: `url(${bd_goodbye_fog})` 
            }}>
              <div className="bd_selfcare_content max-w-lg justify-center my-10">
              <h3 
              className="mx-auto p-4 pb-2 lg:text-5xl text-3xl text-light font-medium leading-10 lg:leading-[50px]"
              >
                Say goodbye to goggle fog.</h3>
                <p className="text-xl p-4 lg:text-2xl text-[#868686] leading-6 lg:leading-8 font-medium min-h-52 mb-0 lg:mb-6">
                  Is there anything worse than that sinking feeling when you put your mask on and your vision turns into a steamy foggy grey blur? That’s why we developed anti fog coatings that are guaranteed to last for at least 3 years. You can’t fog them up if you try - and we have.</p>
              <Button buttonClass='bg-light hover:bg-blue text-dark hover:text-light' buttonText='Shop Now' buttonLink='/' />
              </div>
            </div>

            <div className="flex flex-1 items-end bg-cover bg-bottom justify-center bg-no-repeat text-center min-h-dvh" 
            style={{ 
              backgroundImage: `url(${bd_prescription})` 
            }}>
              <div className="bd_selfcare_content max-w-lg justify-center my-10">
              <h3 
              className="mx-auto p-4 pb-2 lg:text-5xl text-3xl text-dark font-medium leading-10 lg:leading-[50px]"
              >
                Prescription? No problem.
              </h3>
                <p className="text-xl p-4 lg:text-2xl text-[#868686] leading-6 lg:leading-8 font-medium min-h-52 mb-0 lg:mb-6">
                  Our boggles contain 3 different kinds of protection, as well as anti fog coatings that actually work. These are safety glasses as you’ve never seen them before.
                </p>
              <Button buttonClass='bg-dark hover:bg-blue text-light' buttonText='Shop Now' buttonLink='/' />
              </div>
            </div> 
            
        </div>
      </section>

      <section className="switch-to-polarised bd_look_good py-10 bg-[#DCDFE6] bg-right bg-no-repeat bg-cover relative"
      style={{ 
        backgroundImage: `url(${bd_look_good})` 
      }}>
        <div className="container flex mx-auto md:py-20 py-14 relative z-10">
             {/* Text Section */}
              <TextSection
                widthCss="flex justify-items-center items-center box-border max-w-xl text-center md:text-left px-[30px]"
                titleFont="lg:text-5xl text-4xl leading-[45px] lg:leading-[54px] font-medium" 
                subTitleFont="md:text-2xl text-xl font-medium text-gray my-2 md:my-4  md:pr-[80px] tracking-wide"
                title="“Boggles look too good to waste in the clinic!” Someone might say!"
                subtitle={"Boggles now offer polarised lenses!\n\n Created for people who live without limits, our polarised lenses allow you to go from the clinic to the great outdoors without any interruptions."}
                buttonText="Shop Now"
                buttonLink="/"
                buttonClass="text-light px-10 bg-dark hover:bg-blue"
                enableSubtitleLineBreaks={true}
              /> 
               
        </div>
      </section>

  </>
  )
}
