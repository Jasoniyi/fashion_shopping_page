"use client";

import React, { useEffect, useRef, useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderSize?: string;
}

const placeHolder = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=`;

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  placeholderSize,
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = src;
          img.onload = () => setLoaded(true);
          observer.unobserve(img);
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {!loaded && (
        <img
          src={placeHolder}
          alt={alt}
          className={className}
          style={{
            position: "absolute",
            width: placeholderSize || "100%",
            height: placeholderSize || "100%",
            objectFit: "cover",
          }}
        />
      )}
      <img
        ref={imgRef}
        className={className}
        alt={alt}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
};

export default LazyImage;
