'use client'

import React, { FC, useState, useEffect } from 'react'

interface Props {
  images: any  
}

const ImageGallery: FC<Props> = (props) => {

  const [selectedImage, setSelectedImage] = useState(props.images[0])
  const rotationInterval: number = 5000

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedImage((prevSelectedImage: any) => {
        const currentIndex = props.images.indexOf(prevSelectedImage);
        const nextIndex = (currentIndex + 1) % props.images.length;
        return props.images[nextIndex];
      });
    }, rotationInterval);

    return () => {
      clearInterval(timer);
    };
  }, [props.images, rotationInterval])
    
  return (
    <div className='relative'>
      {props.images.map((image: string) => (
        <img
          key={image}
          src={image}
          alt='Main Image'
          className={`object-cover h-[35rem] w-[100%] absolute top-0 left-0 transition-opacity duration-1000 
          rounded-lg max-[550px]:h-[25rem] ${
            selectedImage === image ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{ position: selectedImage === image ? 'static' : 'absolute' }}
        />
      ))}
      <div className='grid grid-cols-6 gap-5 mt-5 max-[550px]:gap-2'>
        {props.images.map((image: string) => (
          <img
            key={image}
            src={image}
            alt='Thumbnail Image'
            onClick={() => handleImageClick(image)}
            className={`h-auto rounded-lg hover:cursor-pointer 
            border-2 ${ selectedImage === image ? 'scale-105 border-black' : 
            'border-transparent'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageGallery