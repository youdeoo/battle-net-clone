import { FC } from 'react';

const slides = [
  '/infinite-carousel/slide-1.png',
  '/infinite-carousel/slide-2.png',
  '/infinite-carousel/slide-3.png',
  '/infinite-carousel/slide-4.png',
  '/infinite-carousel/slide-5.png',
  '/infinite-carousel/slide-6.png',
  '/infinite-carousel/slide-7.png',
  '/infinite-carousel/slide-8.png',
  '/infinite-carousel/slide-9.png',
  '/infinite-carousel/slide-10.png',
  '/infinite-carousel/slide-11.png'
];

const InfiniteCarousel: FC = () => {
  return (
    <div className='relative top-[-2.5rem] max-w-[2600px] overflow-hidden m-auto'>
      <div className='flex gap-8 w-max'>
        <div className='flex gap-8 animate-[infiniteCarousel_200s_infinite_linear]'>
          {slides.map((slide, index) => (
            <div className='w-[15rem]' key={index}>
              <img
                className='rounded-md h-full max-h-[317.167px]'
                src={slide}
                alt=''
                aria-hidden='true'
              />
            </div>
          ))}
        </div>

        <div className='flex gap-8 animate-[infiniteCarousel_200s_infinite_linear]'>
          {slides.map((slide, index) => (
            <div className='w-[15rem]' key={index}>
              <img
                className='rounded-md h-full max-h-[317.167px]'
                src={slide}
                alt=''
                aria-hidden='true'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfiniteCarousel;