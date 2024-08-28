import ImageSection from "../components/ImageSection";
import TextSection from "../components/TextSection";
import NotificationBar from "../components/NotificationBar";
import { NOTIFICATION_TEXT } from "../constants";
import CustomCarousel from "../components/CustomCarousel";
import Title from "../components/Title";

import BD_Bogle_Hero from '../assets/BD_Bogle_Hero.png'
import BD_selfcare from '../assets/bd_selfcare.png'
import BD_selfcare_boggles from '../assets/bd_slfcare_boggles.png'
import { productsData } from "../constants";
import ProductCard from "../components/ProductCard";
import ColorSwatch from "../components/ColorSwatch";
import Button from "../components/Button";


export default function Home() {

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
            widthCss="flex justify-items-center items-center box-border p-[30px] sm:p-0 sm:py-10"
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

      <section className="container mx-auto">
        <Title titleCss='w-full text-center md:text-5xl text-3xl font-medium my-8 md:my-12' titleText='Shop by colour' />

        <CustomCarousel 
        autoPlay={false} 
        deviceType="desktop"
        showDots={false}
        >
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              productLink={product.productLink}
              defaultImage={product.defaultImage}
              hoverImage={product.hoverImage}
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

      <section className="md:container md:flex mx-auto">
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
