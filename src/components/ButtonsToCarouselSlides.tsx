import { deviceHandleHoverEffect } from '@/lib/utils';
import { SwiperClass } from 'swiper/react';

type Props = {
  swiper: SwiperClass | null;
  onlyOneSlideInCarousel: boolean;
  firstSlide?: boolean;
  lastSlide?: boolean;
}

const ButtonsToCarouselSlides = ({
  swiper,
  onlyOneSlideInCarousel,
  firstSlide,
  lastSlide
}: Props) => {
  return (
    <>
      <button
        onClick={() => swiper?.slidePrev()}
        className={`swiper-button invisible opacity-0 left-[-.5rem] rotate-90 ${!deviceHandleHoverEffect || onlyOneSlideInCarousel ? 'hidden' : 'flex'} 
        ${firstSlide && 'disable-button'} border-button-and-box-shadow transition-all duration-300 group-hover:visible group-hover:opacity-100 max-[959px]:hidden`}
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
        className={`swiper-button invisible opacity-0 right-[-.5rem] rotate-[270deg] ${!deviceHandleHoverEffect || onlyOneSlideInCarousel ? 'hidden' : 'flex'}
        ${lastSlide && 'disable-button'} border-button-and-box-shadow transition-all duration-300 group-hover:visible group-hover:opacity-100 max-[959px]:hidden`}
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