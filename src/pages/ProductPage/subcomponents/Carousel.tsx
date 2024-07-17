import { useEffect, useState, memo } from 'react';
import { useAppSelector } from '@/lib/hooks/reduxHooks';
import { allowTouchMoveOnCarousel } from '@/lib/utils';
import type { TProductDataProp } from '@/types/types';
import type { TSwiper } from '@/types/union';
import ButtonsToCarouselSlides from '@/components/ButtonsToCarouselSlides';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/swiper-bundle.css';
import 'swiper/css/scrollbar';

const Carousel = memo(({ productData }: TProductDataProp) => {
  const imagePath = useAppSelector((state) => state.productImagePath.imagePath);
  const [swiper, setSwiper] = useState<TSwiper>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<TSwiper>(null);
  const [firstSlide, setFirstSlide] = useState(true);
  const [lastSlide, setLastSlide] = useState(false);

  const thumbnailListLong = (productData.productCarousel.thumbs?.length ?? 0) > 4;

  const slideToImage = () => {
    return productData.productCarousel.slides.map((image, index) =>
      image === imagePath && swiper?.slideTo(index));
  }

  useEffect(() => {
    swiper?.on('slideChange', () => {
      setFirstSlide(swiper.isBeginning);
      setLastSlide(swiper.isEnd);
    })

    return () => {
      swiper?.off('slideChange');
    }
  }, [swiper]);

  useEffect(() => {
    slideToImage();
  }, [swiper, imagePath]);

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
        {productData.productCarousel.slides.length > 1
          &&
          <>
            <ButtonsToCarouselSlides
              swiper={swiper}
              onlyOneSlideInCarousel={false}
              firstSlide={firstSlide}
              lastSlide={lastSlide}
            />
            <div className='swiper-pagination-numbers invisible opacity-0 transition-all duration-300
          group-hover:visible group-hover:opacity-100'
            >
            </div>
          </>
        }
      </Swiper>
      {productData.productCarousel.thumbs
        &&
        <div className='relative'>
          <Swiper
            className={`static mt-2 ${thumbnailListLong ? 'pb-12' : 'pb-4'}`}
            slidesPerView={thumbnailListLong ? 4.5 : 4}
            spaceBetween={16}
            watchSlidesProgress={true}
            freeMode={true}
            scrollbar={{
              draggable: true,
              snapOnRelease: true
            }}
            slideActiveClass='.swiper-slide-thumb-active'
            modules={[FreeMode, Thumbs, Scrollbar]}
            onSwiper={(swiperInstance) => {
              setThumbsSwiper(swiperInstance);
            }}
            allowTouchMove={allowTouchMoveOnCarousel}
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
      }
    </div>
  );
})

export default Carousel;