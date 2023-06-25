import React, { FC } from 'react'
import Text from '@atoms/Text'

const AboutUs: FC = () => {
  return (
    <div className='pt-16 overflow-hidden flex flex-col items-center 
    justify-center gap-16'>
      <Text intent='teritary' uppercase={true} bold={true}
      size='header'>
        <h1 className='w-[100%] text-center'>About Us</h1>  
      </Text>
      <Text intent='teritary' size='large'>
        <p className='w-[70vw] pb-8'>
        Welcome to our illuminating creativity store! We are passionate about bringing light into people's lives and inspiring creativity through our curated collection of unique and mesmerizing products.
        At our store, you'll discover a wide range of captivating solutions that transform any space into a haven of artistic expression. 
        </p>
        <p className='w-[70vw] pb-8'>
        Whether you're looking to create a cozy ambiance in your living room, add a touch of magic to your bedroom, or illuminate your outdoor spaces with elegance, we have just what you need.
        Browse through our collection of innovative Humidifier, enchanting prism pendants, mesmerizing neon board, Futuristic portable fan, satisfying heart shaped shades ,magical colourful starry globe and other illuminating treasures that will ignite your imagination. Our products are not only aesthetically pleasing but also energy-efficient and durable, ensuring that your creative oasis lasts for years to come.
        We understand the importance of personal style, and that's why we strive to curate a diverse collection that caters to different tastes and preferences. From minimalist designs to whimsical creations, we have different options that suit every individual's unique vision of artistic expression.
        </p>
        <p className='w-[70vw] pb-32'>
        We prioritize convenience and affordability. With our streamlined ordering process and efficient worldwide free shipping, you can enjoy the convenience of having your illuminating treasures delivered right to your doorstep.
        Join our community of passionate individuals who share a love for illuminating creativity. Follow us on social media so you don’t miss our new product releases, and exclusive offers. We are here to inspire and support you on your journey to create spaces that are not just lit but are filled with artistic flair and soul.
        Experience the transformative power of light and let your creativity shine with our illuminating creativity collection. Start exploring our store today and let your imagination take flight!
        </p>
      </Text>
    </div>
  )
}

export default AboutUs