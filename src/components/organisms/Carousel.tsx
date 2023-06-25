'use client'

import React, { FC, useState, useEffect } from 'react';

function UncontrolledExample() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://ae01.alicdn.com/kf/H765e273f724e4471b714fccefaaaa0c6B.jpg_640x640Q90.jpg_.webp',
    'https://ae01.alicdn.com/kf/Hd6fc33f5533745e4a29643e17f958f4f3.jpg_640x640Q90.jpg_.webp',
    'https://ae01.alicdn.com/kf/S48ac0872534a41de8461fceceadf1e3fs.jpg_640x640Q90.jpg_.webp'
  ];

  const selectImage = (index: any) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='w-[50vw] h-[45rem] max-[1200px]:w-[100%] max-[1200px]:h-[25rem]
    max-[1200px]:flex max-[1200px]:justify-content max-[1200px]:items-center  
    max-[1200px]:overflow-hidden relative'>
      {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`carousel-image w-[50vw] h-[45rem] object-cover transition-opacity ease-in-out duration-700
            max-[1200px]:w-[100%] max-[1200px]:h-[25rem]
            ${index === currentImage ? 'opacity-100' : 'opacity-0 absolute'}`}
          />
        ))}
      <div className='absolute bottom-4 left-4 flex gap-2 items-center transition-all
      duration-300 ease-in-out'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`rounded-full bg-[#F4AE4F] hover:cursor-pointer
            ${index === currentImage ? 'border-2 border-black w-[.95rem] h-[.95rem]' 
            : 'w-[.75rem] h-[.75rem]'}`}
            onClick={() => selectImage(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default UncontrolledExample;