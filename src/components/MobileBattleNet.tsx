import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileBattleNet: FC = () => {
  const { pathname } = useLocation();
  const desktopPage = pathname === '/desktop';

  return (
    <section className={`section-to-download-battle-net ${desktopPage ? 'grid-cols-2' : ''} bg-[url("/mobile-battle-net/background.png")]`}>
      <img
        className={`justify-self-center ${desktopPage ? 'max-w-[30rem]' : 'max-w-[25rem]'}`}
        src='/mobile-battle-net/phones.png'
        alt=''
        aria-hidden='true'
        loading='lazy'
      />

      <div className='grid'>
        {desktopPage
          ?
          <>
            <h3 className='text-xl font-bold text-almostWhite'>Battle.net mobile app</h3>
            <h2 className='text-white text-6xl font-bold mb-6'>
              Battle.net on the go
            </h2>
          </>
          :
          <h3 className='text-white text-[2.5rem] font-bold mb-4'>
            Battle.net on the go
          </h3>
        }

        <p className={`max-w-[95%] ${desktopPage ? 'text-xl' : 'text-lg'} text-almostWhite`}>
          Get the mobile app and shop, socialize, get the news, and stay safe.
        </p>

        {desktopPage
          ?
          <Link
            className='text-white learn-more-button bg-almostTransparent border-transparent 
            max-w-max mt-10 learn-more-button-hover hover:border-almostTransparent'
            to='/mobile'
          >
            Learn More
          </Link>
          :
          <>
            <Link
              className='mt-10'
              to='https://play.google.com/store/apps/details?id=com.blizzard.messenger'
              target='_blank'
            >
              <img
                className='max-w-52 border border-lightGray rounded-md'
                src='/mobile-battle-net/google-play.png'
                alt='button to open google play to download battle.net'
                loading='lazy'
              />
            </Link>

            <p className='text-almostWhite mt-[4rem]'>
              Also available for <Link className='font-semibold text-lighterBlue underline transition-colors hover:text-lightestBlue' to='/desktop'>desktop</Link>
            </p>
          </>
        }
      </div>
    </section>
  );
}

export default MobileBattleNet;