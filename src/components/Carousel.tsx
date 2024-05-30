import { FC, useState } from 'react';
import { ICarouselItem } from '../interfaces/interfaces';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

interface Prop {
  carouselData: Array<ICarouselItem>;
}

const Carousel: FC<Prop> = ({ carouselData }) => {
  const [pasueAutoPlay, setPasuseAutoPlay] = useState(false);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className='px-4'>
      <Swiper
        className='z-[1] text-white group'
        slidesPerView={1}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          renderBullet: (index, className) => {
            return `<div class='${className} custom-bullet'></div>`;
          }
        }}
        modules={[Pagination, Navigation, Autoplay]}
        onSwiper={(swiperInstance) => {
          setSwiper(swiperInstance)
        }}
      >
        {carouselData.map((data, index) => (
          <SwiperSlide key={index} >
            <img
              className='rounded'
              src={data.backgroundImage.laptop}
              loading='lazy'
            />
          </SwiperSlide>
        ))}
        <button
          onClick={() => swiper && swiper.slidePrev()}
          className='swiper-button left-[-.5rem] rotate-90'
        >
          <img
            className='max-w-6 brightness-[5]'
            src='/icons/chevron-down.svg'
            alt='previous slide button'
            loading='lazy'
          />
        </button>

        <button
          onClick={() => swiper && swiper.slideNext()}
          className='swiper-button right-[-.5rem] rotate-[270deg]'
        >
          <img
            className='max-w-6 brightness-[5]'
            src='/icons/chevron-down.svg'
            alt='previous slide button'
            loading='lazy'
          />
        </button>
      </Swiper>
      <div className='swiper-pagination'></div>
    </section >
  );
}

export default Carousel;