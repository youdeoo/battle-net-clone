import { FC } from 'react';
import { deviceHandleHoverEffect } from '../lib/utils';
import { SwiperClass } from 'swiper/react';

type Props = {
  swiper: SwiperClass | null;
  onlyOneSlideInCarousel: boolean;
  firstSlide?: boolean;
  lastSlide?: boolean;
}

const ButtonsToCarouselSlides: FC<Props> = ({
  swiper,
  onlyOneSlideInCarousel,
  firstSlide,
  lastSlide
}) => {
  return (
    <>
      <button
        onClick={() => swiper?.slidePrev()}
        className={`swiper-button left-[-.5rem] rotate-90 ${!deviceHandleHoverEffect || onlyOneSlideInCarousel ? 'hidden' : 'flex'} 
        ${firstSlide && 'disable-button'} max-[959px]:hidden`}
      >
        <img
          className={`max-w-6 brightness-[5] ${firstSlide && 'opacity-50'}`}
          src='/icons/chevron-down.svg'
          alt='previous slide button'
          loading='lazy'
        />
      </button>

      <button
        onClick={() => swiper?.slideNext()}
        className={`swiper-button right-[-.5rem] rotate-[270deg] ${!deviceHandleHoverEffect || onlyOneSlideInCarousel ? 'hidden' : 'flex'}
        ${lastSlide && 'disable-button'}  max-[959px]:hidden`}
      >
        <img
          className={`max-w-6 brightness-[5] ${lastSlide && 'opacity-50'}`}
          src='/icons/chevron-down.svg'
          alt='previous slide button'
          loading='lazy'
        />
      </button>
    </>
  );
}

export default ButtonsToCarouselSlides;