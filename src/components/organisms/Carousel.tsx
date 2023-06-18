"use client"
import noimage from '../../../public/noimage.jpg'
import Image from 'next/image';

import { Carousel } from 'react-responsive-carousel';

function UncontrolledExample() {
  return (
    <Carousel
    showArrows={true}
    showIndicators={true}
    infiniteLoop={true}
    dynamicHeight={false}>
        <div>
            <Image src={noimage} alt='' className='h-[25rem]'/>
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <Image src={noimage} alt='' className='h-[25rem]' />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <Image src={noimage} alt='' className='h-[25rem]' />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
  );
}

export default UncontrolledExample;