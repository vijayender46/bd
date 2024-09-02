import React from "react";
import Button from "./Button";

const TextSection = ({
  title,
  subtitle,
  paragraph,
  buttonText,
  buttonLink,
  widthCss,
  titleFont,
  subTitleFont,
  buttonClass,
  bottomTitle,
  bottomTitleFont,
  enableSubtitleLineBreaks = false, // New prop to enable line breaks
}) => {
  // Function to render subtitle with line breaks
  const renderSubtitleWithLineBreaks = (subtitleText) => {
    return subtitleText.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < subtitleText.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className={`textSection ${widthCss}`}>
      <div>
        {title && <h1 className={titleFont}>{title}</h1>}
        {subtitle && (
          <h3 className={subTitleFont}>
            {enableSubtitleLineBreaks
              ? renderSubtitleWithLineBreaks(subtitle) // Render with line breaks if enabled
              : subtitle}
          </h3>
        )}
        {paragraph && <p>{paragraph}</p>}
        {buttonText && (
          <Button
            buttonLink={buttonLink}
            buttonClass={buttonClass}
            buttonText={buttonText}
          />
        )}
        {bottomTitle && <h3 className={bottomTitleFont}>{bottomTitle}</h3>}
      </div>
    </div>
  );
};

export default TextSection;
