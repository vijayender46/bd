

const ImageSection = ({ imageSrc, imgCss, imageAlt = "", isBackgroundImage, widthCss }) => {
  return (
    <div 
        className={`imageSection ${widthCss}`}
        style={isBackgroundImage ? { backgroundImage: `url(${imageSrc})` } : {}}>
      {!isBackgroundImage && <img className={`imageCSS ${imgCss}`} src={imageSrc} alt={imageAlt} />}
    </div>
  );
};

export default ImageSection;
