import Button from "./Button";


const TextSection = ({ 
    title, subtitle, paragraph, buttonText, 
    buttonLink, widthCss, titleFont, subTitleFont,
    buttonClass, bottomTitle, bottomTitleFont
}) => {
  return (
    <div className={`textSection ${widthCss}`}>
        <div className="max-w-md">
            {title && <h1 className={titleFont}>{title}</h1>}
            {subtitle && <h3 className={subTitleFont}>{subtitle}</h3>}
            {paragraph && <p>{paragraph}</p>}
            {buttonText && (
                <Button buttonLink={buttonLink} buttonClass={buttonClass} buttonText={buttonText} />
            )}
            {bottomTitle && <h3 className={bottomTitleFont}>{bottomTitle}</h3>}
        </div>
    </div>
  );
};

export default TextSection;
