import React from "react";

type ImageLoaderProps = {
  isFullImage: boolean;
  className?: string;
  bgColor?: string;
  width?: string;
};

const ImageLoader: React.FC<ImageLoaderProps> = ({
  isFullImage,
  className,
  bgColor,
  width,
}) => {
  return (
    <div className={`h-full ${isFullImage ? "rounded-l-lg" : ""}`}>
      <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
        <div
          className={`w-full h-full ${className ? className : ""} shadow-2xl ${
            width ? width : ""
          }`}
          style={{ backgroundColor: bgColor }}
        ></div>
      </div>
    </div>
  );
};

export default ImageLoader;
