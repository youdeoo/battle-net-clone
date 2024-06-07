import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { deviceHandleHoverEffect } from '../lib/utils';
import { TCarouselItem } from '../types/types';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

type Prop = {
  carouselData: Array<TCarouselItem>;
}

const Carousel: FC<Prop> = ({ carouselData }) => {
  const { gameId } = useParams();
  const [pauseAutoPlay, setPasuseAutoPlay] = useState(false);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const toogleAutoPlay = (): void => {
    if (swiper) {
      if (!pauseAutoPlay) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
      }
    }
  }
  const slideContainsOnlyBackgroundImagesAndIcon = carouselData.map((data) => Object.keys(data)).map((d) => d.length === 2);
  const onlyOneSlide = carouselData.map((data) => Object.keys(data)).length === 1;

  useEffect(() => {
    if (swiper?.activeIndex !== 0) {
      swiper?.slideTo(0);
    }
  }, [gameId])

  return (
    <section className='max-w-[1600px] px-4 m-auto'>
      <div className='group m-auto'>
        <Swiper
          className='relative grid z-[1] text-white'
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            renderBullet: (_, className) => {
              return `<div class='${className} custom-bullet'></div>`;
            }
          }}
          modules={[Pagination, Navigation, Autoplay]}
          onSwiper={(swiperInstance) => {
            setSwiper(swiperInstance)
          }}
          allowTouchMove={!deviceHandleHoverEffect || window.innerWidth <= 959 ? true : false}
        >
          {carouselData.map((data, index) => (
            <SwiperSlide
              className='min-h-[360px] max-h-[360px] overflow-hidden max-[959px]:max-h-[440px] max-[959px]:h-[440px]'
              key={index}
            >
              <div className='grid size-full'>
                <picture>
                  <source media='(max-width: 959px)' srcSet={data.backgroundImage.tablet} />
                  <img
                    className='size-full max-h-[360px] object-cover max-[959px]:max-h-[440px]'
                    src={data.backgroundImage.laptop}
                  />
                </picture>

                <div className={`absolute top-[50%] ${slideContainsOnlyBackgroundImagesAndIcon[index] ? 'left-[3.5rem]' : 'left-[7rem] min-[1400px]:left-[10rem]'} 
                translate-y-[-50%] flex justify-center h-full max-[959px]:w-full max-[959px]:max-w-full max-[959px]:left-[50%] max-[959px]:translate-x-[-50%] 
                max-[959px]:pt-[150px] max-[959px]:pb-[2rem]`}
                >
                  <div className={`flex flex-col justify-center ${slideContainsOnlyBackgroundImagesAndIcon[index] ? 'max-w-[28rem]' : 'max-w-[270px]'} 
                    max-[959px]:self-end max-[959px]:max-w-[420px]`}
                  >
                    <img
                      className={`${slideContainsOnlyBackgroundImagesAndIcon[index] ? 'w-[28rem]' : 'w-auto'} 
                      max-[959px]:${slideContainsOnlyBackgroundImagesAndIcon[index] ? 'max-w-[28rem]' : 'max-w-[15.5rem]'} max-[959px]:m-auto`}
                      src={data.icon}
                      alt=''
                      aria-hidden='true'
                      loading='lazy'
                    />
                    {data.text
                      ?
                      <p className='text-xl font-bold leading-6 text-center mb-4 max-[959px]:text-base'>
                        {data.text}
                      </p>
                      :
                      ''
                    }
                    {data.buttonText
                      ?
                      <button
                        className='blue-button active-translate-y text-lg max-[959px]:max-w-[280px] max-[959px]:m-auto'
                        type='button'
                      >
                        {data.buttonText}
                      </button>
                      :
                      ''
                    }
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <button
            onClick={() => swiper?.slidePrev()}
            className={`swiper-button left-[-.5rem] rotate-90 ${!deviceHandleHoverEffect || onlyOneSlide ? 'hidden' : 'flex'} 
            max-[959px]:hidden`}
          >
            <img
              className='max-w-6 brightness-[5]'
              src='/icons/chevron-down.svg'
              alt='previous slide button'
              loading='lazy'
            />
          </button>

          <button
            onClick={() => swiper?.slideNext()}
            className={`swiper-button right-[-.5rem] rotate-[270deg] ${!deviceHandleHoverEffect || onlyOneSlide ? 'hidden' : 'flex'}
            max-[959px]:hidden`}
          >
            <img
              className='max-w-6 brightness-[5]'
              src='/icons/chevron-down.svg'
              alt='previous slide button'
              loading='lazy'
            />
          </button>
        </Swiper>

        <div className={`${onlyOneSlide ? 'hidden' : 'flex'} 
          items-center justify-center gap-3 h-[16px] mt-3`}
        >
          <img
            onClick={() => { setPasuseAutoPlay(prev => !prev); toogleAutoPlay() }}
            className='max-w-2.5 cursor-pointer hover:brightness-[5]'
            src={`/icons/${pauseAutoPlay ? 'play-gray.svg' : 'pause.svg'}`}
            alt={`click to ${pauseAutoPlay ? 'run' : 'stop'} autoplay slides`}
          />
          <div className='swiper-pagination'></div>
        </div>
      </div>
    </section >
  );
}

export default Carousel;