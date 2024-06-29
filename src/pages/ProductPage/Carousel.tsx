import { FC, useEffect, useState } from 'react';
import { allowTouchMoveOnCarousel } from '../../lib/utils';
import { TProductDataProp } from '../../types/types';
import { TSwiper } from '../../types/union';
import ButtonsToCarouselSlides from '../../components/ButtonsToCarouselSlides';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/swiper-bundle.css';

const Carousel: FC<TProductDataProp> = ({ productData }) => {
  const [swiper, setSwiper] = useState<TSwiper>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<TSwiper>(null);

  const [firstSlide, setFirstSlide] = useState(true);
  const [lastSlide, setLastSlide] = useState(false);

  useEffect(() => {
    swiper?.on('slideChange', () => {
      setFirstSlide(swiper.isBeginning);
      setLastSlide(swiper.isEnd);
    })

    return () => {
      swiper?.off('slideChange');
    }
  }, [swiper]);

  return (
    <div className='group'>
      <Swiper
        className='relative h-auto'
        slidesPerView={1}
        spaceBetween={24}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : undefined }}
        modules={[Navigation, Pagination, FreeMode, Thumbs]}
        pagination={{
          el: '.swiper-pagination-numbers',
          type: 'fraction'
        }}
        onSwiper={(swiperInstance) => {
          setSwiper(swiperInstance);
        }}
        allowTouchMove={allowTouchMoveOnCarousel}
      >
        {productData?.productCarousel.slides.map((slide, index) => (
          <SwiperSlide
            className='relative pt-[56.25%]'
            key={index}
          >
            {slide.substring(0, 5) === 'https'
              ?
              <iframe
                className='absolute top-0 size-full'
                allow='autoplay; encrypted-media'
                allowFullScreen
                src={`${slide}?enablejsapi=1&autoplay=1&mute=1`}
                loading='lazy'
              />
              :
              <img
                className='absolute top-0 size-full object-cover'
                src={slide}
                alt=''
                aria-hidden='true'
                loading='lazy'
              />
            }
          </SwiperSlide>
        ))}

        <ButtonsToCarouselSlides
          swiper={swiper}
          onlyOneSlideInCarousel={false}
          firstSlide={firstSlide}
          lastSlide={lastSlide}
        />
        <div className='swiper-pagination-numbers'></div>
      </Swiper>

      <div className='relative'>
        <Swiper
          className='static grid mt-2 pb-2'
          slidesPerView={4}
          spaceBetween={16}
          watchSlidesProgress={true}
          freeMode={true}
          slideActiveClass='.swiper-slide-thumb-active'
          modules={[FreeMode, Thumbs]}
          onSwiper={setThumbsSwiper}
        >
          {productData?.productCarousel.thumbs.map((slide, index) => (
            <SwiperSlide
              className='relative size-full cursor-pointer'
              key={index}
            >
              <img
                className='size-full rounded-md'
                src={slide}
                alt=''
                aria-hidden='true'
                loading='lazy'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;