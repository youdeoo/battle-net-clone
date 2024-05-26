import { FC } from 'react';
import AppStoreLink from '../../components/AppStoreLink';
import GooglePlayLink from '../../components/GooglePlayLink';
import DesktopPanel from '../../components/DesktopPanel';
import DownloadAppPanel from '../../components/DownloadAppPanel';

const MobilePage: FC = () => {
  return (
    <main>
      <section className='bg-[url("/battle-net-panel/background-mobile-page-panel.png")] background-image-styles border-panel px-10 py-20'>
        <div className='grid grid-cols-2 items-center justify-center gap-10 max-w-[1440px] m-auto min-[1200px]:gap-[4.5rem]'>
          <div>
            <img
              className='max-w-16 rounded-xl'
              src='/logo/logo-icon.png'
              alt=''
              aria-hidden='true'
              loading='lazy'
            />
            <h1 className='text-6xl font-bold text-white my-6'>Battle.net on the go</h1>
            <p className='text-xl text-almostWhite'>
              Put the power of Battle.net in the palm of your hand. Shop, socialize,
              get the news, and stay safe with the built-in Authenticator.
            </p>

            <div className='flex gap-6 mt-10'>
              <AppStoreLink />
              <GooglePlayLink />
            </div>

            <div className='flex items-center gap-4 bg-almostTransparent max-w-[370px] rounded-md p-3 mt-12'>
              <img
                className='max-w-28 rounded-md'
                src='/battle-net-panel/qr-code.png'
                alt='scan qr code to get app'
                loading='lazy'
              />
              <p className='text-almostWhite'>
                Scan the QR code with your mobile device to get the app
              </p>
            </div>
          </div>

          <img
            className='max-w-[35rem]'
            src='/battle-net-panel/phones.png'
            alt=''
            aria-hidden='true'
            loading='lazy'
          />
        </div>
      </section>

      <DesktopPanel />
      <DownloadAppPanel />
    </main>
  );
}

export default MobilePage;