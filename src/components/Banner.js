import React from 'react';

// deps
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
    <div className='relative'>
      <div className='absolute bottom-0 z-20 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent' />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3500}
      >
        <div>
          <img
            loading='lazy'
            src='/images/carousel1_1500x600_v5._CB669739807_.jpg'
          />
        </div>
        <div>
          <img loading='lazy' src='/images/carousel2.jpg' />
        </div>
        <div>
          <img loading='lazy' src='/images/carousel3.jpg' />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
