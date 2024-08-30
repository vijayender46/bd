import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Default responsive breakpoints for the carousel
const defaultResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 2, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4.5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3.5,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2.5,
    slidesToSlide: 1, // optional, default to 1.
  },
};

// Reusable carousel component
const CustomCarousel = ({
  children,
  responsive = defaultResponsive,  // Use default if not provided
  swipeable = true,
  draggable = true,
  showDots = true,
  infinite = false,
  autoPlay = true,
  autoPlaySpeed = 1000,
  keyBoardControl = true,
  customTransition = "all .5",
  transitionDuration = 500,
  containerClass = "carousel-container",
  removeArrowOnDeviceType = ["desktop" ,"tablet", "mobile"],
  dotListClass = "custom-dot-list-style",
  itemClass = "carousel-item-padding-40-px cursor-grab",
  deviceType,
}) => {
  return (
    <Carousel
      swipeable={swipeable}
      draggable={draggable}
      showDots={showDots}
      responsive={responsive}  // Ensure this prop is passed
      ssr={true} // means to render carousel on server-side.
      infinite={infinite}
      autoPlay={deviceType !== "mobile" ? autoPlay : false}
      autoPlaySpeed={autoPlaySpeed}
      keyBoardControl={keyBoardControl}
      customTransition={customTransition}
      transitionDuration={transitionDuration}
      containerClass={containerClass}
      removeArrowOnDeviceType={removeArrowOnDeviceType}
      deviceType={deviceType}
      dotListClass={dotListClass}
      itemClass={itemClass}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;