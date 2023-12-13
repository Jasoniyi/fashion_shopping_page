"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const placeHolder = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEA
  AAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=`;

interface ImageShape {
  objectFit: string;
  errorHeight: string;
  src: string;
  alt: string;
  onLoad?: (event: any) => void;
  onError?: (event: any) => void;
  height?: number | string;
  width: number | string;
  className?: string;
  ref?: any;
  isHeaderImage?: boolean;
  dataImage?: string;
}

export const Image = styled.img<ImageShape>`
  display: block;
  width: ${({ width }) => (width ? `${width}` : "")};
  height: ${({ height }) => (height ? `${height}` : "")};
  object-fit: ${({ objectFit }) => (objectFit ? objectFit : "contain")};
  background-color: ${({ dataImage }) =>
    dataImage ? dataImage : "transparent"};
  // Add a smooth animation on loading
  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  // I use utilitary classes instead of props to avoid style regenerating
  &.loaded:not(.has-error) {
    animation: loaded 300ms ease-in-out;
  }
  &.has-error {
    // fallback to placeholder image on error
    height: ${({ errorHeight }) =>
      errorHeight ? errorHeight : "50vh"}; // Use "50vh" instead of "50VH"
    width: 100vw;
    content: url(${placeHolder});
  }
`;

export const LazyImage = (ImageShape: ImageShape) => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [imageRef, setImageRef] = useState<any>();

  const onLoadStart = (event: any) => {
    console.log("Load Started", event);
  };
  const onLoaded = async (event: any) => {
    event.target.classList.add("loaded");

    if (ImageShape.onLoad) {
      console.log("Image Loaded", event.target.style.height);
      await ImageShape.onLoad(true);
    }
  };

  const onError = async (event: any) => {
    if (ImageShape.onLoad) {
      console.log("Error encountered loading image");
      await ImageShape.onLoad(false);
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;

    if (imageRef && imageSrc !== ImageShape.src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(ImageShape.src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: "75%",
          }
        );
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(ImageShape.src);
      }
    }
    return () => {
      didCancel = true;
      // on component cleanup, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [ImageShape.src, imageSrc, imageRef]);
  return (
    <>
      <Image
        ref={setImageRef}
        src={imageSrc}
        alt={ImageShape.alt}
        onLoad={onLoaded}
        onError={onError}
        height={ImageShape.height}
        width={ImageShape.width}
        errorHeight={ImageShape.errorHeight}
        className={ImageShape.className}
        objectFit={ImageShape.objectFit}
      />
    </>
  );
};
