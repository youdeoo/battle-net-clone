import { FC } from 'react';
import { Link } from 'react-router-dom';
import usePageType from '../lib/hooks/usePageType';

const MobileBattleNet: FC = () => {
  return (
    <section className='bg-[url("/battle-net-panel/background-mobile.png")] background-image-styles'>
      <div className={`battle-net-panel ${usePageType() ? 'grid-cols-2' : ''}`}>
        <img
          className='justify-self-center max-w-[35rem]'
          src='/battle-net-panel/phones.png'
          alt=''
          aria-hidden='true'
          loading='lazy'
        />

        <div className='grid'>
          {usePageType()
            ?
            <>
              <h3 className='text-xl font-bold text-gray'>Battle.net mobile app</h3>
              <h2 className='text-white text-6xl font-bold mb-6'>
                Battle.net on the go
              </h2>
            </>
            :
            <h3 className='text-white text-[2.5rem] font-bold mb-4'>
              Battle.net on the go
            </h3>
          }

          <p className={`max-w-[95%] ${usePageType() ? 'text-xl' : 'text-lg'} text-almostWhite`}>
            Get the mobile app and shop, socialize, get the news, and stay safe.
          </p>

          {usePageType()
            ?
            <Link
              className='text-white learn-more-button bg-almostTransparent border-transparent 
                max-w-max mt-10 learn-more-button-hover hover:border-almostTransparent active-translate-y'
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
                  src='/battle-net-panel/google-play.png'
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
      </div>
    </section>
  );
}

export default MobileBattleNet;