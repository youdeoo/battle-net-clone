import { FC } from 'react';
import { Link } from 'react-router-dom';
import usePageType from '../lib/hooks/usePageType';
import DownloadForMacLink from './DownloadForMacLink';

const DesktopPanel: FC = () => {
  return (
    <section className='bg-[url("/battle-net-panel/background-desktop.png")] background-image-styles border-panel'>
      <div className={`battle-net-panel ${usePageType() ? 'grid-cols-2 py-40' : ''}`}>
        <img
          src='/battle-net-panel/laptop.png'
          alt=''
          aria-hidden="true"
          loading='lazy'
        />

        <div className='flex flex-col justify-between text-white'>
          {usePageType() ? <h3 className='text-xl font-bold text-gray'>Battle.net desktop app</h3> : ''}
          <h3 className={`${usePageType() ? 'text-5xl' : 'text-[2.5rem]'} font-bold mb-2`}>Dive into adventure</h3>
          <p className='text-lg text-almostWhite'>
            Download Battle.net and join a community of millions.
          </p>

          {usePageType()
            ?
            <Link className='learn-more-button learn-more-button-hover bg-almostTransparent w-fit mt-10' to='/desktop'>
              Learn more
            </Link>
            :
            <>
              <div className='flex flex-col gap-6 mt-8'>
                <DownloadForMacLink />

                <Link
                  className='learn-more-button text-center max-w-[310px] learn-more-button-hover active-translate-y'
                  to='/desktop'
                >
                  Learn More
                </Link>
              </div>

              <p className='text-almostWhite mt-14'>
                Also available for <Link className='text-lighterBlue font-semibold underline transition-colors hover:text-lightestBlue' to='/desktop'>Windowns</Link> and <Link className='text-lighterBlue font-semibold underline transition-colors hover:text-lightestBlue' to='/mobile'>mobile</Link>
              </p>
            </>
          }
        </div>
      </div>
    </section>
  );
}

export default DesktopPanel;