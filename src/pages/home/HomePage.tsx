import { FC } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import ImagesCarousel from './ImagesCarousel';

const HomePage: FC = () => {

  return (
    <main>
      <ScrollToTopButton />
      <ImagesCarousel />

      <section className='grid grid-cols-[60fr_40fr] items-center justify-center gap-8 bg-[url("/home-page/background.png")] 
        bg-no-repeat bg-cover border-t border-b border-borderGray px-10 py-20'
      >
        <img
          src='/home-page/laptop.png'
          alt=''
          aria-hidden="true"
          loading='lazy'
        />

        <div className='flex flex-col justify-between text-white'>
          <h3 className='text-[2.5rem] font-bold mb-2'>Dive into adventure</h3>
          <p className='text-lg text-almostWhite'>
            Download Battle.net and join a community of millions.
          </p>

          <div className='flex flex-col gap-6 mt-8'>
            <Link
              to='/download'
              className='flex items-center justify-center gap-2 max-w-[310px] text-xl font-bold rounded bg-lightBlue 
              px-10 py-5 blue-button-hover active-translate-y'
            >
              <img
                className='size-5'
                src='/third-part-company/apple.svg'
              />
              Download for Mac
            </Link>

            <Link
              className='learn-more-button text-center max-w-[310px] learn-more-button-hover active-translate-y'
              to='/learn-more-desktop'
            >
              Learn More
            </Link>
          </div>

          <p className='text-almostWhite mt-14'>
            Also available for <Link className='text-lightBlue font-semibold underline' to='/desktop'>Windowns</Link> and <Link className='text-lightBlue font-semibold underline' to='/mobile'>mobile</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default HomePage;