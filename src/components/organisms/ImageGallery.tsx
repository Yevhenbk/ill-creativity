'use client'

import React, { FC, useState } from 'react'

interface Props {
  images: any  
}

const ImageGallery: FC<Props> = (props) => {

    const [selectedImage, setSelectedImage] = useState(props.images[0])

    const handleImageClick = (image: string) => {
      setSelectedImage(image)
    }
    
  return (
    <div>
      <img src={selectedImage} alt='Main Image' className='object-cover 
      h-[35rem] rounded-lg w-[100%]'/>
      <div className='grid grid-cols-6 gap-5 mt-5'>
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